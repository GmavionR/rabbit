<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
</script>

<template>
  <LayoutNav/>
  <LayoutHeader/>
  <LayoutFixed/>
  <!-- 展示二级路由 -->
  <RouterView/>
  <LayoutFooter/>
</template>