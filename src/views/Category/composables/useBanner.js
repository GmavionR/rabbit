import {getBannerAPI} from '@/apis/home.js'
import {onMounted, ref} from 'vue'
export function useBanner(){
    // 轮播图
const BannerList = ref([])
const categoryStore =async()=>{
  let res = await getBannerAPI()
  BannerList.value = res.result
}

onMounted(()=>{categoryStore()})

return {
    BannerList}
}