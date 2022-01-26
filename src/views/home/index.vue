<!--
 * @Descripttion:
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 14:57:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 17:46:51
-->
<template>
  <el-button @click="handleClick({ data: 123 })">Default</el-button>
</template>

<script lang="ts" setup>
import { test } from '@/api/index'
// 函数
function handleClick(params: Object) {
  test(params)
}
</script>
