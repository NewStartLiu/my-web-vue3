<!--
 * @Descripttion: 布局
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-26 17:05:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 17:51:58
-->
<template>
  <header>
    <img class="logo" src="@/assets/img/logo.png" alt="logo" />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
// 变量
const activeIndex = '1'

// 函数
function handleSelect() {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  .logo {
    width: 200px;
  }
}
</style>
