<template>
  <section class="expert-container">
    <div class="max-width m-auto w-p-100">
      <div class="center-bread">需求检索</div>
    </div>

    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <div class="epxert-item" v-for="item in 10" :key="item" @click="goNextLink(1)">
          <div class="img-box">
            <img src="https://p1-q.mafengwo.net/s9/M00/DF/E4/wKgBs1gDDt6AKrTbABPsiRWqoFw41.jpeg" class="_img" />
          </div>

          <div class="content-box">
            <h2 class="_name">打败 Midjourney，这个 Google 大牛推出的 AI 产品凭什么弯道超车</h2>
            <p class="_desc">在这片群雄割据的红海，头部被 Midjourney、DALL·E、Stable Diffusion 等占据，其余还能让人眼前一亮的产品并不多…</p>
            <img src="../assets/artical/view-btn.png" class="_btn" />
          </div>
        </div>
      </div>

      <img src="../assets/home/center-right.png" class="arrow-img arrow-right" />
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const $router = useRouter()

const goNextLink = (type) => {
  $router.push(`/promotion/${type}`)
}

</script>

<style scoped lang="less">
.expert-container {
  flex: 1;
  min-height: 0;
  background: #0D1B31;
  display: flex;
  flex-direction: column;
}
.home-main {
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  background: #0D1B31;
  padding: 0 15rem;
}
.arrow-img {
  flex-shrink: 0;
  width: 46rem;
}

.center-main {
  flex: 1;
  min-height: 0;
  padding: 0 8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
}

.center-bread {
  position: relative;
  font-family: 'tx-Medium';
  font-size: 32rpx;
  color: #FFFFFF;
  line-height: 39rpx;
  padding-left: 24rem;
  background: url('../assets/expert/title-icon.png') no-repeat left center;
  background-size: 12rem 24rem;
  margin: 60rem 60rem 14rem;
}

.epxert-item {
  width: 860rem;
  padding: 32rem;
  background: url('../assets/expert/item-bg.png') no-repeat center;
  background-size: 100% 100%;
  margin-bottom: 24rem;
  display: flex;
}
.img-box {
  position: relative;
  width: 179rem;
  height: 203rem;
  overflow: hidden;
  background: #fff;
  clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%); /* 调整四个坐标点来设置缺角的形状 */
  display: flex;
  align-items: center;
  justify-content: center;

  ._img {
    max-width: 100%;
    max-height: 100%;
  }
}

.content-box {
  flex: 1;
  padding-left: 32rem;
  display: flex;
  flex-direction: column;

  ._name {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 24rem;
    color: #FFFFFF;
    line-height: 33rem;
    margin-bottom: 16rem;
  }
  ._desc {
    flex: 1;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16rem;
    color: #FFFFFF;
    line-height: 22rem;
    opacity: .65;
  }
  ._btn {
    width: 169rem;
    height: 49rem;
    margin-top: 10rem;
    cursor: pointer;
  }
}

@media screen and (max-width: 767rem) {
 
}
</style>

<style>
.layout-wrap {
  height: 100% !important;
}
</style>