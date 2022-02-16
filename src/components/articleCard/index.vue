<!--
 * @Descripttion:文章卡片
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-10 14:15:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-16 15:34:12
-->
<template>
  <a href="https://www.baidu.com" class="article-card">
    <div class="article-img">
      <img :src="imgUrl" />
    </div>
    <div class="article-txt">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import defaultArticleImg from '@/assets/img/bdd.jpg'

const props = defineProps({
  title: String,
  desc: String,
  img: String
})

// 定义计算属性，使用同上
const imgUrl = computed(() => props.img || defaultArticleImg)
</script>

<style lang="scss" scoped>
.article-card {
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  padding: 10px;
  &:hover {
    .article-img {
      img {
        transform: scale(1.1);
      }
    }
  }
  .article-img {
    width: 160px;
    height: 120px;
    border-radius: 4px;
    margin: 0 20px 0 0;
    overflow: hidden;
    img {
      transition: 0.5s;
    }
  }

  .article-txt {
    .title {
      font-weight: bold;
      font-size: 20px;
      text-align: left;
    }
    .desc {
      font-size: 16px;
    }
  }
}
</style>
