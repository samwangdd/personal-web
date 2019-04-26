module.exports = {
  // extends: "airbnb",
  // extends: 'standard',
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  plugins: [
    'react'
  ],
  'rules': {
    "import/no-webpack-loader-syntax": 0,
    "no-dupe-class-members": 1,   //重复命名的类成员
    // "no-unused-vars": 2,    //未使用的变量
    "no-useless-concat": 1, //无效的拼接
    "no-multi-spaces": [1, {
      "ignoreEOLComments": true
    }],
    "react/jsx-tag-spacing": 1,        // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
    "jsx-quotes": 1,
    "react/jsx-closing-bracket-location": 0,    // 遵循JSX语法缩进/格式
    "react/jsx-boolean-value": 1,               // 如果属性值为 true, 可以直接省略
    "react/no-string-refs": 1,      // 总是在Refs里使用回调函数
    "react/self-closing-comp": 1,    // 对于没有子元素的标签来说总是自己关闭标签
    "react/sort-comp": 1,            // 按照具体规范的React.createClass 的生命周期函数书写代码
    "react/jsx-pascal-case": 1,        // React模块名使用帕斯卡命名，实例使用骆驼式命名
    "no-undef": 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
