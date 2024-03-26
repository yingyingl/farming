<template>
  <section class="page-container">
    <img src="../../assets/breeding-banner.png" class="page-banner" />
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">旱碱麦育种体系联合创新中心</h2>
      <p class="page-desc">研究为进一步推进盐碱地种植小麦选育、栽培</p>

      <ul class="tab-box">
        <li class="active">
          <div class="tab-con">
            <span class="iconfont">&#xe6d0;</span>
            <p>监控</p>
          </div>
        </li>
        <li>
          <div class="tab-con">
            <span class="iconfont iconfont2">&#xe652;</span>
            <p>商会</p>
          </div>
        </li>
        <li>
          <div class="tab-con">
            <span class="iconfont iconfont3">&#xe617;</span>
            <p>数据</p>
          </div>
        </li>
      </ul>

      <ul class="jk-box">
        <li>
          <img src="https://aiplat.mapfarm.com/assets/img/ability_img11.83039c3e.png" class="_img" />
        </li>
        <li>
          <img src="https://aiplat.mapfarm.com/assets/img/ability_img12.c38957b1.png" class="_img" />
        </li>
        <li>
          <img src="https://aiplat.mapfarm.com/assets/img/ability_img15.f2328e49.png" class="_img" />
        </li>
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
.page-banner {
  width: 100%;
  height: 400rem;
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
  padding: 84rem 0 20rem 0;
}
.page-desc {
  line-height: 40rem;
  font-size: 20rem;
  color: @main-color;
  text-align: center;
  padding-bottom: 40rem;
}

.tab-box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30rem;

  li {
    width: 33.3333%;
    max-width: 300rem;
    display: flex;
    justify-content: center;
  }
  .tab-con {
    width: 190rem;
    text-align: center;
    cursor: pointer;
    padding-bottom: 20rem;
  }
  .iconfont {
    width: 80rem;
    height: 80rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 56rem;
    margin: 0 auto;
  }
  .iconfont2 {
    font-size: 72rem;
  }
  .iconfont3 {
    font-weight: bold;
  }

  li.active {
    color: @main-color;
    .tab-con { border-bottom: 2rem solid @main-color; }
    p { font-weight: bold; }
  }
}

.jk-box {
  display: flex;

  li {
    width: 33.3333%;
    max-width: 300rem;
  }
  ._img {
    width: 100%;
    margin: 0 20rem;
  }
}
</style>