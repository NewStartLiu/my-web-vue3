<!--
 * @Descripttion: 工具模块
 * @version:
 * @Author: 刘熠
 * @Date: 2022-02-15 15:35:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-16 15:41:58
-->
<template>
  <a href="https://www.baidu.com" target="_blank" class="tool">
    <img src="@/assets/img/bdd.jpg" class="tool-icon" />
    <div class="tool-txt">
      <div class="tool-title">爱奇艺</div>
      <div class="tool-desc">热门影视剧、综艺节目</div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.tool {
  width: 200px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  transition: 0.5s;
  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0 4px 10px #8d8d8d;
    .tool-txt {
      .tool-title {
        color: #87ceeb;
      }
    }
  }
  .tool-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .tool-txt {
    text-align: left;
    line-height: 1.5;
    .tool-title {
      font-weight: bold;
      font-size: 12px;
    }
    .tool-desc {
      color: #a6acb0;
    }
  }
}
</style>
