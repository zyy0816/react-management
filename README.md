## 项目步骤:
### 1.初始化项目结构
  - git仓库创建项目
  - git clone http:XXXX 拉取到本地
  - npm init 建初始package.json文件
  - 添加 .gitignore
  - npm install webpack -D安装依赖webpack
  - 建立webpack配置文件 webpack.config.js
  - 大致的文件结构，public静态资源文件夹，src项目主目录，src/index.js为入口文件

### 2.webpack项目打包 起本地服务
  - npm run start 执行打包，生成dist/bundle.js
  - npm run server 使用webpack构建本地服务 npm install --save-dev webpack-dev-server
### 3.loader模块，css/less/img打包
### babel转译
### route路由
安装react，react-dom

最新react去除掉了React.createClass

babelrc 安装@babel/preset-env ,
最新babel7需要补丁
"@babel/core": "^7.3.4",
"@babel/plugin-transform-react-jsx": "^7.3.0",
"@babel/preset-env": "^7.3.4",

render 不在react包里面，在react-dom包里面

组件的引入不用require,使用import

route引入的是组件的形式，不能是函数

### 4.引入 antd创建页面布局
  