import {getCategoryAPI} from '@/apis/category.js'
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'
import {onBeforeRouteUpdate} from 'vue-router'


export function useCategory(){
    
const categoryData = ref({})//ref返回value是{}，reactive返回value是Proxy。refImpl包装
const route = useRoute()
const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    // const res = await axios.get(`/category/${id}`)
    categoryData.value = res.result
}

onMounted(() => {
    getCategory()
})

onBeforeRouteUpdate((to)=>{
    
    console.log(to,'路由变化了')
    getCategory(to.params.id)
})

return{
    categoryData,
}
}