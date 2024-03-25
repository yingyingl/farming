<template>
  <section class="page-container">
    <div class="max-width m-auto page-main">
      <el-carousel height="400rem" class="scroll-box m-b-30">
        <el-carousel-item class="scroll-item">
          <img src="../../assets/banner1.png" class="scroll-img" />
          <p class="scroll-text scroll-text1">提起旱碱麦，人们耳熟能详，皆知盐碱地专属“特产”。但你知道吗？培育一个能在盐碱地扎下跟，且稳产、高产的旱碱麦品种，并不是意见易事，甚至需要数十年的光阴。</p>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/banner2.png" />
          <p class="scroll-text scroll-text2">提起旱碱麦，人们耳熟能详，皆知盐碱地专属“特产”。但你知道吗？培育一个能在盐碱地扎下跟，且稳产、高产的旱碱麦品种，并不是意见易事，甚至需要数十年的光阴。</p>
        </el-carousel-item>
      </el-carousel>

      <ul class="floor-box m-b-30">
        <li>
          <img src="https://fengrangroup.com/template/pc/images/cy1.jpg" class="_bgimg" />
          <div class="_box">
            <img src="../../assets/icon1.png" class="_icon" />
            <h3 class="_tit">育种体系</h3>
            <p>种苗培育研发</p>
          </div>
        </li>
        <li>
          <img src="https://fengrangroup.com/template/pc/images/cy2.jpg" class="_bgimg" />
          <div class="_box">
            <img src="../../assets/icon1.png" class="_icon" />
            <h3 class="_tit">育种体系</h3>
            <p>种苗培育研发</p>
          </div>
        </li>
        <li>
          <img src="https://fengrangroup.com/template/pc/images/cy4.jpg" class="_bgimg" />
          <div class="_box">
            <img src="../../assets/icon1.png" class="_icon" />
            <h3 class="_tit">育种体系</h3>
            <p>种苗培育研发</p>
          </div>
        </li>
        <li>
          <img src="https://fengrangroup.com/template/pc/images/cy3.jpg" class="_bgimg" />
          <div class="_box">
            <img src="../../assets/icon1.png" class="_icon" />
            <h3 class="_tit">育种体系</h3>
            <p>种苗培育研发</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="less">
.scroll-img {
  width: 100%;
  height: 100%;
}
.scroll-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 500rem;
  font-size: 24rem;
  font-weight: 600;
  color: @white-color;
}

.scroll-text1 {
  left: 30rem;
}
.scroll-text2 {
  right: 30rem;
}

.floor-box {
  display: flex;
  justify-content: space-around;

  li {
    position: relative;
    width: 23%;
    height: 360rem;
    overflow: hidden;
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
  }
  ._icon {
    width: 60rem;
    height: 60rem;
  }
  ._tit {
    font-size: 26rem;
    font-weight: 600;
    margin-top: 10rem;
  }
}
</style>