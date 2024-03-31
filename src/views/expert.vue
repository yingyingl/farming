<template>
  <section class="expert-container">
    <div class="max-width m-auto w-p-100">
      <div class="center-bread">专家智库</div>
    </div>

    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <div class="list-box">
          <div class="epxert-item">
            <div class="img-box">
              <img src="../assets/expert/郭进考.png" class="_img" />
            </div>

            <div class="content-box">
              <h2 class="_name">郭进考</h2>
              <p class="_desc">擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗。</p>
              <img src="../assets/expert/btn-zx.png" class="_btn" />
            </div>
          </div>

          <div class="epxert-item">
            <div class="img-box">
              <img src="../assets/expert/李振声.png" class="_img" />
            </div>

            <div class="content-box">
              <h2 class="_name">李振声</h2>
              <p class="_desc">擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗。</p>
              <img src="../assets/expert/btn-zx.png" class="_btn" />
            </div>
          </div>

          <div class="epxert-item">
            <div class="img-box">
              <img src="../assets/expert/马永安.png" class="_img" />
            </div>

            <div class="content-box">
              <h2 class="_name">马永安</h2>
              <p class="_desc">擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗。</p>
              <img src="../assets/expert/btn-zx.png" class="_btn" />
            </div>
          </div>

          <div class="epxert-item">
            <div class="img-box">
              <img src="../assets/expert/茹振钢.png" class="_img" />
            </div>

            <div class="content-box">
              <h2 class="_name">茹振钢</h2>
              <p class="_desc">擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗。</p>
              <img src="../assets/expert/btn-zx.png" class="_btn" />
            </div>
          </div>

          <div class="epxert-item">
            <div class="img-box">
              <img src="../assets/expert/许为钢.png" class="_img" />
            </div>

            <div class="content-box">
              <h2 class="_name">许为钢</h2>
              <p class="_desc">擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗。</p>
              <img src="../assets/expert/btn-zx.png" class="_btn" />
            </div>
          </div>

          <div class="epxert-item">
            <div class="img-box">
              <img src="../assets/expert/赵振东.png" class="_img" />
            </div>

            <div class="content-box">
              <h2 class="_name">赵振东</h2>
              <p class="_desc">擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗擅长小麦生长环境，生长问题，疾病的预防以及治疗。擅长小麦生长环境，生长问题，疾病的预防以及治疗。</p>
              <img src="../assets/expert/btn-zx.png" class="_btn" />
            </div>
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
  overflow-y: auto;
}
.list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

@media screen and (max-width: 767rem) {
 
}
</style>

<style>
.layout-wrap {
  height: 100% !important;
}
</style>