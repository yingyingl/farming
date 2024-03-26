<template>
  <div>
    <div class="area-mask" @click="$emit('closeModal', '')"></div>
  <div class="area-container">
    <h2 class="_title">种植品种</h2>
    <div id="main" style="width: 100%; height: 400rem;"></div>
  </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { nextTick, onMounted } from 'vue';

const $emit = defineEmits(['closeModal'])

const getChartData = () => {
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Nightingale Chart',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8'
    ]
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Radius Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' }
      ]
    },
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['75%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' }
      ]
    }
  ]
};

option && myChart.setOption(option);


}


onMounted(() => {
  getChartData()
})
</script>

<style scoped lang="less">
.area-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255,255,255,.4);
  backdrop-filter: blur(10rem);
}
.area-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 90%;
  max-width: 1300px;
  max-height: 90%;
  background: @white-bg;
  border-radius: 20rem;
}
._title {
  font-size: 18rem;
  font-weight: 600;
  padding: 10rem 30rem;
  border-bottom: 1rem solid @main-border-color;
}
#main {
  padding: 20rem 30rem;
}
</style>