<template>
  <section class="page-container">
    <div class="page-banner-box">
      <img src="../../assets/breeding-banner.png" class="page-banner" />
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">旱碱麦育种体系联合创新中心数据</h2>

      <el-form class="form-box">
        <el-form-item label="品种名称" class="m-r-20"><el-input /></el-form-item>
        <el-form-item label="生育期" class="m-r-20"><el-input /></el-form-item>
        <el-form-item label="选育单位" class="m-r-20"><el-input /></el-form-item>
        <el-form-item class="flex1"><el-button type="primary">搜索</el-button></el-form-item>
      </el-form>

      <el-table :data="dataList">
        <el-table-column label="品种名称"></el-table-column>
        <el-table-column label="生育期"></el-table-column>
        <el-table-column label="耐盐级别"></el-table-column>
        <el-table-column label="耐旱级别"></el-table-column>
        <el-table-column label="选育单位"></el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script setup>
const dataList = ref([])
</script>

<style scoped lang="less">
.page-container {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.page-banner-box {
  width: 100%;
  height: 240rem;
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
  padding: 30rem 0 20rem 0;
}
.form-box {
  display: flex;
}
</style>