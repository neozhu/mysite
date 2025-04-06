# 使用 Hugo 官方构建镜像构建站点
FROM hugomods/hugo:std-ci-0.145.0 AS build

# 设置工作目录
WORKDIR /src

# 将本地 Hugo 项目复制进去
COPY . .

# 生成静态网页（可选添加 --minify）
RUN hugo --minify

# 使用轻量级 nginx 镜像作为最终容器
FROM nginx:alpine

# 删除默认 nginx 页面
RUN rm -rf /usr/share/nginx/html/*

# 拷贝 Hugo 生成的静态文件到 nginx 网站目录
COPY --from=build /src/public /usr/share/nginx/html

# 拷贝自定义 nginx 配置（可选）
# COPY nginx.conf /etc/nginx/nginx.conf

# 设置容器启动时的默认命令
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
