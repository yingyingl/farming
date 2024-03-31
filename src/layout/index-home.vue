<template>
  <div class="layout-wrap">
    <div class="layout-main">
      <Header />

      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>

      <Footer />
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
  screenWidth = screenWidth > 1920 ? 1920 : screenWidth
  const currentFontSize = screenWidth / 1920
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
}
.layout-main {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 767px) {
}
</style>
<style>
body {  background: #0D1B31; }
</style>
