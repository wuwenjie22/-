<template>
  <van-list class="list">
    <van-cell v-for='item in machinesList' :key="item.id" :title="item.name" @click="onClick" />
  </van-list>
</template>

<script setup>
import { ref } from 'vue'
import mockData from '@/mock/machines.json'
import { useRouter } from 'vue-router'

const machinesList = ref(mockData)
const router = useRouter()
const onClick = () => {
  router.push({ name: 'tickets' })
}
</script> 

<style lang="scss" scoped>

</style>