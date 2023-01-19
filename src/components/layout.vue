<template>
  <div class="layout">
    <div style="flex-grow:1">
      <router-view />
    </div>
    <div>
      <van-tabbar v-model='active' @change="onChange" :fixed='false'>
        <van-tabbar-item icon="home-o" name="machines">machines</van-tabbar-item>
        <van-tabbar-item name="1">unknown</van-tabbar-item>
        <van-tabbar-item name="2">unknown</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const active = ref(0)
const router = useRouter()

const onChange = () => {
  router.push({ path: active.value })
}
const container = ref(null)
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>