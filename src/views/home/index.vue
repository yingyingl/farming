<template>
  <section class="page-container">
    <div class="max-width m-auto page-main">
      <el-carousel height="700rem" class="scroll-box m-b-30">
        <el-carousel-item class="scroll-item">
          <img src="../../assets/banner1.png" class="scroll-img" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/banner2.png" class="scroll-img" />
        </el-carousel-item>
      </el-carousel>

      <ul class="floor-box m-b-30">
        <li>
          <router-link to="/breeding">
            <img src="https://fengrangroup.com/template/pc/images/cy1.jpg" class="_bgimg" />
            <div class="_box">
              <span class="iconfont _icon">&#xe713;</span>
              <h3 class="_tit">育种体系</h3>
              <p>种苗培育研发</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/plant">
            <img src="https://fengrangroup.com/template/pc/images/cy2.jpg" class="_bgimg" />
            <div class="_box">
              <span class="iconfont _icon">&#xe632;</span>
              <h3 class="_tit">种植中心</h3>
              <p>科学化种植</p>
            </div>
          </router-link>
        </li>
        <li>
          <img src="https://fengrangroup.com/template/pc/images/cy4.jpg" class="_bgimg" />
          <div class="_box">
            <span class="iconfont _icon">&#xe633;</span>
            <h3 class="_tit">推广中心</h3>
            <p>一体化在线教学</p>
          </div>
        </li>
        <li>
          <img src="https://fengrangroup.com/template/pc/images/cy3.jpg" class="_bgimg" />
          <div class="_box">
            <span class="iconfont _icon">&#xe670;</span>
            <h3 class="_tit">加工体系</h3>
            <p>完备的供应链</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const $router = useRouter()

const goLink = (type) => {
  const url = {
    1: '/breeding'
  }
  $router.push(url[type])
}
</script>

<style scoped lang="less">
.scroll-img {
  width: 100%;
  height: 100%;
}

.floor-box {
  display: flex;
  justify-content: space-around;

  li {
    position: relative;
    width: 23%;
    height: 360rem;
    overflow: hidden;
    transition: all 300ms;
    cursor: pointer;
  }
  li:hover {
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    ._box {
      transform: scale(1.3);
    }
  }
  ._box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: @white-color;
    font-size: 16rem;
    transition: all 300ms;
  }
  ._icon {
    width: 60rem;
    height: 60rem;
    font-size: 80rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ._tit {
    font-size: 26rem;
    font-weight: 600;
    margin-top: 20rem;
  }
}
</style>