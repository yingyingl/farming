<template>
  <div>
    <div class="area-mask" @click="$emit('closeModal', '')"></div>
  <div class="area-container">
    <h2 class="_title">种植产量</h2>
    <div id="main" style="width: 100%; height: 400rem;"></div>
  </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { nextTick, onMounted } from 'vue';


const $emit = defineEmits(['closeModal'])

const getChartData = () => {
  var app = {};

  var chartDom = document.getElementById('main');
  var myChart = echarts.init(chartDom);
  var option;

  const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
  ];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
      }
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
      }
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {})
    },
    distance: {
      min: 0,
      max: 100
    }
  };
  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance
      };
      myChart.setOption({
        series: [
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          },
          {
            label: labelOption
          }
        ]
      });
    }
  };
  const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
    }
  };
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390]
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290]
      },
      {
        name: 'Desert',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190]
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: [98, 77, 101, 99, 40]
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