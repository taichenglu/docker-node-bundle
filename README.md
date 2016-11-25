# nodejs 后端项目文件打包

### 应用场景
使用 webpack，像打包前端代码一样打包后端代码，以便在创建 docker 镜像时过滤 node_modules，使镜像变小，加快 push 速度。

### 安装
```sh
npm install
```

### 非打包运行
```sh
npm start
```

### 访问
```sh
http://localhost:3000
```

### 打包
```sh
npm run build
```

### 打包后运行（运行后可以访问）
```sh
npm run deploy
```

### docker build & run（运行后可以访问）
```sh
npm run docker
```
