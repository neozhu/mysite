# 使用轻量级 nginx 镜像作为运行环境
FROM nginx:alpine

# 删除默认 nginx 静态页面
RUN rm -rf /usr/share/nginx/html/*

# 将本地生成的 public 文件夹复制进 nginx 目录
COPY public/ /usr/share/nginx/html/

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
