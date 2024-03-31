<template>
  <section class="manage-container">
    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <ul class="center-list list-left">
          <li class="_item1">
            <h2 class="_name">标准化育种全流程监控</h2>
            <h3 class="_desc">Full process monitoring of standardized breeding</h3>
          </li>
          <li class="_item2">
            <h2 class="_name">云会商中心</h2>
            <h3 class="_desc">Cloud Consultation Center</h3>
          </li>
          <li class="_item3">
            <h2 class="_name">育种体系繁育基地数据库</h2>
            <h3 class="_desc">Breeding system breeding base database</h3>
          </li>
          <li class="_item4">
            <h2 class="_name">品种数据库</h2>
            <h3 class="_desc">Variety database</h3>
          </li>
        </ul>
        <ul class="center-list list-right">
          <li class="_item5">
            <h2 class="_name">信息动态</h2>
            <h3 class="_desc">Information dynamics</h3>
          </li>
          <li class="_item6">
            <h2 class="_name">需求响应库</h2>
            <h3 class="_desc">Requirement Response Library</h3>
          </li>
          <li class="_item7">
            <h2 class="_name">科技成果库</h2>
            <h3 class="_desc">Science Technology Achievement Library</h3>
          </li>
          <li class="_item8">
            <h2 class="_name">专家智库</h2>
            <h3 class="_desc">Expert think tank</h3>
          </li>
        </ul>
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
.manage-container {
  flex: 1;
  background: #0D1B31;
  display: flex;
  flex-direction: column;
  min-height: 720rem;
  max-height: 860rem;
  justify-content: flex-end;
}
.home-main {
  width: 100%;
  display: flex;
  align-items: center;
  background: #0D1B31;
  padding: 0 15rem 0;
}
.arrow-img {
  flex-shrink: 0;
  width: 46rem;
}

.center-main {
  min-height: 690rem;
  flex: 1;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  background: url('../assets/second/center-bg.png') no-repeat center;
  background-size: 100%;
  display: flex;
  justify-content: space-around;
}

.center-list {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    height: 114rem;
    background-repeat: no-repeat;
    background-size: auto 100%;
    margin: 35rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: all 300ms;
  }
  li:hover {
    transform: scale(1.14);
  }
  ._name {
    font-family: 'tx-Medium';
    font-size: 30rem;
    color: #FFFFFF;
    line-height: 35rem;
    font-weight: 400;
  }
  ._desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16rem;
    color: #FFFFFF;
    line-height: 22rem;
    margin-top: 8rem;
    opacity: .5;
  }
  ._item1 {
    background-image: url('../assets/second/item-bg1.png');
  }
  ._item2 {
    background-image: url('../assets/second/item-bg2.png');
  }
  ._item3 {
    background-image: url('../assets/second/item-bg3.png');
  }
  ._item4 {
    background-image: url('../assets/second/item-bg4.png');
  }
  ._item5 {
    background-image: url('../assets/second/item-bg5.png');
  }
  ._item6 {
    background-image: url('../assets/second/item-bg6.png');
  }
  ._item7 {
    background-image: url('../assets/second/item-bg7.png');
  }
  ._item8 {
    background-image: url('../assets/second/item-bg8.png');
  }

}

.list-left {
  padding-left: 180rem;

  li { 
    padding-left: 150rem;
    background-position: left center;
  }

  ._item1, ._item4 { margin-left: 74rem; }
}

.list-right {
  align-items: flex-end;
  padding-right: 180rem;
  text-align: right;

  li { padding-right: 150rem; background-position: right center; }

  ._item5, ._item8 { margin-right: 74rem; }
}



@media screen and (max-width: 767rem) {
 
}
</style>