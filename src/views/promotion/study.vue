<template>
  <section class="page-container">
    <div class="max-width m-auto">
      <div class="page-banner-box">
        <img src="../../assets/breeding-banner.png" class="page-banner" />
      </div>
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">旱碱麦推广中心在线学习</h2>
      <p class="page-desc">学习系统中，可以在线浏览农业种植技术规程、PPT课件、栽培技术等文本学习资料，浏览图片、学习视频</p>

      <ul class="list-box">
        <li @click="goLink(1)">
          <img src="../../assets/news1.jpg" class="img" />
          <div class="con">
            <p class="line-3 txt">受去年秋季干旱影响，我市旱碱麦区大部分麦田晚播，造成今年旱碱麦整体苗情较差，部分地块“一根针”。当前，随着气温回升，我市旱碱麦已陆续开始返青，正是抓好春季田间管理、促进苗情转化升级的关键时期。针对今年旱碱麦三类麦田占比高且苗情复杂的实际情况，旱碱麦推广体系组织专家对旱碱麦苗情和生产形势进行分析研判，提出了...</p>
            <p class="detail">详情</p>
          </div>
        </li>
        <li @click="goLink(2)">
          <img src="../../assets/news2.jpg" class="img" />
          <div class="con">
            <p class="line-3 txt">重点防控小麦茎基腐病、纹枯病、 白粉病、赤霉病、条 锈病、蚜虫、吸浆虫等重大病虫，兼顾麦蜘蛛、棉铃虫、麦 叶蜂、根腐病等。防治处置率 90%以上，综合防治效果 85%以 上，病虫危害损失率控制在 5%以内；绿色防控技术覆盖率 58%以上,化学农药使用量稳步降低...</p>
            <p class="detail">详情</p>
          </div>
        </li>
        <li @click="goLink(3)">
          <img src="../../assets/news3.jpg" class="img" />
          <div class="con">
            <p class="line-3 txt">种植在土壤含盐量为1‰～3‰的河北省滨海平原盐碱干旱生态类型区(以黄骅市及周边地区为 代表)，具有沧州小红芒品种特征的一类中强筋冬小麦,结合旋耕， 亩施腐熟有机肥1500 kg～2000 kg、低氯型复合肥40 kg（N-P2 O5-K2O=20-18-7），有 机肥可每2年施一次。肥料的使用应符合NY/T 496的规定...</p>
            <p class="detail">详情</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="t-right m-b-20" style="display: flex; justify-content: center;">
      <el-pagination
        large
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </div>

  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const $router = useRouter()

const goLink = (id) => {
  $router.push('/promotion/detail/' + id)
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
  padding: 40rem 0 20rem 0;
}
.page-desc {
  line-height: 40rem;
  font-size: 20rem;
  color: @main-color;
  text-align: center;
  padding-bottom: 40rem;
}

.list-box {
  li {
    display: flex;
    cursor: pointer;
    padding: 20rem 0;
    border-bottom: 1rem solid @main-border-color;

    .img {
      width: 140rem;
      margin-right: 20rem;
    }
    .con {
      flex: 1;
      white-space: normal;
      word-break: break-all;
    }
    .txt {
      overflow: hidden;
    }
    .detail {
      margin-top: 16rem;
      text-align: right;
      color: @main-color;
    }
  }
}
</style>