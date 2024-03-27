<template>
  <section class="page-container">
    <!-- 头部 -->
    <div class="header-null-box"></div>
    <section class="header-container">
      <div class="max-width m-auto header-main">
        <h1 class="logo-box">
          <router-link to="/"><img src="../../assets/logo.png" class="logo" /></router-link>
        </h1>

        <div class="menu-container">
          <div class="menu-btn" @click="showMenuHandle"><i></i><i></i><i></i></div>
          <div class="menu-box" v-if="showMunuBox">
            <ul>
              <li :class="{'active': nowHeaderTab == 0}" @click="clickHeaderTabHandle(0)">首页</li>
              <li :class="{'active': nowHeaderTab == 1}" @click="clickHeaderTabHandle(1)">育种体系</li>
              <li :class="{'active': nowHeaderTab == 2}" @click="clickHeaderTabHandle(2)">种植中心</li>
              <li :class="{'active': nowHeaderTab == 3}" @click="clickHeaderTabHandle(3)">推广中心</li>
              <li :class="{'active': nowHeaderTab == 4}" @click="clickHeaderTabHandle(4)">加工体系</li>
              <li :class="{'active': nowHeaderTab == 5}" @click="clickHeaderTabHandle(5)">关于我们</li>
            </ul>
            <span>登录</span>
          </div>
        </div>
      </div>
    </section>
    
    <div class="max-width m-auto page-main">
      <el-carousel height="600rem" class="scroll-box">
        <el-carousel-item class="scroll-item">
          <img src="../../assets/banner1.jpg" class="scroll-img" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/banner2.png" class="scroll-img" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/banner3.png" class="scroll-img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 育种体系 -->
    <div id="tabRef1" class="floor1-box">
      <div class="max-width m-auto p-b-30">
        <h2 class="page-title">旱碱麦育种体系联合创新中心</h2>
        <p class="page-desc">研究为进一步推进盐碱地种植小麦选育、栽培</p>

        <ul class="list-box breeding-box">
          <li>
            <a class="_box">
              <img src="../../assets/breeding-monitor.png" class="__img" />
              <div class="__con">
                <p class="___name">可视化监控</p>
                <p class="___desc">可视化监控，实时掌握农作物生长状态</p>
              </div>
            </a>
          </li>
          <li>
            <router-link to="breeding/data" class="_box">
              <img src="../../assets/breeding-data.jpg" class="__img" />

              <div class="__con">
                <p class="___name">数据</p>
                <p class="___desc">完备的数据体系，记录农作物生长数据</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 种植中心 -->
    <div id="tabRef2" class="floor2-box">
      <div class="max-width m-auto p-b-30">
        <h2 class="page-title">旱碱麦种植中心</h2>
        <p class="page-desc">研究为进一步推进盐碱地种植小麦选育、栽培</p>

        <router-link to="/plant/visualization" class="plant-box">
          <img src="../../assets/plant-img.png" class="__img" />
        </router-link>
      </div>
    </div>

    <!-- 推广中心 -->
    <div id="tabRef3" class="floor1-box">
      <div class="max-width m-auto p-b-30">
        <h2 class="page-title">旱碱麦推广中心 </h2>
        <p class="page-desc">通过试验、示范、培训、指导以及咨询服务等方式,将农业技术普及应用于农业生产产前、产中、产后全过程</p>

        <ul class="list-box promotion-box">
          <li>
            <router-link to="promotion" class="_box">
              <img src="../../assets/tg-img1.png" class="__img" />
              <p class="__name">专家问答</p>
              <p class="__desc">问答系统中保存专家的姓名、专业、擅长领域等信息，要求可以实时在线回答农民提出的问题</p>
            </router-link>
          </li>
          <li>
            <router-link to="promotion/study" class="_box">
              <img src="../../assets/tg-img2.png" class="__img" />
              <p class="__name">在线学习</p>
              <p class="__desc">学习系统中，可以在线浏览农业种植技术规程、PPT课件、栽培技术等文本学习资料，浏览图片、学习视频</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 种植中心 -->
    <div id="tabRef4" class="floor2-box">
      <div class="max-width m-auto p-b-30">
        <h2 class="page-title">旱碱麦加工体系</h2>
        <p class="page-desc">研究为进一步推进盐碱地种植小麦选育、栽培</p>

        <div class="plant-box">
          <img src="../../assets/jg-img.png" class="__img" />
        </div>
      </div>
    </div>

    <!-- 关于我们 -->
    <div id="tabRef5" class="floor1-box">
      <div class="max-width m-auto p-b-30">
        <h2 class="page-title">联系我们</h2>
        <p class="page-desc">我们为您提供了个性化的服务，以及全面的技术服务</p>

        <div class="plant-box">
          <el-carousel type="card" height="400px" class="concat-box" trigger="hover" :autoplay="false" indicator-position="none">
            <el-carousel-item class="_item">
              <img src="../../assets/hy-bg.jpg" class="__bg" />
              <a href="https://meeting.tencent.com/dm/lE1p03KSb6yv" class="__logo-box">
                <img src="../../assets/tx-logo.png" class="__logo" />
                腾讯会议
              </a>
            </el-carousel-item>
            <el-carousel-item class="_item">
              <img src="../../assets/hy-bg2.png" class="__bg" />
              <a href="https://meeting.tencent.com/dm/lE1p03KSb6yv" class="__logo-box">
                <img src="../../assets/dd-logo.jpg" class="__logo" />
                钉钉会议
              </a>
            </el-carousel-item>
            <el-carousel-item class="_item">
              <img src="../../assets/hy-bg3.png" class="__bg" />
              <a href="https://meeting.tencent.com/dm/lE1p03KSb6yv" class="__logo-box">
                <img src="../../assets/tw-logo.png" class="__logo" />
                WeLink
              </a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const $router = useRouter()
