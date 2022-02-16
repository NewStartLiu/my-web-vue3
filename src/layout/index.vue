<!--
 * @Descripttion: 布局
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-26 17:05:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 14:12:57
-->
<template>
  <header>
    <img class="logo" src="@/assets/img/logo.png" alt="logo" />
    <NavBar></NavBar>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
import NavBar from './components/navbar.vue'
</script>

<style lang="scss" scoped>
header {
  padding: 0 160px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  .logo {
    width: 200px;
  }
}
main {
  background-color: skyblue;
  min-height: calc(100vh - 72px);
}
</style>
