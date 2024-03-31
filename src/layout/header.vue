<template>
  <section class="header-container">
    <div class="max-width m-auto home-header">
      <div class="back-box" v-if="showBack" @click="$router.go(-1)">
        <img src="../assets/second/back.png" class="back" />
      </div>

      <h1 class="logo-box">
        <img src="../assets/home/logo.png" class="logo" />
      </h1>
      <span class="header-ani"></span>

      <template v-if="$route.path !== '/login'">
        <span class="gologin" @click="gologin" v-if="!userName">登录</span>

        <div class="gologin" v-else>
          <img src="https://img.mp.sohu.com/upload/20170804/68f85952c3dc4beaaf45473155fb4917_th.png" class="_tx" />
          {{ userName }}
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const $route = useRoute()
const $router = useRouter()

const userName = ref()
userName.value = localStorage.getItem('adminToken')
const gologin = () => {
  if (userName.value) return

  $router.push({
    path: '/login'
  })
}

/**
 * @ddesc 是否展示返回按钮
*/
const showBack = computed(() => {
  return $route.path !== '/' && $route.path !== '/index' && $route.path !== '/login'
})
</script>

<style scoped lang="less">

.home-header {
  position: relative;
  height: 83rem;
  background: url('../assets/home/header-bg.png') no-repeat center;
  background-size: auto 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .logo {
    height: 44rem;
  }

  .header-ani {
    position: absolute;
    left: -300px;
    bottom: 0;
    z-index: 1;
    width: 300rem;
    height: 2rem;
    background: url('../assets/home/header-ani.png') no-repeat center;
    background-size: 100%;
    animation: headerAni 4s infinite;
  }
  .gologin {
    position: absolute;
    right: 20rem;
    font-size: 18rem;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;

    ._tx {
      width: 32rem;
      height: 32rem;
      margin-right: 8rem;
      border-radius: 50%;
    }
  }
}

.back-box {
  position: absolute;
  top: 50%;
  left: 32rem;
  z-index: 1;
  margin-top: -24rem;
  width: 106rem;
  height: 48rem;
  background: linear-gradient( 180deg, #69B7F3 0%, #3880E3 100%);
  box-shadow: 0px 0px 32rem 0px rgba(0,0,0,0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .back {
    width: 76rem;
    height: 28rem;
  }
}

@keyframes headerAni {
  from { left: -300rem; }
  to { left: 110%; }
}

@media screen and (max-width: 767px) {
 
}
</style>