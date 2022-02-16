/*
 * @Descripttion:
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-10 13:34:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-10 13:52:49
 */
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android >= 4.0',
        'iOS >= 7',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions' // 所有主流浏览器最近10版本用
      ]
    },
    'postcss-pxtorem': {
      rootValue: 192,
      propList: ['*', '!border*']
    }
  }
}
