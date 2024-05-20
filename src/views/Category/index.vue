<script setup>
import {getCategoryAPI} from '@/apis/category.js'
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import {onBeforeRouteUpdate} from 'vue-router'
const categoryData = ref({})//ref返回value是{}，reactive返回value是Proxy。refImpl包装
const route = useRoute()
const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    // const res = await axios.get(`/category/${id}`)
    categoryData.value = res.result
    console.log(categoryData, 'categoryData222222222222')
}
onMounted(() => {
    getCategory()
    categoryStore({distributionSite: '2'})
})

// 轮播图
import {getBannerAPI} from '@/apis/home.js'
const BannerList = ref([])
const categoryStore =async()=>{
  let res = await getBannerAPI()
  BannerList.value = res.result
  console.log(BannerList.value,'BannerList')
}

onBeforeRouteUpdate((to)=>{
    
    console.log(to,'路由变化了')
    getCategory(to.params.id)
})

</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>

    <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in BannerList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="i in categoryData.children" :key="i.id">
      <RouterLink to="/">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>
      </RouterLink>
    </li>
  </ul>
</div>
<div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
  <div class="head">
    <h3>- {{ item.name }}-</h3>
  </div>
  <div class="body">
    <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
  </div>
</div>
    
</template>


<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  z-index: 98;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}
</style>