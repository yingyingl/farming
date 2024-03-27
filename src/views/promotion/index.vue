<template>
  <section class="page-container">
    <div class="max-width m-auto">
      <div class="page-banner-box">
        <img src="../../assets/breeding-banner.png" class="page-banner" />
      </div>
    </div>
    
    <div class="max-width m-auto p-lr-20 p-b-20 page-main">
      <h2 class="page-title">旱碱麦推广中心专家问答</h2>
      <p class="page-desc">问答系统中保存专家的姓名、专业、擅长领域等信息，要求可以实时在线回答农民提出的问题</p>

      <ul class="list-box">
        <li v-for="item in 6" :key="item">
          <div class="_box">
            <img src="../../assets/zhuanjia.jpg" class="__tx" />
            <div class="_con-bbb">
              <div class="_con">
                <div class="_con-item">
                  <label>姓名：</label>
                  <p>医生名字</p>
                </div>

                <div class="_con-item">
                  <label>擅长：</label>
                  <p>小麦生长环境，生长问题，疾病的预防以及治疗</p>
                </div>
              </div>

              <div class="btn-box">
                <el-button type="primary" :disabled="item%2 === 0">{{ item%2 !== 0 ? '在线咨询' : '不在线' }}</el-button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="less">
.page-container {
  flex: 1;
  min-height: 0;
}
.page-banner-box {
  width: 100%;
  max-height: 240rem;
  overflow: hidden;
}
.page-banner {
  width: 100%; 
}
.page-main {
  flex: 1;
  min-height: 0;
  width: 100%;
}
.page-title {
  font-size: 36rem;
  color: #061640;
  text-align: center;
  padding: 20rem 0 20rem 0;
}
.page-desc {
  line-height: 40rem;
  font-size: 20rem;
  color: @main-color;
  text-align: center;
  padding-bottom: 40rem;
}


.filter-box {
  border-top: 10rem solid @main-border-color;
  border-bottom: 10rem solid @main-border-color;
  padding: 20rem;
}
.list-box {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 50%;
    padding: 0 20rem 20rem;
  }
  ._box {
    display: flex;
    padding: 20rem 30rem;
    box-shadow: 0 9px 28px 8px rgba(6,22,64,.05), 0 6px 16px 0 rgba(6,22,64,.08), 0 3px 6px -4px rgba(6,22,64,.12);
  }
  .__tx {
    width: 30%;
    margin-right: 10rem;
  }
  ._name {
    font-size: 30rem;
  }
  ._con-item {
    display: flex;
    padding-bottom: 8rem;
    font-size: 14rem;
    color: #333;

    label {
      flex-shrink: 0;
      width: 60rem;
      font-weight: bold;
    }
    p {
      white-space: normal;
      word-break: break-all;
    }
  }

  ._con-bbb {
    display: flex;
    flex-direction: column;
  }
  ._con {
    flex: 1;
  }
  .btn-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>