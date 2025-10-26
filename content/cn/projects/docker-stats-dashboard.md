---
title: 'Docker 监控仪表盘'
image: /uploads/photos/docker-stats-dashboard-preview.png
date: 2025-10-26 00:00:00
tags: 
  - GitHub
  - Docker
  - 监控
  - Go
  - SvelteKit
---

{{< brick_title >}}
{{< button "GitHub 仓库" "https://github.com/neozhu/docker-stats-dashboard" >}}
{{< /brick_title >}}

> 说明：本项目的全部代码由 **AI CODEX** 在 **OpenSpec** 流程指导下自动完成。

![仪表盘预览占位图](/uploads/photos/docker-stats-dashboard-preview.png)

一个由两个组件组成的轻量级实时 Docker 容器指标监控方案。Go 编写的 Agent 直接从每台主机拉取统计数据；SvelteKit 仪表盘通过 Server‑Sent Events (SSE) 将所有连接聚合为浏览器可消费的单一数据流。无需额外的消息队列、数据库或笨重依赖，部署非常简单。

---

## 目录

1. [为什么要做这个？](#为什么要做这个)
2. [架构概览](#架构概览)
3. [仓库结构](#仓库结构)
4. [快速开始](#快速开始)
5. [配置参考](#配置参考)
6. [开发脚本](#开发脚本)
7. [持续集成](#持续集成)
8. [生产环境提示](#生产环境提示)
9. [路线图想法](#路线图想法)

## 为什么要做这个？

- **极小资源占用。** Agent 是一个无状态的 Go 二进制，贴近工作负载运行且不争抢资源；仪表盘是一个通过 SSE 推送数据的 SvelteKit 应用，每个环境只需一个精简的 Node 进程。
- **运维简单。** 发现主机、跟踪连接状态、展示每个容器 CPU/内存指标，都不需要额外基础设施。
- **部署无摩擦。** 以容器或二进制运行 Agent，通过一个环境变量告诉仪表盘所有 Agent 的地址，几分钟即可上线。

## 架构概览

```
Docker 主机(们)               仪表盘主机
-----------------            -------------
[docker-agent] --WS-->  ┐    SvelteKit 服务 --SSE--> 浏览器 UI
[docker-agent] --WS-->  ┘
```

1. 每个 Docker 主机运行 `docker-agent`，它轮询 Docker Engine 并通过 WebSocket 发布结构化指标。
2. 仪表盘的 Node 运行时维护到所有已配置 agent 的 WebSocket 出站连接。
3. 指标与状态更新被复用/聚合为一个 SSE 流 (`/stream/agents`)，供浏览器消费。

## 仓库结构

| 路径        | 描述 |
| ----------- | ---- |
| `agent/`    | Go WebSocket agent：抓取 Docker Engine API 并发送批量统计与心跳。 |
| `web/`      | SvelteKit 仪表盘：进程内 hub 将 agent 流量扇出为单一 SSE 端点。 |
| `openspec/` | OpenSpec 规范与变更提案，指导 AI 辅助开发。 |

## 快速开始

### 1. 在 Docker 主机上运行 Agent

```bash
cd agent
make run     # 或: go run .
```

默认监听地址：`ws://localhost:8080/ws`。可通过 `AGENT_HOST_LABEL="host-a"` 提供友好标签。

容器化方式：

```bash
cd agent
docker build -t docker-agent:dev .
docker run --rm \
  -p 8080:8080 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  docker-agent:dev
```

### 2. 配置并启动仪表盘

```bash
cd web
cp .env.local.example .env.local
# 编辑 AGENT_ENDPOINTS，例如：
# AGENT_ENDPOINTS=ws://host-a:8080/ws;ws://host-b:8080/ws
pnpm install
pnpm dev
```

浏览器访问 `http://localhost:5173` 查看实时指标。开发服务器聚合所有 Agent，并暴露 `/stream/agents` 给前端。

### 3. 可选：docker-compose 本地演示

```yaml
docker-compose:
  services:
    agent:
      build: ./agent
      environment:
        AGENT_HOST_LABEL: lab-node-1
      volumes:
        - /var/run/docker.sock:/var/run/docker.sock
    dashboard:
      build: ./web
      environment:
        AGENT_ENDPOINTS: ws://agent:8080/ws
      ports:
        - "5173:5173"
```

> 仪表盘只需网络访问各个 Agent URL；不共享状态。

## 配置参考

### Agent (`agent/`)

| Flag | 环境变量 | 默认值 | 作用 |
| ---- | -------- | ------ | ---- |
| `--docker-endpoint` | `AGENT_DOCKER_ENDPOINT` | `unix:///var/run/docker.sock` | Docker Engine API 端点 |
| `--listen` | `AGENT_LISTEN_ADDR` | `:8080` | HTTP/WebSocket 监听地址 |
| `--host-label` | `AGENT_HOST_LABEL` | 主机名 | UI 中展示的友好名称 |
| `--poll-interval` | `AGENT_POLL_INTERVAL` | `500ms` | 容器统计采样频率 |
| `--max-workers` | `AGENT_MAX_WORKERS` | `16` | 并发统计 worker 数 |

### 仪表盘 (`web/`)

| 变量 | 示例 | 说明 |
| ---- | ---- | ---- |
| `AGENT_ENDPOINTS` | `agent-a|DB Node|ws://10.0.0.15:8080/ws;agent-b|Cache|ws://10.0.0.16:8080/ws` | 用分号分隔；可省略 `id|label|` 自动生成默认值。 |

## 开发脚本

| 位置 | 命令 | 作用 |
| ---- | ---- | ---- |
| `agent/` | `make test` | 运行 Go 单元测试 |
| `agent/` | `make build` | 构建 `docker-agent` 二进制 |
| `web/`   | `pnpm lint` | 格式化与 Lint SvelteKit 代码 |
| `web/`   | `pnpm check` | 运行类型检查 |
| `web/`   | `pnpm test` | 执行 Vitest 单元测试 |

## 持续集成

| Workflow | 范围 | 内容 |
| -------- | ---- | ---- |
| `Agent CI` | `agent/` | push / PR 触发：执行 `go mod verify` 与 `go build ./...` |
| `Web CI` | `web/` | 安装依赖并构建 SvelteKit，确保可编译 |

## 生产环境提示

- 部署仪表盘推荐使用 `@sveltejs/adapter-node`，以保证 SSE 端点在长生命周期 Node 进程中运行。
- 反向代理 (Nginx / Caddy / Traefik) 转发 `/stream/agents` 时保持 `Content-Type: text/event-stream`。
- 横向扩展只需运行多个仪表盘实例指向同一批 Agent；若需要共享历史，可后续在 hub 背后接入消息总线 (Redis、NATS 等)。

## 路线图想法

- 内存历史缓冲，实现迷你折线图。
- SSE 端点 Token 认证。
- 可选 WebSocket 前端：用于暂停或过滤流。

---

该仓库——包括其中的每一行代码——均由 AI CODEX 依照 OpenSpec 工作流实现。欢迎通过 Pull Request 贡献。

---

> 占位说明：
> 1. 若更换预览图片，更新 front matter 中 `image` 路径。
> 2. 根据需要增删标签。
> 3. 英文版位于 `content/en/projects/docker-stats-dashboard.md`。
