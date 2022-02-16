<!--
 * @Descripttion: 首页
 * @version:
 * @Author: 刘熠
 * @Date: 2022-01-25 14:57:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-16 15:16:53
-->
<template>
  <div class="home">
    <div class="home-left">
      <div class="article-list" v-infinite-scroll="load">
        <ArticleCard
          v-for="item in articleCount"
          :key="item"
          class="article-item"
          :title="'123'"
          :desc="'123123'"
        />
      </div>
    </div>
    <div class="home-right">
      <div class="id-card card">
        <div class="id-card-header">
          <span class="name">张三</span>
          <span class="job">程序员</span>
        </div>
        <div class="id-card-main">
          <div class="id-card-main-left">
            <div>邮箱：12345678@qq.com</div>
            <div>电话：12345678910</div>
            <div>QQ：12345678</div>
          </div>
          <div class="id-card-main-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 变量
const articleCount = ref(4)
// 函数
const load = () => {
  if (articleCount.value < 10) articleCount.value += 4
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1366px;
  padding: 20px 0 0 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .home-left {
    width: 68%;
    .article-list {
      .article-item {
        margin: 0 0 20px 0;
      }
    }
  }
  .home-right {
    width: 26%;
    .id-card {
      width: 220px;
      height: 180px;
      .id-card-header {
        border-bottom: 1px solid #abc7d7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        font-weight: bold;
        .name {
          font-size: 20px;
        }
        .job {
        }
      }
      .id-card-main {
        text-align: left;
        padding: 10px;
        .id-card-main-left {
          font-size: 12px;
          div {
            line-height: 2.6;
          }
        }
      }
    }
  }

  .card {
    border-radius: 4px;
    background-color: #fff;
  }
}
</style>
