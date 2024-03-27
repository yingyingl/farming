<template>
  <div class="header-null-box"></div>
  <section class="header-container">
    <div class="max-width m-auto header-main">
      <h1 class="logo-box">
        <router-link to="/"><img src="../assets/logo.png" class="logo" /></router-link>
      </h1>

      <p class="flex1 t-right">
        <span class="login">登录</span>
      </p>

      
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()

const showMunuBox = ref(window.innerWidth > 767)
const showMenuHandle = () => {
  showMunuBox.value = !showMunuBox.value
}

watch(() => window.innerWidth, (v) => {
  showMunuBox.value = v > 767
})

</script>

<style scoped lang="less">
.header-null-box {
  flex-shrink: 0;
  height: 70rem;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  flex-shrink: 0;
  background-color: rgba(6, 22, 64, .88);
  margin-bottom: 10rem;
}
.header-main {
  width: 100%;
  height: 70rem;
  display: flex;
  align-items: center;
  padding: 0 20rem;
}
.logo-box {
  font-size: 0;
}
.logo {
  width: 100rem;
  cursor: pointer;
}
.login {
  color: @main-color;
}

@media screen and (max-width: 767px) {
 
}
</style>