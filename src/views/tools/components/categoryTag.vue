<!--
 * @Descripttion: 分类标签
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-15 14:23:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 15:31:36
-->
<template>
  <div class="category-tag">
    <el-icon><star /></el-icon>
    <span class="tag-name">{{ props.tagName }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  tagName: String
})
</script>

<style lang="scss" scoped>
.category-tag {
  width: 140px;
  background: linear-gradient(to right, #fff, #87ceeb);
  text-align: right;
  padding: 10px 26px 10px 0;
  font-size: 16px;
  .tag-name {
    margin: 0 0 0 5px;
  }
}
</style>
