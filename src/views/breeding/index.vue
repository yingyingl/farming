<template>
  <section class="page-container">
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <div class="m-b-10 page-break">您当前的位置: 
        <router-link to="/index" class="_link">首页</router-link>
        <span class="_arrow">&gt;</span>
        育种体系
      </div>

      <div class="page-box">
        <div class="box-sidebar">
          <h2>育种体系</h2>
        </div>

        <div class="box-content">育种体系内容</div>
      </div>

    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="less">
.page-container {
  flex: 1;
  min-height: 0;
  display: flex;
}
.page-main {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.page-box {
  flex: 1;
  background-color: @white-bg;
  border: 1rem solid @main-border-color;
  display: flex;
}
.box-sidebar {
  width: 200rem;
  border-right: 1px solid @main-border-color;

  h2 {
    line-height: 40rem;
    padding: 10rem 0;
    font-size: 18rem;
    font-weight: bold;
    background-color: @mainColor08;
    text-align: center;
    color: @white-color;
  }
}
.box-content {
  flex: 1;
  padding: 20rem;
  overflow-y: auto;
}

</style>