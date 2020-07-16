const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting () { // 命令行询问用户问题
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ])
    .then(answers => { // 用户输入数据的返回值
      this.answers = answers;
    })
  }

  writing () {
    // 把每一个文件都通过模板转换到目标路径
    const templates = [
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router/index.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/views/about.vue',
      'src/views/home.vue'
    ]

    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}