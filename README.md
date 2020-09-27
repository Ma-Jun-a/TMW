# TMW
vue vuerouter vuecli3

1. 首先安装webpack npm install webpack@3.6.0 --save-dev 用（-g）进项全局安装
2. 编写webpack的入口出口config.js文件
3. npm init 初始化项目
4. （1）安装vue  的时候npm install vue --save 运行时依赖
   （2）安装各种loader 
   可能存在css-loader的版本问题改为2.1.0后正常了
5. 配置loader  npm isntall vue-loader vue-template-compiler --save-dev
6. es6 语法处理的loader npm install -s babel-loader@7 babel-core babel-preset-es2015
7. 安装插件 npm install html-webpack-plugin --save-dev 开发时依赖 
8. 压缩js的插件 npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
9. 搭建本地服务器 npm install webpack-dev-server@2.9.1 --save-dev 执行 webpack-dev-server
10. npm install webpack-merge --save-dev配置文件分离合并

## cli
1. 安装 npm install -g @vue/cli 脚手架3这是 还需要拉一个2版本的模板 
2. 启动 2: vue init webpack 项目名 3: vue create 项目名


# 待优化
1. 增加keepalive
2. 增加导航守卫
