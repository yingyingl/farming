<template>
  <section class="page-container">
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <div class="page-banner-box">
        <img src="../../assets/breeding-banner.png" class="page-banner" />
      </div>

      <h2 class="page-title">旱碱麦育种体系联合创新中心数据</h2>

      <el-form class="form-box" size="large">
        <el-form-item label="品种名称" class="m-r-20"><el-input /></el-form-item>
        <el-form-item label="生育期" class="m-r-20"><el-input /></el-form-item>
        <el-form-item label="选育单位" class="m-r-20"><el-input /></el-form-item>
        <el-form-item class="flex1"><el-button type="primary">搜索</el-button></el-form-item>
      </el-form>

      <el-table :data="dataList" border class="m-t-20" :row-class-name="tableRowClassName" size="large" :header-row-style="{ 'background': '#F2F2F2', 'font-weight': 'bold' }">
        <el-table-column label="品种名称" prop="name"></el-table-column>
        <el-table-column label="生育期" prop="date"></el-table-column>
        <el-table-column label="耐盐级别" prop="jLevel"></el-table-column>
        <el-table-column label="耐旱级别" prop="hLevel"></el-table-column>
        <el-table-column label="选育单位" prop="company"></el-table-column>
      </el-table>

      <div class="pager-box">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const dataList = ref([{
  name: '小麦',
  date: '6个月',
  jLevel: 1,
  hLevel: 3,
  company: '旱碱麦'
},{
  name: '玉米',
  date: '6个月',
  jLevel: 5,
  hLevel: 3,
  company: '旱碱麦'
},{
  name: '小麦',
  date: '6个月',
  jLevel: 1,
  hLevel: 3,
  company: '旱碱麦'
},{
  name: '小麦',
  date: '6个月',
  jLevel: 1,
  hLevel: 3,
  company: '旱碱麦'
},{
  name: '小麦',
  date: '6个月',
  jLevel: 1,
  hLevel: 3,
  company: '旱碱麦'
},{
  name: '小麦',
  date: '6个月',
  jLevel: 1,
  hLevel: 3,
  company: '旱碱麦'
},{
  name: '小麦',
  date: '6个月',
  jLevel: 1,
  hLevel: 3,
  company: '旱碱麦'
}])

const tableRowClassName = ({row, rowIndex}) => {
  if (rowIndex%2 == 0) {
    return 'row-1'
  } else {
    return 'row-2'
  }
  return ''
}

const currentPage4 = 2;
const pageSize4 = 15
const background = '#efc644'
const handleSizeChange = () => {}
const handleCurrentChange = () => {}
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
  padding: 50rem 0 60rem 0;
}
.form-box {
  display: flex;
}
:deep(.el-table .row-2) {
  --el-table-tr-bg-color: #f2f2f2;
}
:deep(.el-table th.el-table__cell) {
  background: transparent !important;

  .cell {
    font-weight: bold;
  }
}

.pager-box {
  margin: 20rem 0;
  display: flex;
  justify-content: flex-end;
}
</style>