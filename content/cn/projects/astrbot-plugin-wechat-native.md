---
title: 'WeChat Native - AstrBot 个人微信接入插件'
image: /uploads/illustrations/cuate/astrbot-wechat-native-showcase.png
date: 2026-10-30 00:00:00
tags: ["GitHub", "AstrBot", "微信机器人", "Python", "AI"]
description: "WeChat Native 是面向 AstrBot 的开源插件，通过 agent-wechat-native /v1 API 直接接入个人微信，支持私聊、群聊 @回复、白名单、断线重连与 SQLite 持久化去重。"
summary: "无需额外 Bridge 服务即可在 AstrBot 内直连 agent-wechat-native /v1 API。结合 SSE 游标恢复、SQLite 原子去重与幂等回执校验，提供可靠、不留存聊天正文的个人微信 AI 接入方案。"
seo:
  title: "WeChat Native - AstrBot 个人微信接入插件 | BlazorStudio"
  description: "了解 WeChat Native 如何通过 agent-wechat-native /v1 API 将 AstrBot 接入个人微信，包含完整 Docker Compose 环境部署、Token 配置、扫码登录与排障指南。"
slug: "wechat-native-astrbot-个人微信接入插件"
---

{{< brick_title >}}
{{< button "查看 GitHub 项目" "https://github.com/neozhu/astrbot-plugin-wechat-native" >}}
{{< /brick_title >}}

WeChat Native（`astrbot-plugin-wechat-native`）是一个运行在 AstrBot 内部的开源个人微信接入插件，通过 **agent-wechat-native `/v1` API** 直接连接个人微信。插件直接安装在 AstrBot 中，不需要额外部署中间 Bridge 服务，即可将大语言模型对话能力、人格配置与插件生态接入日常私聊和群聊场景。

针对个人微信机器人在长连接中断、容器重启或网络抖动时容易出现的重复回复、漏回或错乱问题，WeChat Native 在插件层内置了完整的事件游标恢复、SQLite 状态持久化、撤回拦截和发送幂等控制，专注于稳定可靠的纯文本对话交互。

- **适配版本**：AstrBot `4.29.3`（`>=4.29.3,<5`）、`agent-wechat-native v1.2.0`
- **运行环境**：Python `3.12+`
- **当前支持范围**：支持文本私聊、群聊 `@` 回复、白名单、独立会话、断线重连和持久化去重；暂不支持图片、语音、文件及原生引用回复（请关闭该机器人的**文本转图片**功能）。

## 核心功能与可靠性设计

- **直连 Native API：** 插件直接在 AstrBot 内对接 `agent-wechat-native` 的 `/v1` 接口与 `/events/stream` 事件流，消除了额外桥接服务的运维复杂度。
- **私聊与群聊 @回复：** 支持私聊开关与多种群聊触发策略（`mention` 真正 @机器人、`all` 全部群文本、`disabled` 禁用群回复），手打纯文本 `@名字` 或 `@全体` 不会误触发默认回复；分段输出时仅首段自动 @原发送者。
- **白名单与独立会话：** 支持按 `allowed_users`（发送者 ID）和 `allowed_groups`（以 `@chatroom` 结尾的群 ID）精确控制可交互范围，并提供 `unique_session` 选项让同群不同成员保有各自独立的上下文会话。
- **断线重连与游标恢复：** 通过 SSE 订阅事件流，使用持久化的十进制字符串游标通过 `after` 与 `Last-Event-ID` 恢复连接，并在每次连接时校验 `/v1/status.serverId`，防止服务端重建后静默沿用旧游标。
- **实时性过滤与撤回感知：** 仅处理 `origin == "live"` 且在最近 5 分钟内（允许 60 秒时钟误差）产生的实时文本消息，忽略历史同步或过期积压；收到撤回事件时立即停止待处理事件，并在发送前二次核查原消息状态。
- **原子化去重与幂等发送：** 在 `/AstrBot/data/plugin_data/astrbot_plugin_wechat_native/` 下按实例自动维护 SQLite 状态库，将消息 ID 去重与事件游标在同一事务提交；每条输出先持久化唯一 `Idempotency-Key` 再单次 `POST`，超时或 `5xx` 时仅按原键查询回执而不盲目重发，且**状态库与插件日志均不存储聊天正文和 Token**。

## 安装与参数配置

1. 启动 Native 服务并完成微信登录（全新 Docker 环境部署见下一节）。
2. 在 AstrBot **插件管理 → 从链接安装** 中输入：
   `https://github.com/neozhu/astrbot-plugin-wechat-native`
