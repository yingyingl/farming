<template>
  <div class="layout-wrap">
    <div class="layout-main">
      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>
    </div>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' 
import 'element-plus/dist/index.css' // elementui样式（按需引入调用方法需要）

import Header from './header'
import Footer from './footer.vue'

const setSize = () => {
  let screenWidth = document.documentElement.clientWidth
  screenWidth = screenWidth > 750 ? 750 : screenWidth
  const currentFontSize = screenWidth / 750
  document.documentElement.style.fontSize = currentFontSize + 'px'
}
setSize()
window.addEventListener('resize', setSize)

onUnmounted(() => {
  window.removeEventListener('resize', setSize)
})
</script>

<style lang="less" scoped>
.layout-wrap {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(243, 248, 255, .6);
}
.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 767px) {
}
</style>
