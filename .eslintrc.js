/*
 * @Descripttion: eslint配置
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 17:00:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 15:03:30
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true // 允许一元运算符++/--
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          // 禁止修改入参之入参名白名单
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state' // for vuex state
        ]
      }
    ],
    'vue/multi-word-component-names': 0 // 取消组件文件名必须驼峰式命名
  },
  settings: {
    'import/resolver': {
      typescript: { project: `${__dirname}/tsconfig.json` }
    }
  }
}
