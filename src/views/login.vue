<template>
  <section class="login-container">
    <div class="max-width m-auto login-main">
      <div class="login-center">
        <ul class="tab-box">
          <li :class="{'active': loginTab === 1}" @click="loginTabHandle(1)"><span>登录</span></li>
          <li :class="{'active': loginTab === 2}" @click="loginTabHandle(2)"><span>注册</span></li>
        </ul>

        <div class="input-container" v-if="loginTab === 1">
          <div class="input-box">
            <input type="text" v-model.trim="loginData.username" class="input" placeholder="请输入用户名" />
          </div>

          <div class="input-box">
            <input type="password" v-model.trim="loginData.password" class="input" placeholder="请输入密码" />
          </div>
        </div>

        <div class="input-container" v-if="loginTab === 2">
          <div class="input-box">
            <input type="text" v-model.trim="loginData.username" class="input" placeholder="请输入用户名" />
          </div>

          <div class="input-box">
            <input type="password" v-model.trim="loginData.password" class="input" placeholder="请输入密码" />
          </div>

          <div class="input-box">
            <input type="password" v-model.trim="loginData.surepassword" class="input" placeholder="请确认密码" />
          </div>
        </div>

        <div class="login-btn" @click="submitLogin"></div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'

const $route = useRoute()
const $router = useRouter()

const loginTab = ref(1)
const loginTabHandle = (type) => {
  loginTab.value = type
}

const loginData = reactive({
  username: '',
  password: '',
  surepassword: ''
})
const submitLogin = () => {
  if (!loginData.username) {
    ElMessage({ message: '请输入用户名', type: 'error' })
    return;
  }

  if (!loginData.password) {
    ElMessage({ message: '请输入密码', type: 'error' })
    return;
  }

  if (loginTab.value === 2 && (!loginData.surepassword || loginData.surepassword !== loginData.password)) {
    ElMessage({ message: '确认密码错误', type: 'error' })
    return;
  }

  localStorage.setItem('adminToken', loginData.username)
  $router.push({
    path: $route.query.redirect || '/index'
  })
}
</script>

<style scoped lang="less">
.login-container {
  flex: 1;
  background: #020441;
  display: flex;
  flex-direction: column;
}


.login-main {
  width: 100%;
  flex: 1;
  min-height: 0;
  background: url('../assets/login/login-bg.png') no-repeat bottom center;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-center {
  width: 644rem;
  height: 540rem;
  background: url('../assets/login/center-bg.png') no-repeat center;
  background-size: 100%;
  padding: 50rem 70rem;
  display: flex;
  flex-direction: column;
}

.tab-box {
  display: flex;
  justify-content: center;
  margin-bottom: 40rem;

  li {
    position: relative;
    font-family: 'tx-Medium';
    font-size: 32rem;
    color: #FFFFFF;
    line-height: 40rem;
    padding: 0 44rem 12rem;
    cursor: pointer;
    opacity: .5;
  }
  li.active {
    opacity: 1;
    background: -webkit-linear-gradient(top, #F7FFFF 0%, #A0DEF6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -14rem;
      width: 27rem;
      height: 6rem;
      background: linear-gradient( 180deg, #69B7F3 0%, #3880E3 100%);
      transform: skew(-45deg);
    }
  }
}

.input-container {
  flex: 1;
}
.input-box {
  width: 100%;
  height: 73rem;
  background-color: #fff;
  margin-bottom: 16rem;
  clip-path: polygon(6% 0, 100% 0, 100% 70%, 94% 100%, 0 100%, 0 30%); /* 调整四个坐标点来设置缺角的形状 */

  .input {
    width: 100%;
    height: 100%;
    font-size: 24rem;
    padding: 0 32rem;
  }
}
.login-btn {
  width: 233rem;
  height: 67rem;
  background: url('../assets/login/login-btn.png') no-repeat center;
  background-size: 100%;
  margin: 0 auto;
  cursor: pointer;
}
</style>

<style>
body { background: #020441; }
</style>