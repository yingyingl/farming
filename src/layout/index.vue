<template>
  <div class="layout-wrap">
    <div class="layout-right">
      <el-config-provider :locale="locale">
        <router-view />
      </el-config-provider>
    </div>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import 'element-plus/dist/index.css' // elementui样式（按需引入调用方法需要）

</script>

<style lang="less" scoped>
  .layout-wrap {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
@media screen and (max-width: 767px) {
  .layout-left {
    width: 54px;
    padding: 10px;
    overflow: hidden;
    
    .menu-list {
      margin-top: 20px;
      padding-left: 0;
    }
    .menu-l-row {
      padding: 4px;
      margin-left: 0;
    }
    .text {
      display: none;
    }
  }
}
</style>
