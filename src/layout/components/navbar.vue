<!--
 * @Descripttion:
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-15 10:08:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 13:55:23
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router="true"
  >
    <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
      {{ item.meta!.title }}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { routes } from '@/router'
import { useRoute } from 'vue-router'
// 变量
// 默认菜单选中
const activeIndex = useRoute().path || '/home'
// 菜单配置
const menuList = routes[0].children

// 函数
</script>
