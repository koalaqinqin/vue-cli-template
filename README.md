1. 创建generator文件夹
2. 执行 yarn init 初始化package.json
3. yarn add yeoman-generator --dev 安装依赖
4. 安装generator的主入口文件（/generators/app/index.js）
5. 编写 /generators/app/index.js 的代码
6. 创建templates目录。把项目结构放入到templates目录下
7. 替换模板里的变量。
8. 遍历所有模板里的文件，并输出
9. yarn link 把我们的模块link到全局
10. 创建并切换到新的目录，使用 `yo vue-luo` 来使用我们的脚手架