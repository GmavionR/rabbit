<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import Category from '../Category/index.vue'

// 触发导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutNav/>
  <LayoutHeader/>
  <Category></Category>
  <LayoutFixed/>
  <!-- 展示二级路由 -->
  <RouterView/>
  <LayoutFooter/>
</template>