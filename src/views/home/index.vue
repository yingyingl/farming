<template>
  <section class="home-container">
    <div class="max-width m-auto home-main">
      <div class="home-header">
        <h1 class="logo-box">
          <img src="../../assets/home/logo.png" class="logo" />
        </h1>
        <span class="header-ani"></span>
      </div>


      <div class="home-center">
        <img src="../../assets/home/center-left.png" class="arrow-img arrow-left" />

        <div class="center-main">
          <div class="center-left">
            <div class="center-menu left-top" @mouseover="hoverMenu(1)">
              <h2 class="center-menu-title">旱碱麦育种体系<br/>联合创新中心管理系统</h2>
              <h3 class="center-menu-desc">Drought alkali wheat breeding system Joint<br/> Innovation Center Management System</h3>
            </div>
            <div class="center-menu left-bottom" @mouseover="hoverMenu(3)">
              <h2 class="center-menu-title">旱碱麦<br/>种植中心管理系统</h2>
              <h3 class="center-menu-desc">Drought alkali wheatPlanting Center<br/> Management System</h3>
            </div>
          </div>

          <div class="center-content">
            <img src="../../assets/home/center-bg-v6.png" class="center-img-ani img-ani-v6" />
            <img src="../../assets/home/center-bg-v5.png" class="center-img-ani img-ani-v5" />
            <img src="../../assets/home/center-bg-v4.png" class="center-img-ani img-ani-v4" />
            <img src="../../assets/home/center-bg-v3.png" class="center-img-ani img-ani-v3" />
            <img src="../../assets/home/center-bg-v2.png" class="center-img-ani img-ani-v2" />

            <img src="../../assets/home/menu-img1.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 1" />
            <img src="../../assets/home/menu-img2.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 2" />
            <img src="../../assets/home/menu-img3.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 3" />
            <img src="../../assets/home/menu-img4.png" class="center-img-ani menu-img" v-if="!menuType || menuType == 4" />
          </div>

          <div class="center-right">
            <div class="center-menu right-top" @mouseover="hoverMenu(2)">
              <h2 class="center-menu-title">旱碱麦<br/>推广中心管理系统</h2>
              <h3 class="center-menu-desc">Management system for drought alkali<br/> wheat promotion center</h3>
            </div>
            <div class="center-menu right-bottom" @mouseover="hoverMenu(4)">
              <h2 class="center-menu-title">旱碱麦加工体系<br/>联合创新中心管理系统</h2>
              <h3 class="center-menu-desc">Dry alkali wheat processing systemJoint<br/> Innovation Center Management System</h3>
            </div>
          </div>
        </div>

        <img src="../../assets/home/center-right.png" class="arrow-img arrow-right" />
      </div>


      <div class="home-footer"></div>
    </div>
  </section>
</template>

<script setup>

const menuType = ref(1)
const hoverMenu = (type) => {
  menuType.value = type
}

</script>

<style scoped lang="less">
.home-container {
  flex: 1;
  background: #0D1B31;
  display: flex;
  flex-direction: column;
}
.home-main {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background: #0D1B31;
}
.home-header {
  position: relative;
  height: 83px;
  background: url('../../assets/home/header-bg.png') no-repeat center;
  background-size: auto 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .logo {
    height: 44px;
  }

  .header-ani {
    position: absolute;
    left: -300px;
    bottom: 0;
    z-index: 1;
    width: 300px;
    height: 2px;
    background: url('../../assets/home/header-ani.png') no-repeat center;
    background-size: 100%;
    animation: headerAni 4s infinite;
  }
}

@keyframes headerAni {
  from { left: -300px; }
  to { left: 110%; }
}


.home-center {
  flex: 1;
  padding: 70px 15px 0;
  display: flex;
  align-items: center;
}
.arrow-img {
  width: 46px;
}
.center-main {
  flex: 1;
  padding: 0 8px;
  display: flex;
  align-items: center;
}

.center-left, .center-right {
  flex-shrink: 0;
  width: 592px;
}
.center-left {
  .center-menu-title, .center-menu-desc  {
    text-align: right;
  }
}
.center-menu {
  width: 592px;
  height: 397px;
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
    font-size: 36px;
    color: #4375C5;
    line-height: 50px;
    transition: all 300ms;
  }
  .center-menu-desc {
    font-family: DINPro-Regular;
    font-weight: 400;
    font-size: 18px;
    color: #2A569C;
    line-height: 23px;
    margin-top: 20px;
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
    margin-bottom: 30px;
    background-image: url('../../assets/home/left-top.png');
    padding-right: 230px;
    align-items: flex-end;
  }
  &.left-top:hover {
    background-image: url('../../assets/home/left-top-active.png');
  }
  &.left-bottom {
    background-image: url('../../assets/home/left-bottom.png');
    padding-right: 230px;
    align-items: flex-end;
  }
  &.left-bottom:hover {
    background-image: url('../../assets/home/left-bottom-active.png');
  }
  &.right-top {
    margin-bottom: 30px;
    background-image: url('../../assets/home/right-top.png');
    padding-left: 230px;
  }
  &.right-top:hover {
    margin-bottom: 30px;
    background-image: url('../../assets/home/right-top-active.png');
  }
  &.right-bottom {
    background-image: url('../../assets/home/right-bottom.png');
    padding-left: 230px;
  }
  &.right-bottom:hover {
    background-image: url('../../assets/home/right-bottom-active.png');
  }
}

.center-content {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -160px;
}

.center-img-ani {
  position: absolute;
  top: 50%;
  left: 50%;
}

.img-ani-v6 {
  width: 926px;
  height: 762px;
  margin-top: -381px;
  margin-left: -463px;
  z-index: 6;
  animation: imgAniV6 20s linear infinite;
}
@keyframes imgAniV6 {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

.img-ani-v5 {
  width: 828px;
  height: 828px;
  margin-top: -414px;
  margin-left: -414px;
  z-index: 5;
  animation: imgAniV6 14s linear infinite;
}

.img-ani-v4 {
  width: 758px;
  height: 758px;
  margin-top: -379px;
  margin-left: -379px;
  z-index: 4;
  animation: imgAniV6 8s linear infinite;
}
.img-ani-v3 {
  width: 804px;
  height: 804px;
  margin-top: -402px;
  margin-left: -402px;
  z-index: 3;
  animation: imgAniV6 4s linear infinite;
}
.img-ani-v2 {
  width: 576px;
  height: 576px;
  margin-top: -288px;
  margin-left: -288px;
  z-index: 2;
  animation: imgAniV6 5s linear infinite;
}

.menu-img {
  width: 576px;
  height: 576px;
  margin-top: -288px;
  margin-left: -288px;
  z-index: 1;
  animation: imgMenu 3s linear infinite, fadeIn 1s;
}
@keyframes imgMenu {
  0%, 100%  { transform: translateY(-10px); }
  40% { transform: translateY(30px); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.home-footer {
  height: 65px;
  background: url('../../assets/home/bottom-bg.png') no-repeat center;
  background-size: auto 100%;
  margin: 15px;
}

@media screen and (max-width: 767px) {
 
}
</style>