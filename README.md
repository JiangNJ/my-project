# git在线购买平台

### 使用技术：json-server，vue，vue-resource，vue-router，引入第三方库lodash

### 使用步骤（首先确保已经安装了node.js）
#### 1. git clone git@github.com:JiangNJ/my-project.git
#### 2. cd my-project
#### 3. npm run dev
#### 4. 在浏览器的地址栏输入localhost:8080
#### 5. 退出在命令行工具中输入ctrl+c
## 项目描述
#### 以vue.js 2.0为框架，使用官方提供的vue-cli的脚手架，webpack为打包压缩工具，搭建了一个在线交易平台。运用vue-router插件，将layout.vue设置为根组件，在main.js中设置路由，目的是在不刷新页面的情况下，跳转不同的模块页面，减少页面不断加载，提高性能。在设计页面之初将整个页面功能分成各个组件，当不同的模块页面需要某种功能时，直接引用功能模块，减少代码量，便于以后修改。
#### 在做项目时遇到不少问题：在引用子组件时，CSS的样式经常发生偏移或者无法呈现，在查阅Vue.js的官方文档中，找到解决方法，在<style>标签里加上scoped将各个模块的CSS封闭包裹起来，使父组件和子组件之间不会产生污染。使用Vue-resource插件，目的是与后端进行交互，在没有后端情况下，寻找到一个替代方法，使用json-server插件模拟一份假的数据实现交互。
#### 该项目使我对Vue框架的使用和配置调整有了更完善的理解，将页面进行拆分，分成不同的模块，在各个不同的页面之间灵活的使用不同功能模块，理解父组件和子组件之间的数据的相互传输。