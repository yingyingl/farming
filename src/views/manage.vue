<template>
  <section class="manage-container">
    <div class="max-width m-auto home-main-bg" :class="'home-main-bg' + sort"></div>

    <div class="max-width m-auto w-p-100 relative" style="z-index: 2;">
      <div class="center-bread">{{ nowTitle }}</div>
    </div>

    <div class="max-width m-auto home-main">
      <img src="../assets/home/center-left.png" class="arrow-img arrow-left" />

      <div class="center-main">
        <ul class="center-list list-left">
          <template v-for="(item, index) in listLeft">
            <li :class="`_item${index + 1}`" v-if="item.link == 1">
              <a :href="item.url" target="_blank">
                <h2 class="_name">{{ item.name }}</h2>
                <h3 class="_desc">{{ item.enName }}</h3>
              </a>
            </li>
            <li :class="`_item${index + 1}`" v-else  @click="goNextPage(item)">
              <h2 class="_name">{{ item.name }}</h2>
              <h3 class="_desc">{{ item.enName }}</h3>
            </li>
          </template>
        </ul>
        <ul class="center-list list-right">
          <template v-for="(item, index) in listRight">
            <li :class="`_item${index + 5}`" v-if="item.link == 1">
              <a :href="item.url" target="_blank">
                <h2 class="_name">{{ item.name }}</h2>
                <h3 class="_desc">{{ item.enName }}</h3>
              </a>
            </li>
            <li :class="`_item${index + 5}`" v-else  @click="goNextPage(item)">
              <h2 class="_name">{{ item.name }}</h2>
              <h3 class="_desc">{{ item.enName }}</h3>
            </li>
          </template>
        </ul>
      </div>

      <img src="../assets/home/center-right.png" class="arrow-img arrow-right" />
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const $route = useRoute()
const $router = useRouter()
const sort = $route.query.sort
const listLeft = ref([])
const listRight = ref([])

// 联合创新中心
if (sort == 1) {
  listLeft.value = [
    {
      id: 1,
      name: '育种全流程监测',
      enName: 'Full process monitoring of standardized breeding',
      url: 'http://182.92.115.164:8001/#/bigscreen/preview?code=bigScreen_pxXkVHIkYd',
      link: 1
    },
    {
      id: 2,
      name: '云会商中心',
      enName: 'Cloud Consultation Center',
      url: '/meeting',
      link: 0
    },
    {
      id: 3,
      name: '育种体系繁育基地数据库',
      enName: 'Breeding system breeding base database',
      url: '/list',
      link: 0
    },
    {
      id: 4,
      name: '品种数据库',
      enName: 'Variety database',
      url: '/variety',
      link: 0
    }
  ]
  listRight.value = [
    {
      id: 5,
      name: '信息动态',
      enName: 'Information dynamics',
      url: '/information',
      link: 0
    },
    {
      id: 6,
      name: '技术服务',
      enName: 'Requirement Response Library',
      url: '/demand',
      link: 0
    },
    {
      id: 7,
      name: '科技成果库',
      enName: 'Science Technology Achievement Library',
      url: '/technological',
      link: 0
    },
    {
      id: 8,
      name: '专家智库',
      enName: 'Expert think tank',
      url: '/expert',
      link: 0
    }
  ]
}

// 2、旱碱麦推广中心管理系统
if (sort == 2) {
  listLeft.value = [
    // {
    //   id: 1,
    //   name: '标准化育种全流程监控',
    //   enName: 'Full process monitoring of standardized breeding',
    //   url: 'http://182.92.115.164:8001/#/bigscreen/preview?code=bigScreen_4DrCdi0bxm',
    //   link: 1
    // },
    {
      id: 1,
      name: '专家智库',
      enName: 'Expert think tank',
      url: '/expert',
      link: 0
    },
    {
      id: 2,
      name: '云会商中心',
      enName: 'Cloud Consultation Center',
      url: '/meeting',
      link: 0
    },
    {
      id: 3,
      name: '旱碱麦推广中心在线学习中心',
      enName: 'Breeding system breeding base database',
      url: '/promotion',
      link: 0
    },
    // {
    //   id: 4,
    //   name: '品种数据库',
    //   enName: 'Variety database',
    //   url: '/variety',
    //   link: 0
    // }
  ]
  listRight.value = [
    {
      id: 5,
      name: '信息动态',
      enName: 'Information dynamics',
      url: '/information',
      link: 0
    },
    {
      id: 6,
      name: '技术服务',
      enName: 'Requirement Response Library',
      url: '/demand',
      link: 0
    },
    {
      id: 7,
      name: '科技成果库',
      enName: 'Science Technology Achievement Library',
      url: '/technological',
      link: 0
    }

  ]
}


// 联合种植中心
if (sort == 3) {
  listLeft.value = [
    {
      id: 1,
      name: '标准化种植全流程监控',
      enName: 'Full process monitoring of wheatPlanting breeding',
      url: 'http://182.92.115.164:8001/#/bigscreen/preview?code=bigScreen_4DrCdi0bxm',
      link: 1
    },
    {
      id: 2,
      name: '云会商中心',
      enName: 'Cloud Consultation Center',
      url: '/meeting',
      link: 0
    },
    {
      id: 3,
      name: '旱碱麦高产示范数据库管理平台',
      enName: 'Breeding system breeding base database',
      url: '/demonstration',
      link: 0
    },
    {
      id: 4,
      name: '旱碱麦种植管理调度数据库',
      enName: 'WheatPlanting database',
      url: '/dispatch',
      link: 0
    }
  ]
  listRight.value = [
    {
      id: 5,
      name: '信息动态',
      enName: 'Information dynamics',
      url: '/information',
      link: 0
    },
    {
      id: 6,
      name: '技术服务',
      enName: 'Requirement Response Library',
      url: '/demand',
      link: 0
    },
    {
      id: 7,
      name: '科技成果库',
      enName: 'Science Technology Achievement Library',
      url: '/technological',
      link: 0
    },
    {
      id: 8,
      name: '专家智库',
      enName: 'Expert think tank',
      url: '/expert',
      link: 0
    }
  ]
}

