<template>
  <section class="page-container">
    <div class="max-width m-auto">
      <div class="page-banner-box">
        <img src="../../assets/breeding-banner.png" class="page-banner" />
      </div>
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">旱碱麦种植中心</h2>
      <p class="page-desc">密切关注旱碱麦种植业相关数据</p>

      <ul class="content-box">
        <li>
          <div class="img-box" @click="showChartsHandle(1)">
            <img src="https://echarts.apache.org/examples/data/thumb/radar-custom.webp?_v_=1710607049619" class="_img" />
            种植面积
          </div>
        </li>
        <li>
          <div class="img-box" @click="showChartsHandle(2)">
            <img src="https://echarts.apache.org/examples/data/thumb/bar-label-rotation.webp?_v_=1710607049619" class="_img" />
            种植产量
          </div>
        </li>
        <li>
          <div class="img-box" @click="showChartsHandle(3)">
            <img src="https://echarts.apache.org/examples/data/thumb/pie-roseType.webp?_v_=1710607049619" class="_img" />
            种植品种
          </div>
        </li>
        <li>
          <div class="img-box" @click="showChartsHandle(4)">
            <img src="https://echarts.apache.org/examples/data/thumb/area-stack.webp?_v_=1710607049619" class="_img" />
            气象数据
          </div>
        </li>
      </ul>
    </div>

    <AreaCharts v-if="showType == 1" @closeModal="showChartsHandle" />
    <YieldCharts v-if="showType == 2" @closeModal="showChartsHandle" />
    <VarietyCharts v-if="showType == 3" @closeModal="showChartsHandle" />
    <WeatherCharts v-if="showType == 4" @closeModal="showChartsHandle" />
  </section>
</template>

<script setup>
import AreaCharts from './areaCharts.vue'
import YieldCharts from './yieldCharts.vue'
import VarietyCharts from './varietyCharts.vue'
import WeatherCharts from './weatherCharts.vue'

const showType = ref('')
const showChartsHandle = (type) => {
  showType.value = type
}
</script>

<style scoped lang="less">
.page-container {
  flex: 1;
  min-height: 0;
}
.page-banner-box {
  width: 100%;
  max-height: 240rem;
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
.content-box {
  display: flex;
  justify-content: center;

  li {
    width: 25%;
    max-width: 300rem;
    padding: 0 20rem;
    color: #333;
    text-align: center;
  }
  .img-box {
    cursor: pointer;
  }
  ._img {
    width: 100%;
  }
}

.area-charts-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>