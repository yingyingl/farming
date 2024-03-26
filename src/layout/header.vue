<template>
  <div class="header-null-box"></div>
  <section class="header-container">
    <div class="max-width m-auto header-main">
      <h1 class="logo-box">
        <router-link to="/"><img src="../assets/logo.png" class="logo" /></router-link>
      </h1>

      <div class="menu-container">
        <div class="menu-btn" @click="showMenuHandle"><i></i><i></i><i></i></div>
        <div class="menu-box" v-if="showMunuBox">
          <ul>
            <li :class="{'active': $route.path === '/index'}"><router-link to="/">首页</router-link></li>
            <li :class="{'active': $route.path.indexOf('/breeding') != -1}"><router-link to="/breeding">育种体系</router-link></li>
            <li :class="{'active': $route.path.indexOf('/plant') != -1}"><router-link to="/plant">种植中心</router-link></li>
            <li><router-link to="/">推广中心</router-link></li>
            <li :class="{'active': $route.path.indexOf('/process') != -1}"><router-link to="/process">加工体系</router-link></li>
            <li><router-link to="/">关于我们</router-link></li>
          </ul>
          <span>登录</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()
console.log($route.path)
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
.menu-container {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.menu-btn {
  width: 22rem;
  cursor: pointer;
  display: none;

  i {
    width: 100%;
    height: 2rem;
    margin-top: 3rem;
    display: block;
    background-color: @main-color;
  }
}
.menu-box {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  color: @main-color;

  ul {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      border-radius: 6rem;
      overflow: hidden;
      cursor: pointer;
      margin-left: 4rem;
      transition: all 200ms;
    }
    a {
      height: 40rem;
      line-height: 40rem;
      padding: 0 20rem;
      color: @white-color;
    }
    li.active, li:hover {
      color: @main-color;
      font-weight: 600;

      a {
        color: @main-color;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .menu-btn {
    display: block;
  }
  .menu-box  {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1;
    padding: 6rem 8rem;
    background-color: rgba(6, 22, 64, .88);
    border: 1px solid #999;
    border-radius: 10rem;

    ul {
      display: block;
    }
    li {
      text-align: center;
      margin-left: 0;
      margin-top: 4rem;
    }
  }
}
</style>