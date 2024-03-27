<template>
  <section class="footer-container">
    <div class="max-width m-auto footer-main">
      <div class="_footer-content">
        <div class="__logo-box">
          <router-link to="/"><img src="../assets/logo.png" class="logo" /></router-link>
          <h3>联系我们</h3>
          <div class="contact-us">
            <label>邮箱：</label>134567@126.com
          </div>
        </div>
      </div>
      <p class="_footer-b">版权所有 © 旱碱麦 COPYRIGHT © 2024</p>
    </div>
  </section>
</template>

<style scoped lang="less">
.footer-container {
  background-color: rgba(6, 22, 64, .88);
}
.footer-main {
  color: @white-color;
  font-size: 14rem;
}
._footer-content {
  display: flex;
  padding: 30rem;

  h3 {
    font-size: 16rem;
    font-weight: bold;
    padding-bottom: 10rem;
  }
}
.__logo-box {
  width: 30%;
  .logo {
    width: 100%;
    margin-bottom: 20rem;
  }
  .contact-us {
    display: flex;
  }
}
._footer-b {
  border-top: 1rem solid @main-color;
  padding: 10rem 0;
  text-align: center;
}
</style>