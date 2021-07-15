module.exports = {
    printWidth: 200, // 单行宽度限制
    tabWidth: 4, // tab 使用四个个空格
    useTabs: false, // 不使用制表符缩进，使用空格缩进
    semi: false, // 代码需要分号结尾
    singleQuote: true, // 单引号
    bracketSpacing: true, // 对象左右两侧需要空格
    jsxBracketSameLine: false, // html 关闭标签换行
    arrowParens: 'avoid' // 单参数的箭头函数参数不需要括号
    // proseWrap: 'never', // 参考 https://prettier.io/docs/en/options.html#prose-wrap
    // trailingComma: 'none', // 参考 https://prettier.io/docs/en/options.html#trailing-commas
    // proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
    // endOfLine: 'auto', // 结尾是 \n \r \n\r auto
    // eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
    // htmlWhitespaceSensitivity: 'ignore',
    // ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    // jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    // parser: 'babylon', // 格式化的解析器，默认是babylon
    // requireConfig: false, // Require a 'prettierconfig' to format prettier
    // stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
    // tslintIntegration: false // 不让prettier使用tslint的代码格式进行校验
}
