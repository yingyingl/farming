<template>
  <section class="expert-container">
    <div class="max-width m-auto w-p-100">
      <div class="center-bread">云会商中心-会议列表</div>
    </div>

    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <el-table :data="tableData" class="table">
          <el-table-column label="会议所在平台">
            <template #default="{ row }">
              <div class="flex-center">
                <img src="../assets/metting/tx-icon.png" v-if="row.id == 'tx'"  />
                <img src="../assets/metting/dd-icon.png" v-if="row.id == 'dd'"  />
                <img src="../assets/metting/fs-icon.png" v-if="row.id == 'fs'"  />
                <img src="../assets/metting/zoom-icon.png" v-if="row.id == 'zoom'"  />
                {{ row.name }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="会议号">
            <template #default="{ row }">
              <span>
                {{ row.tel }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="会议主题" prop="title"></el-table-column>
          <el-table-column label="日期" prop="date"></el-table-column>
          <el-table-column label="开始时间-结束时间">
            <template #default="{ row }">
              <span>
                {{ row.time }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <div class="btn-box">
                <span class="_btn">预约会议</span>
                <span class="_btn">立即加入</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <img src="../assets/home/center-right.png" class="arrow-img arrow-right" />
    </div>

    <div class="max-width m-auto">
      <img src="../assets/metting/create-btn.png" class="create-btn"  />
    </div>


    <!-- 预约会议 -->
    <div class="meeting-form-modal" v-if="showModal">
      <div class="_mask"></div>
      <div class="_content">
        <img src="../assets/metting/create-title.png" class="__tit"  />
        <div class="flex1">
          <div class="input-box">
            <input type="text" />
          </div>
          <div class="input-box">
            <input type="text" />
          </div>
          <div class="input-box">
            <input type="text" />
          </div>
          <div class="input-box">
            <input type="text" />
          </div>
          <div class="input-box">
            <input type="text" />
          </div>
        </div>

        <img src="../assets/metting/create-btn.png" class="m-auto create-btn"  />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const tableData = [{
  id: 'tx',
  img: '../assets/metting/tx-icon.png',
  name: '腾讯会议',
  tel: '463-986-223',
  title: '会议主题字段会议主题字段',
  date: '2024年03月30日',
  time: '17:36— 18:36'
}, {
  id: 'dd',
  img: '../assets/metting/dd-icon.png',
  name: '钉钉会议',
  tel: '463-986-223',
  title: '会议主题字段会议主题字段',
  date: '2024年03月30日',
  time: '17:36— 18:36'
}, {
  id: 'fs',
  img: '../assets/metting/fs-icon.png',
  name: '飞书会议',
  tel: '463-986-223',
  title: '会议主题字段会议主题字段',
  date: '2024年03月30日',
  time: '17:36— 18:36'
}, {
  id: 'zoom',
  img: '../assets/metting/zoom-icon.png',
  name: 'ZOOM',
  tel: '463-986-223',
  title: '会议主题字段会议主题字段',
  date: '2024年03月30日',
  time: '17:36— 18:36'
}]


const showModal = ref(false)
const showModalHandle = (type) => {
  showModal.value = type
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
    border: 2rem solid;
    border-image: linear-gradient(180deg, rgba(157, 197, 254, 1), rgba(157, 198, 255, 0)) 2 2;
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

.btn-box {
  display: flex;

  ._btn {
    position: relative;
    cursor: pointer;
    font-weight: 500;
    font-size: 20rem;
    color: #3981E3;
    line-height: 28rem;
    padding: 0 20rem;
  }
  ._btn:nth-child(2) {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -8rem;
      width: 2rem;
      height: 16rem;
      background: #4C82D0;
      opacity: 0.3;
    }
  }
  
}

.create-btn {
  width: 233rem;
  height: 67rem;
  cursor: pointer;
}

/******/
.meeting-form-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  ._mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(13,27,49,0.8);
    backdrop-filter: blur(3px);
  }
  ._content {
    position: relative;
    z-index: 1;
    width: 644rem;
    height: 740rem;
    background: url('../assets/metting/yuyue-bg.png') no-repeat center;
    background-size: 100% 100%;
    padding: 60rem 72rem;
    display: flex;
    flex-direction: column;
  }
  .__tit {
    width: 125rem;
    height: 31rem;
    margin: 0 auto 50rem;
  }

  .input-box {
    width: 100%;
    height: 73rem;
    background-color: #fff;
    margin-bottom: 16rem;
    clip-path: polygon(6% 0, 100% 0, 100% 70%, 94% 100%, 0 100%, 0 30%); /* 调整四个坐标点来设置缺角的形状 */

    .input {
      width: 100%;
      height: 100%;
      font-size: 24rem;
      padding: 0 32rem;
    }
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