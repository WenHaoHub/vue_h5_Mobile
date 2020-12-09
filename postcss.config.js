module.exports = {
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: [//gao版本使用
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
        ]
      },
      'postcss-pxtorem': {
        rootValue: 37.5,//
        propList: ['*']// 设置哪些属性可以从px变为rem。“！”表示不匹配，“ !font* ”表示不匹配字体相关属性
      }
    }
}