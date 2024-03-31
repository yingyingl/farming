<template>
  <section class="expert-container">
    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <h2 class="art-title">打败 Midjourney，这个 Google 大牛推出的 AI 产品凭什么弯道超车</h2>
        <p class="art-con">没有谁能一直称王，但加上前缀谁都有称王的机会。AI 文生图，还能玩出什么新花样？在这片群雄割据的红海，头部被 Midjourney、DALL·E、Stable Diffusion 等占据，其余还能让人眼前一亮的产品并不多。然而，仍有黑马杀出：Ideogram，前 Google 工程师创立，硅谷 AI 大神投资，去年 8 月面世，2 月底发布了最新的模型。</p>
        <img src="https://img0.baidu.com/it/u=2983778692,229617415&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500" class="art-img" />
        <h3 class="art-subtit">能「画图」和「摄影」，但 AI 可能还是</h3>
        <p class="art-con">	Ideogram 站出来表示，拒绝让 AI 继续做个「文盲」，不妨先从它开始。接触 Ideogram 的门槛很低，打开网页（https://ideogram.ai/）登录就能用，界面看起来也清爽不复杂。生成一张图片的步骤不多，在输入框填完提示词，再根据你想要的效果，勾选图片长宽比，以及照片、海报、3D 渲染等图片样式。</p>
      </div>

      <img src="../assets/home/center-right.png" class="arrow-img arrow-right" />
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const $router = useRouter()



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


.center-bread {
  position: relative;
  font-family: 'tx-Medium';
  font-size: 32rem;
  color: #FFFFFF;
  line-height: 39rem;
  padding-left: 24rem;
  background: url('../assets/expert/title-icon.png') no-repeat left center;
  background-size: 12rem 24rem;
  margin: 60rem 60rem 14rem;
}


.center-main {
  flex: 1;
  min-height: 0;
  padding: 0 200rem;
  overflow-y: auto;
}
.art-title {
  font-family: 'tx-Mudium';
  font-size: 36rem;
  color: #4375C5;
  line-height: 50rem;
  background: -webkit-linear-gradient(top, #F7FFFF 0%, #A0DEF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 50rem 0;
}
.art-con {
  font-weight: 400;
  font-size: 26rem;
  color: #FFFFFF;
  line-height: 37rem;
  opacity: .85;
}
.art-img {
  max-width: 100%;
  max-height: 100%;
  margin: 20rem auto;
  display: block;
}
.art-subtit {
  font-weight: 600;
  font-size: 32rem;
  color: #FFFFFF;
  line-height: 45rem;
  margin: 40rem 0;
  text-align: center;
}
@media screen and (max-width: 767rem) {
 
}
</style>
