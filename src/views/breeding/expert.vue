<template>
  <section class="page-container">
    <div class="page-banner-box">
      <img src="../../assets/breeding-banner.png" class="page-banner" />
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">专家商会</h2>
      <p class="page-desc">研究为进一步推进盐碱地种植小麦选育、栽培</p>

      <ul class="tab-box">
        <li>
          <a href="https://meeting.tencent.com/dm/gKDNPFtTo4FZ" target="_blank" class="tab-con">
            <span class="iconfont">&#xe60a;</span>
            <p>腾讯会议</p>
          </a>
        </li>
        <li>
          <router-link to="/" class="tab-con">
            <span class="iconfont">&#xe6d0;</span>
            <p>腾讯会议</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="tab-con">
            <span class="iconfont">&#xe60a;</span>
            <p>腾讯会议</p>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="tab-con">
            <span class="iconfont">&#xe600;</span>
            <p>Welink</p>
          </router-link>
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
    color:#333;
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
    color:royalblue;
  }
  .iconfont2 {
    font-size: 72rem;
  }
  .iconfont3 {
    font-weight: bold;
  }
}

</style>