3. 在 **机器人 → 新增机器人** 中选择 **WeChat Native**，填写连接与回复规则并启用。
4. 为机器人选择 AstrBot 配置文件，配置模型和人格，再测试私聊及群 `@` 回复。

![WeChat Native 机器人参数配置示例](/uploads/photos/wechat-native-config.png)

### 连接信息（AstrBot 机器人表单）

以下字段填写在 AstrBot 的机器人表单中（并非 Native 的 `server.toml`）：

| 字段 | 填写说明 | 本文 Docker 示例 |
| --- | --- | --- |
| `server_url` | AstrBot 能访问的 Native 地址，可带 `/v1` | `http://127.0.0.1:6174` |
| `account_id` | Native 的账号 `id`，从 `wx accounts list` 获取（不是微信号） | 替换为实际 ID |
| `token_file` | Token 文件的**容器内路径**，优先于 `token` | `/run/secrets/wechat-api-token` |
| `token` | 不用文件时填写 Native API Token，会保存在 AstrBot 配置里 | 使用文件时留空 |

> Native Token 需要目标账号的 **read + send** 权限。更换 Token 文件后需重启机器人。

### 回复规则

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `enable_private_reply` | `true` | 是否回复私聊 |
| `allowed_users` | `[]` | 私聊 `senderId` 白名单；空列表允许所有人，不限制群成员 |
| `group_reply_mode` | `mention` | `mention`：真正 @机器人；`all`：全部群文本；`disabled`：不回复群聊 |
| `allowed_groups` | `[]` | 群 `threadId` 白名单，通常以 `@chatroom` 结尾；空列表允许所有群 |
| `unique_session` | `true` | 同群不同成员独立会话；关闭后同群共享会话 |

用户 ID 和群 ID 可使用 Native 的 `wx contacts find 名字`、`wx chats list` 查询。

## Docker 环境部署：同一台 Linux 主机

部署需要安装 Docker Compose 和 OpenSSL。已有部署请在**原 Compose 项目**中修改，保留项目名和数据卷。

两个服务均使用 **host 网络**，因此 AstrBot 可直接通过 `http://127.0.0.1:6174` 访问 Native，无需配置 `ports` 映射，Native 的默认监听地址也保持在本机回环地址。

### 1. 准备 Native 配置和 Token

全新部署时先创建工作目录及配置目录：

```bash
mkdir -p wechat-bot
cd wechat-bot
sudo mkdir -p /opt/agent-wechat-native
sudoedit /opt/agent-wechat-native/server.toml
```

在 `/opt/agent-wechat-native/server.toml` 中写入：

```toml
schemaVersion = 1
listen = "127.0.0.1:6174"
dataDir = "/var/lib/agent-wechat"
tokenFile = "/run/secrets/wechat-api-token"
```

生成 Token 并设置权限（**已有 Token 会自动保留，不会覆盖正在使用的凭据**；Native 容器用户为 UID/GID `10001`，Token 文件保持 `600` 并只读挂载）：

```bash
sudo sh -c '
  umask 077
  test -f /opt/agent-wechat-native/api-token ||
    openssl rand -hex 32 > /opt/agent-wechat-native/api-token
'
sudo chown 10001:10001 /opt/agent-wechat-native/api-token
sudo chmod 600 /opt/agent-wechat-native/api-token
sudo chmod 644 /opt/agent-wechat-native/server.toml
```

### 2. 创建 compose.yaml

在 `wechat-bot` 目录下创建 `compose.yaml`：

```yaml
services:
  astrbot:
    image: soulter/astrbot:latest
    container_name: astrbot
    restart: unless-stopped
    network_mode: host

    environment:
      TZ: Asia/Shanghai

    volumes:
      - astrbot_data:/AstrBot/data
      - /opt/agent-wechat-native/api-token:/run/secrets/wechat-api-token:ro

    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"

  agent-wechat:
    image: ghcr.io/thisnick/agent-wechat-native:v1.2.0
    container_name: agent-wechat
    restart: unless-stopped
    network_mode: host
    user: "10001:10001"
    read_only: true

    cap_drop:
      - ALL

    security_opt:
      - no-new-privileges:true

    environment:
      TZ: Asia/Shanghai
      TMPDIR: /var/cache/agent-wechat

    tmpfs:
      - /tmp:rw,noexec,nosuid,size=64m,mode=1777

    volumes:
      - agent_wechat_native_data:/var/lib/agent-wechat
      - agent_wechat_native_scratch:/var/cache/agent-wechat
      - /opt/agent-wechat-native/server.toml:/etc/agent-wechat/server/config.toml:ro
      - /opt/agent-wechat-native/api-token:/run/secrets/wechat-api-token:ro

    stop_grace_period: 30s

volumes:
  astrbot_data:
  agent_wechat_native_data:
  agent_wechat_native_scratch:
```

