<template>
  <section class="expert-container">
    <!--
    <div class="max-width m-auto w-p-100">
      <div class="center-bread">需求检索</div>
    </div>
-->
    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <div class="search-container">
          <h2 class="_title">需求检索</h2>
          <div class="search-box">
            <img src="../assets/artical/search.png" class="_search" />
            <input type="text" class="_input" placeholder="请输入搜索的内容" />
          </div>
          <img src="../assets/search-btn.png" class="_search-btn" />
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
  justify-content: center;
  align-items: center;
  overflow-y: auto;
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

.search-box {
  width: 420rem;
  height: 62rem;
  box-shadow: inset 0px 0px 56rem 0px rgba(76,130,208,0.4);
  clip-path: polygon(6% 0, 100% 0, 100% 70%, 94% 100%, 0 100%, 0 30%); /* 调整四个坐标点来设置缺角的形状 */
  display: flex;
  align-items: center;
  padding: 0 24rem;

  ._search {
    width: 24rem;
    height: 24rem;
  }
  ._input {
    flex: 1;
    font-size: 22rem;
    height: 62rem;
    padding-left: 14rem;
    background: none;
    color: #fff;
  }
}


.search-container {
  ._title {
    font-size: 38rem;
    font-family: 'tx-Medium';
    background: -webkit-linear-gradient(top, #F7FFFF 0%, #A0DEF6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4rem 0px rgba(160,222,246,.2);
    margin-bottom: 40rem;
    text-align: center;
  }
}

._search-btn {
  width: 233rem;
  height: 67rem;
  margin: 47rem auto 0;
  display: block;
}



@media screen and (max-width: 767rem) {
 
}
</style>

<style>
.layout-wrap {
  height: 100% !important;
}
</style>