const showMunuBox = ref(window.innerWidth > 767)
const showMenuHandle = () => {
  showMunuBox.value = !showMunuBox.value
}

const nowHeaderTab = ref(0)
const clickHeaderTabHandle = (type) => {
  nowHeaderTab.value = type
  if (type && type > 0) {
    window.scrollTo({
      behavior: 'smooth',
      top: document.getElementById('tabRef' + type).offsetTop - 50
    })
  } else {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
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
      height: 40rem;
      line-height: 40rem;
      padding: 0 20rem;
      color: @white-color;
    }
    li.active, li:hover {
      color: @main-color;
      font-weight: 600;
    }
  }
}

.scroll-img {
  width: 100%;
  height: 100%;
}
.floor1-box {
  background-color: #F2F2F2;
}
.page-title {
  font-size: 36rem;
  color: #061640;
  text-align: center;
  padding: 84rem 0 20rem 0;
}
.page-desc {
  line-height: 40rem;
  font-size: 20rem;
  color: @main-color;
  text-align: center;
  padding-bottom: 40rem;
}

.list-box {
  display: flex;
  justify-content: center;

  li {
    width: 50%;
    max-width: 600rem;
    padding: 0 20rem;
  }
  ._box {
    position: relative;
    cursor: pointer;
    display: block;
    overflow: hidden;
    border-radius: 4rem;
  }
  .__img {
    width: 100%;
  }
}

.plant-box {
  position: relative;
  width: 100%;
  border-radius: 4rem;
  overflow: hidden;

  .__img {
    width: 100%;
  }
}

.breeding-box {
  .__con {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    color: @white-color;
    font-size: 20rem;
    padding: 0 50rem 50rem;
    transition: all 200ms;
  }

  .___name {
    font-size: 26rem;
    font-weight: bold;
    margin-bottom: 10rem;
  }
  .__img {
    transition: all 200ms;
    filter: blur(2rem);
  }
  ._box:hover {
    .__img {
      transform: scale(1.1);
    }
    .__con {
      bottom: 40rem;
    }
  }
}

.promotion-box {
  ._box {
    background: @white-bg;
    transition: all 200ms;
  }
  .__name {
    font-size: 28rem;
    font-weight: bold;
    padding: 10rem 20rem 0;
    color: #333;
  }
  .__desc {
    font-size: 20rem;
    padding: 10rem 20rem 20rem;
    color: #333;
  }
  ._box:hover {
    box-shadow: 0 9px 28px 8px rgba(6,22,64,.05), 0 6px 16px 0 rgba(6,22,64,.08), 0 3px 6px -4px rgba(6,22,64,.12);
    transform: scale(1.02);
  }
}


.concat-box {
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
  }

  .el-carousel__item:nth-child(2n + 1) {
  }
  ._item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    overflow: hidden;
  }
  .__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    filter: blur(6rem);
  }
  .__logo-box {
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: 20rem;
    font-weight: bold;
    text-align: center;
  }
  .__logo {
    width: 120rem;
    height: 120rem;
    display: block;
    margin-bottom: 10rem;
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