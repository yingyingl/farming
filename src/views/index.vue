<template>
  <section class="home-container">
    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <div class="center-left">
          <div class="center-menu left-top" @mouseover="hoverMenu(1)" @click="goNextPage(1)">
            <h2 class="center-menu-title">旱碱麦育种体系<br/>联合创新中心管理系统</h2>
            <h3 class="center-menu-desc">Drought alkali wheat breeding system Joint<br/> Innovation Center Management System</h3>
          </div>
          <div class="center-menu left-bottom" @mouseover="hoverMenu(3)" @click="goNextPage(3)">
            <h2 class="center-menu-title">旱碱麦<br/>种植中心管理系统</h2>
            <h3 class="center-menu-desc">Drought alkali wheatPlanting Center<br/> Management System</h3>
          </div>
        </div>

        <div class="center-content">
          <img src="../assets/home/center-bg-v6.png" class="center-img-ani img-ani-v6" />
          <img src="../assets/home/center-bg-v5.png" class="center-img-ani img-ani-v5" />
          <img src="../assets/home/center-bg-v4.png" class="center-img-ani img-ani-v4" />
          <img src="../assets/home/center-bg-v3.png" class="center-img-ani img-ani-v3" />
          <img src="../assets/home/center-bg-v2.png" class="center-img-ani img-ani-v2" />

          <img src="../assets/home/menu-img1.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 1" />
          <img src="../assets/home/menu-img2.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 2" />
          <img src="../assets/home/menu-img3.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 3" />
          <img src="../assets/home/menu-img4.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 4" />
        </div>

        <div class="center-right">
          <div class="center-menu right-top" @mouseover="hoverMenu(2)" @click="goNextPage(2)">
            <h2 class="center-menu-title">旱碱麦<br/>推广中心管理系统</h2>
            <h3 class="center-menu-desc">Management system for drought alkali<br/> wheat promotion center</h3>
          </div>
          <div class="center-menu right-bottom" @mouseover="hoverMenu(4)" @click="goNextPage(4)">
            <h2 class="center-menu-title">旱碱麦加工体系<br/>联合创新中心管理系统</h2>
            <h3 class="center-menu-desc">Dry alkali wheat processing systemJoint<br/> Innovation Center Management System</h3>
          </div>
        </div>
      </div>

      <img src="../assets/home/center-right.png" class="arrow-img arrow-right" />
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const $router = useRouter()

const menuType = ref(1)
const hoverMenu = (type) => {
  menuType.value = type
}


/**
 * @desc 跳转
*/
const goNextPage = (type) => {
  $router.push({
    path: '/manage?type=' + type
  })
}

</script>

<style scoped lang="less">
.home-container {
  flex: 1;
  background: #0D1B31;
  display: flex;
  flex-direction: column;
  min-height: 880rem;
  max-height: 960rem;
  justify-content: flex-end;
}
.home-main {
  width: 100%;
  display: flex;
  align-items: center;
  background: #0D1B31;
  padding: 0 15rem 0;
}
.arrow-img {
  flex-shrink: 0;
  width: 46rem;
}
.center-main {
  flex: 1;
  padding: 0 8rem;
  display: flex;
  align-items: center;
}

.center-left, .center-right {
  flex-shrink: 0;
  width: 592rem;
}
.center-left {
  .center-menu-title, .center-menu-desc  {
    text-align: right;
  }
}
.center-menu {
  width: 592rem;
  height: 397rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transition: all 300ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  .center-menu-title {
    font-family: 'tx-Medium';
    font-size: 36rem;
    color: #4375C5;
    line-height: 50rem;
    transition: all 300ms;
  }
  .center-menu-desc {
    font-family: DINPro-Regular;
    font-weight: 400;
    font-size: 18rem;
    color: #2A569C;
    line-height: 23rem;
    margin-top: 20rem;
    transition: all 300ms;
  }

  &:hover {
    transition: all 300ms;

    .center-menu-title {
      background: -webkit-linear-gradient(top, #F7FFFF 0%, #A0DEF6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 300ms;
    }
    .center-menu-desc { color: #fff; transition: all 300ms; }
  }

  &.left-top {
    margin-bottom: 30rem;
    background-image: url('../assets/home/left-top.png');
    padding-right: 230rem;
    align-items: flex-end;
  }
  &.left-top:hover {
    background-image: url('../assets/home/left-top-active.png');
  }
  &.left-bottom {
    background-image: url('../assets/home/left-bottom.png');
    padding-right: 230rem;
    align-items: flex-end;
  }
  &.left-bottom:hover {
    background-image: url('../assets/home/left-bottom-active.png');
  }
  &.right-top {
    margin-bottom: 30rem;
    background-image: url('../assets/home/right-top.png');
    padding-left: 230rem;
  }
  &.right-top:hover {
    margin-bottom: 30rem;
    background-image: url('../assets/home/right-top-active.png');
  }
  &.right-bottom {
    background-image: url('../assets/home/right-bottom.png');
    padding-left: 230rem;
  }
  &.right-bottom:hover {
    background-image: url('../assets/home/right-bottom-active.png');
  }
}

.center-content {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -160rem;
}

.center-img-ani {
  position: absolute;
  top: 50%;
  left: 50%;
}

.img-ani-v6 {
  width: 926rem;
  height: 762rem;
  margin-top: -381rem;
  margin-left: -463rem;
  z-index: 6;
  animation: imgAniV6 20s linear infinite;
}
@keyframes imgAniV6 {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

.img-ani-v5 {
  width: 828rem;
  height: 828rem;
  margin-top: -414rem;
  margin-left: -414rem;
  z-index: 5;
  animation: imgAniV6 14s linear infinite;
}

.img-ani-v4 {
  width: 758rem;
  height: 758rem;
  margin-top: -379rem;
  margin-left: -379rem;
  z-index: 4;
  animation: imgAniV6 8s linear infinite;
}
.img-ani-v3 {
  width: 804rem;
  height: 804rem;
  margin-top: -402rem;
  margin-left: -402rem;
  z-index: 3;
  animation: imgAniV6 4s linear infinite;
}
.img-ani-v2 {
  width: 576rem;
  height: 576rem;
  margin-top: -288rem;
  margin-left: -288rem;
  z-index: 2;
  animation: imgAniV6 5s linear infinite;
}

.menu-img {
  width: 576rem;
  height: 576rem;
  margin-top: -288rem;
  margin-left: -288rem;
  z-index: 1;
  animation: imgMenu 3s linear infinite, fadeIn 1s;
}
@keyframes imgMenu {
  0%, 100%  { transform: translateY(-10rem); }
  40% { transform: translateY(30rem); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media screen and (max-width: 767rem) {
 
}
</style>