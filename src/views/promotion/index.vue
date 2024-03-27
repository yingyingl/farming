<template>
  <section class="page-container">
    <div class="page-banner-box">
      <img src="../../assets/breeding-banner.png" class="page-banner" />
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">旱碱麦推广中心专家问答</h2>
      <p class="page-desc">问答系统中保存专家的姓名、专业、擅长领域等信息，要求可以实时在线回答农民提出的问题</p>

      <ul class="list-box">
        <li></li>
      </ul>
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
  padding: 20rem 0 20rem 0;
}
.page-desc {
  line-height: 40rem;
  font-size: 20rem;
  color: @main-color;
  text-align: center;
  padding-bottom: 40rem;
}


.filter-box {
  border-top: 10rem solid @main-border-color;
  border-bottom: 10rem solid @main-border-color;
  padding: 20rem;
}

.list-box li {
  
}
</style>