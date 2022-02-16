<!--
 * @Descripttion:
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-15 10:12:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-16 14:32:09
-->
<template>
  <div class="tools">
    <section v-for="v in 2" :key="v">
      <CategoryTag :tag-name="'学习工具'"></CategoryTag>
      <div class="tool-list">
        <Tool v-for="item in 10" :key="item"></Tool>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import CategoryTag from './components/categoryTag.vue'
import Tool from './components/tool.vue'
</script>

<style lang="scss" scoped>
.tools {
  max-width: 1366px;
  padding: 20px 0 0 0;
  margin: 0 auto;
  section {
    .tool-list {
      padding: 14px;
      display: flex;
      flex-wrap: wrap;
      .tool {
        margin: 0 14px 14px 0;
      }
    }
  }
}
</style>
