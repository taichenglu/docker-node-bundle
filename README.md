# nodejs 后端项目文件打包

### 应用场景
像打包前端代码一样打包后端代码，以便在创建 docker 镜像时过滤 node_modules，使镜像变小，加快 push 速度。

### 安装
```sh
npm install
```

### 非打包运行
```sh
npm start
```

### 打包
```sh
npm run build
```

### 打包后运行
```sh
npm run deploy
```

### docker build
```sh
docker build -t node-bundle-app .
```

### docker run
```sh
docker run -dP node-bundle-app
```