- `astrbot_data` 保存 AstrBot 配置、会话及插件回执；`agent_wechat_native_data` 保存 Native 账号和登录状态，升级时请保留它们，**不要执行 `docker compose down -v` 删除登录数据**。
- `agent_wechat_native_scratch` 是临时快照空间，需预留磁盘容量。
- 若自行将 AstrBot 改为非 root 用户运行，需确保该用户可读挂载的 Token 文件。

### 3. 启动服务并登录微信

校验配置并后台启动容器：

```bash
docker compose config --quiet
docker compose up -d
docker compose logs --tail=50 agent-wechat astrbot
```

首次在 Native 容器内登记本机服务，并查询账号：

```bash
docker compose exec agent-wechat wx config server add local --url http://127.0.0.1:6174 --token-file /run/secrets/wechat-api-token
docker compose exec agent-wechat wx --server-name local accounts list
```

没有账号时创建一个，再按提示扫码或在手机上确认（已有账号时直接使用原账号，不要重复创建）：

```bash
docker compose exec agent-wechat wx --server-name local accounts create --alias me
docker compose exec agent-wechat wx --server-name local --account me auth login
docker compose exec agent-wechat wx --server-name local accounts list
```

记下返回的账号 `id`。使用期间请保持官方桌面微信客户端关闭。

### 4. 配置 AstrBot 机器人

打开 `http://宿主机IP:6185`，按启动日志中的初始凭据登录并修改密码。安装本插件后，在 **WeChat Native** 机器人表单中填写：

- `server_url`：`http://127.0.0.1:6174`
- `account_id`：上一步返回的实际账号 ID
- `token_file`：`/run/secrets/wechat-api-token`（注意：宿主机文件是 `/opt/agent-wechat-native/api-token`，**此处必须填挂载后的容器内路径**）
- `token`：留空

配置好模型后启用机器人。管理面板端口 `6185` 建议仅向管理网络开放，Native 端口 `6174` 保持本机访问。

### 5. 检查连接与网络排查

进入 **插件管理 → WeChat Native → 可视化视图 → 连接测试**：
- **已连接**：表示 Native API 验证通过。
- **在线 / 离线**：单独表示微信账号在线状态。

排查网络连通性时，可从 AstrBot 容器内执行只读检查（不会在终端输出 Token 明文）：

```bash
docker compose exec -T astrbot python - <<'PY'
import json
from pathlib import Path
from urllib.request import Request, urlopen

token = Path("/run/secrets/wechat-api-token").read_text().strip()
req = Request("http://127.0.0.1:6174/v1/status",
              headers={"Authorization": "Bearer " + token})
with urlopen(req, timeout=5) as response:
    print("Native 服务状态:", json.load(response).get("state"))
PY
```

### 其他网络环境说明

- **Windows / macOS Docker Desktop**：host 网络需先在 Docker Desktop 设置中启用，文件权限也需按宿主环境调整。
- **Native 在另一台主机**：`server_url` 填写 AstrBot 实际可达的 HTTPS 地址或加密隧道入口；Token 文件需在 AstrBot 所在主机另行准备并挂载，反向代理需关闭 SSE 缓冲并允许长连接。
- **AstrBot 使用 bridge 网络**：容器内的 `127.0.0.1` 指向它自身；仅加入同一 Docker 网络或增加端口映射不能让 Native 的 loopback 监听自动对外可达，需配置受保护的可达入口。

## 常见问题排查

| 现象 | 检查方法 |
| --- | --- |
| 没有 WeChat Native 类型 | 确认插件已启用、AstrBot 版本符合要求，刷新页面或重启 |
| `401` / `403` | 检查 Native Token、账号范围及 `read/send` 权限 |
| Token 文件不可读 | 核对容器内路径、挂载文件是否存在、运行用户读取权限 |
| 连接拒绝 / 超时 | 从 AstrBot 容器检查地址、网络模式和 Native 是否启动 |
| API 已连接，微信离线 | 在 Native 完成扫码登录或等待账号恢复连接 |
| 在线但不回复 | 检查模型、白名单和群触发模式；历史或超过 5 分钟的消息会被忽略，注意两机时钟同步 |
| `needs_review` / `partial` | 保留回执，先核对真实聊天；不要自动重发或删除状态库 |
| `HTTP 410` / 游标过期 | 停止机器人并备份状态，由管理员核对 Native 事件保留范围 |

本插件采用 MIT 许可证开源，完整源码与回执运维说明可在 GitHub 仓库查看。
