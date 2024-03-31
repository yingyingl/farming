<template>
  <section class="expert-container">
    <div class="max-width m-auto w-p-100">
      <div class="center-bread">企业数据库</div>
    </div>

    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <ul class="tab-box">
          <li 
            v-for="item in tabList" 
            :key="item.id" 
            :class="{active: item.id === nowTab}" 
            @click="tabHandle(item.id)"
          >{{ item.name }}</li>
        </ul>
        <el-table :data="tableData" class="table" v-show="nowTab ==1">
          <el-table-column label="企业名称"  prop="qymc"  min-width="100"></el-table-column>
          <el-table-column label="企业规模"  prop="qygm" min-width="100"></el-table-column>
          <el-table-column label="年加工水平" prop="jgsp"  min-width="100"></el-table-column>
          <el-table-column label="所属行业"  prop="sshy"  min-width="100"></el-table-column>
          <el-table-column label="产品"      prop="cp"  min-width="100"></el-table-column>
          <el-table-column label="简要介绍"   prop="jyjs" min-width="180"></el-table-column>
          <el-table-column label="详细说明"   prop="xxsm" width="200"></el-table-column>
        </el-table>

        <el-table :data="tableData2" class="table" v-show="nowTab ==2">
          <el-table-column label="企业名称"  prop="qymc"  min-width="100"></el-table-column>
          <el-table-column label="企业规模"  prop="qygm" min-width="100"></el-table-column>
          <el-table-column label="种植规模" prop="zzgm"  min-width="100"></el-table-column>
          <el-table-column label="所属行业"  prop="sshy"  min-width="100"></el-table-column>
          <el-table-column label="简要介绍"   prop="jyjs" min-width="180"></el-table-column>
          <el-table-column label="详细说明"   prop="xxsm" width="200"></el-table-column>
        </el-table>

      </div>

      <img src="../assets/home/center-right.png" class="arrow-img arrow-right" />
    </div>

    <div class="max-width m-auto m-t-20">
      <el-pagination
        v-model:current-page="page"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="pageTotal"
        background
        hide-on-single-page
        @current-change="getList"
      ></el-pagination>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'


/**
 * @desc tab
*/
const tabList = [
  {
    id: 1,
    name: '加工企业数据库'
  },
  {
    id: 2,
    name: '种植企业（基地）数据库'
  }
]
const nowTab = ref(1)
const tabHandle = (type) => {
  nowTab.value = type
}

const tableData = [{
  id: '1',
  qymc: '农业副食品公司',
  qygm: '500人',
  jgsp: '500万吨',
  zzgm:'50万亩',
  sshy: '农产加工',
  cp: '白面',
  jyjs: '公司主要以加工白面为主',
  xxsm: '其他小麦周边'

}]
for (var i = 0; i < 20; i++) {
  tableData.push({
    id: '1',
    qymc: '农业副食品公司',
    qygm: '500人',
    jgsp: '500万吨',
    zzgm:'50万亩',
    sshy: '农产加工',
    cp: '白面',
    jyjs: '公司主要以加工白面为主',
    xxsm: '其他小麦周边'

  })
}

const tableData2 = [{
  id: '1',
  qymc: '小麦种植基地',
  qygm: '500人',
  jgsp: '500万吨',
  zzgm:'50万亩',
  sshy: '小麦种植',
  cp: '小买',
  jyjs: '公司主要以种植小麦为主',
  xxsm: '其他小麦周边'

}]

for (var i = 0; i < 20; i++) {
  tableData2.push({
    id: '1',
    qymc: '小麦种植基地',
    qygm: '500人',
    jgsp: '500万吨',
    zzgm:'50万亩',
    sshy: '小麦种植',
    cp: '小买',
    jyjs: '公司主要以种植小麦为主',
    xxsm: '其他小麦周边'
  
})
}


const page = ref(1)
const pageSize=30
const pageTotal = 100
const getList = () => {}
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
  flex-direction: column;
  overflow-y: auto;
}

.center-bread {
  position: relative;
  font-family: 'tx-Medium';
  font-size: 32rpx;
  color: #FFFFFF;
  line-height: 39rpx;
  padding-left: 24rem;
  background: url('../assets/expert/title-icon.png') no-repeat left center;
  background-size: 12rem 24rem;
  margin: 60rem 60rem 30rem;
}

.table {
  background: none;
  min-height: 0;
}


:deep(.el-table) {
  .el-table__header-wrapper {
    background-color: rgba(76, 130, 208, .3);
  }
  thead,  thead tr {
    height: 62rem;
    background-color: transparent;
    font-weight: 500;
    font-size: 20rem;
    color: #FFFFFF;
  }

  .el-table__inner-wrapper:before {
    display: none;
  }
  

  th.el-table__cell, .el-table__row, .el-table__cell.is-leaf {
    border: none;
    background: none;
    font-weight: 400;
    font-size: 20rem;
    color: #FFFFFF;
  }

  .el-table__row {
    opacity: .9;
    td.el-table__cell {}
  }
  .el-table__row:hover {
    opacity: 1;

    td.el-table__cell { background: none; }
  }
  .el-table__body-wrapper {
    border: 2rem solid;
    border-image: linear-gradient(to top, rgba(157, 197, 254, 1), rgba(157, 198, 255, 0)) 2 2;
  }
}

:deep(.el-pagination.is-background) {
  .btn-next, .btn-prev, .el-pager li {
    background: none;
    border-radius: 2rem;
    border: 2rem solid rgba(157, 198, 255, 1);
    color: rgba(255,255,255,0.85);

    &:hover {
      background: linear-gradient( 180deg, #69B7F3 0%, #3880E3 100%);
      color: #fff;
    }
  }
  .btn-next.is-active, .btn-prev.is-active, .el-pager li.is-active {
    color: #fff;
    background: linear-gradient( 180deg, #69B7F3 0%, #3880E3 100%);
  }

  .btn-next.is-disabled, .btn-next:disabled, .btn-prev.is-disabled, .btn-prev:disabled, .el-pager li.is-disabled, .el-pager li:disabled {
    opacity: .5;

    &:hover {
      background: none;
      color: rgba(255,255,255,0.85);
    }
  }
}

.tab-box {
  border: 2rem solid;
  border-image: linear-gradient(180deg, rgba(157, 197, 254, 1), rgba(157, 198, 255, 0)) 2 2;
  display: flex;

  li {
    position: relative;
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 20rem;
    color: #FFFFFF;
    line-height: 28rem;
    padding: 16rem;
    opacity: .3;
    cursor: pointer;
  }
  li.active {
    opacity: 1;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      bottom: 10rem;
      left: 50%;
      margin-left: -14rem;
      width: 20rem;
      height: 4rem;
      background: linear-gradient( 180deg, #69B7F3 0%, #3880E3 100%);
      transform: skew(-45deg);
    }
  }
}


.dot-box {
  display: flex;
  flex-wrap: wrap;
}
.dili {
  padding-right: 20rem;
  display: flex;
  align-items: center;
  white-space: normal;
  word-break: normal;

  .dot {
    width: 8rem;
    height: 8rem;
    margin-right: 6rem;
    border-radius: 50%;
  }

  .dot0 {
    background: #3981E3;
  }
  .dot1 {
    background: #39E3C6;
  }
  .dot2 {
    background: #E3D639;
  }
  .dot3 {
    background: #E37D39;
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