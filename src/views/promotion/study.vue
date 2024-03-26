<template>
  <section class="page-container">
    <div class="page-banner-box">
      <img src="../../assets/breeding-banner.png" class="page-banner" />
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <p class="t-right m-t-10"><router-link to="/promotion">专家问答</router-link></p>
      <h2 class="page-title">旱碱麦推广中心在线学习</h2>
      <p class="page-desc">学习系统中，可以在线浏览农业种植技术规程、PPT课件、栽培技术等文本学习资料，浏览图片、学习视频</p>

      <ul class="list-box">
        <li v-for="item in 20" :key="item">>> {{item}}旱碱麦育种体系联合创新中心监控</li>
      </ul>
    </div>

    <div class="t-right m-b-20" style="display: flex; justify-content: center;">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </div>

  </section>
</template>

<script setup></script>

<style scoped lang="less">
.page-container {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.page-banner-box {
  width: 100%;
  height: 240rem;
  overflow: hidden;
}
.page-banner {
  width: 100%; 
}
.page-main {
  flex: 1;
  min-height: 0;
  width: 100%;
}
.page-title {
  font-size: 36rem;
  color: #061640;
  text-align: center;
  padding: 40rem 0 20rem 0;
}
.page-desc {
  line-height: 40rem;
  font-size: 20rem;
  color: @main-color;
  text-align: center;
  padding-bottom: 40rem;
}

.list-box {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
    padding: 8rem ;
    cursor: pointer;
  }
}
</style>