// 
if (sort == 4) {
  listLeft.value = [
    {
      id: 1,
      name: '标准化车间全流程监控',
      enName: 'Full process monitoring of standardized workshops',
      url: 'http://182.92.115.164:8001/#/bigscreen/preview?code=bigScreen_hSy2Yq2Wcv',
      link: 1
    },
    {
      id: 2,
      name: '云会商中心',
      enName: 'Cloud Consultation Center',
      url: '/meeting',
      link: 0
    },
    {
      id: 3,
      name: '企业数据库',
      enName: 'Enterprise database',
      url: '/enterprise',
      link: 0
    },
    {
      id: 4,
      name: '需求检索',
      enName: 'Requirement search',
      url: '/demandsearch',
      link: 0
    }
  ]
  listRight.value = [
    {
      id: 5,
      name: '信息动态',
      enName: 'Information dynamics',
      url: '/promotion',
      link: 0
    },
    {
      id: 6,
      name: '技术服务',
      enName: 'Requirement Response Library',
      url: '/demand',
      link: 0
    },
    {
      id: 7,
      name: '科技成果库',
      enName: 'Science Technology Achievement Library',
      url: '/technological',
      link: 0
    },
    {
      id: 8,
      name: '专家智库',
      enName: 'Expert think tank',
      url: '/expert',
      link: 0
    }
  ]
}



const nowTitle = ref('旱碱麦育种体系联合创新中心管理系统')

const titleHandle = () => {
  const sort = $route.query.sort

  if (sort == 2) {
    nowTitle.value = '旱碱麦推广中心管理系统'
  } else if (sort == 3) {
    nowTitle.value = '旱碱麦种植中心管理系统'
  } else if (sort == 4) {
    nowTitle.value = '旱碱麦加工体系联合创新中心管理系统'
  } else {
    nowTitle.value = '旱碱麦育种体系联合创新中心管理系统'
  }
}
titleHandle()



const goNextPage = (item) => {
  $router.push(`${item.url}?sort=${sort}`)
}

</script>

<style scoped lang="less">
.manage-container {
  position: relative;
  flex: 1;
  background: #0D1B31;
  display: flex;
  flex-direction: column;
}
.home-main-bg {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('../assets/second/breeding-bg.jpg');

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(13,27,49,0.7);
  }
}
.home-main-bg2 {
  background-image: url('../assets/second/promotion-bg.png');
}
.home-main-bg3 {
  background-image: url('../assets/second/plant-bg.png');
}
.home-main-bg4 {
  background-image: url('../assets/second/jg-bg.jpg');
}
.home-main {
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15rem 0;
}
.arrow-img {
  flex-shrink: 0;
  width: 46rem;
}

.center-main {
  min-height: 750rem;
  flex: 1;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  background: url('../assets/second/center-bg.png') no-repeat center;
  background-size: 100%;
  display: flex;
  justify-content: space-around;
}

.center-list {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    min-width: 420rem;
    height: 114rem;
    background-repeat: no-repeat;
    background-size: auto 100%;
    margin: 35rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: all 300ms;
  }
  li:hover {
    transform: scale(1.14);
  }
  ._name {
    font-family: 'tx-Medium';
    font-size: 30rem;
    color: #FFFFFF;
    line-height: 35rem;
    font-weight: 400;
  }
  ._desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16rem;
    color: #FFFFFF;
    line-height: 22rem;
    margin-top: 8rem;
    opacity: .5;
  }
  ._item1 {
    background-image: url('../assets/second/item-bg1.png');
  }
  ._item2 {
    background-image: url('../assets/second/item-bg2.png');
  }
  ._item3 {
    background-image: url('../assets/second/item-bg3.png');
  }
  ._item4 {
    background-image: url('../assets/second/item-bg4.png');
  }
  ._item5 {
    background-image: url('../assets/second/item-bg5.png');
  }
  ._item6 {
    background-image: url('../assets/second/item-bg6.png');
  }
  ._item7 {
    background-image: url('../assets/second/item-bg7.png');
  }
  ._item8 {
    background-image: url('../assets/second/item-bg8.png');
  }

}

.list-left {
  padding-left: 180rem;

  li { 
    padding-left: 150rem;
    background-position: left center;
  }

  ._item1, ._item4 { margin-left: 74rem; }
}

.list-right {
  align-items: flex-end;
  padding-right: 180rem;
  text-align: right;

  li { padding-right: 150rem; background-position: right center; }

  ._item5, ._item8 { margin-right: 74rem; }
}


.center-bread {
  position: relative;
  font-family: 'tx-Medium';
  font-size: 32rem;
  color: #FFFFFF;
  line-height: 39rem;
  padding-left: 24rem;
  background: url('../assets/expert/title-icon.png') no-repeat left center;
  background-size: 12rem 24rem;
  margin: 60rem 60rem 30rem;
}


@media screen and (max-width: 767rem) {
 
}
</style>