<template>
  <section class="header-container">
    <div class="max-width m-auto header-main">
      <h1 class="logo-box">
        <img src="../assets/logo.png" class="logo" />
      </h1>

      <div class="menu-container">
        <div class="menu-btn" @click="showMenuHandle"><i></i><i></i><i></i></div>
        <div class="menu-box" v-if="showMunuBox">
          <ul>
            <li class="active">首页</li>
            <li>育种体系</li>
            <li>种植中心</li>
            <li>推广中心</li>
            <li>加工体系</li>
            <li>关于我们</li>
          </ul>
          <span>登录</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const showMunuBox = ref(true)
const showMenuHandle = () => {
  showMunuBox.value = !showMunuBox.value
}

watch(() => window.innerWidth, (v) => {
  showMunuBox.value = v > 767
})

</script>

<style scoped lang="less">
.header-main {
  display: flex;
  align-items: center;
  padding: 10rem 20rem;
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
    background-color: @mainColor08;
  }
}
.menu-box {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;

  ul {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      height: 40rem;
      line-height: 40rem;
      padding: 0 20rem;
      border-radius: 6rem;
      overflow: hidden;
      cursor: pointer;
      margin-left: 4rem;
      transition: all 200ms;
    }
    li.active, li:hover {
      color: @white-color;
      font-weight: 600;
      background-color: @mainColor08;
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
    background: @white-bg;
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