import {getCategoryAPI} from '@/apis/layoutAPI.js'
import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([])//refImp

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }
})
// 通过return暴露出useCategoryStore里的ctegoryList和getCategory,调用getCategory返回的是代理对象，refImp,解构ref对象时不需要.value
// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
