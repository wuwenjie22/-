<template>
  <div class="container">
    <div>
      <van-sidebar v-model="active" @change="onChange">
        <van-sidebar-item v-for="item in ticketsList" :title="`工单${item.id}`" :key="item.id" />
      </van-sidebar>
    </div>
    <div class="content">
      <van-form>
        <van-cell-group inset>
          <van-field v-for="item in active_item" :key="item[0]" v-model="item[1]" :name="item[0]" :label="item[0]" />
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import mockData from '@/mock/tickets.json'

const ticketsList = ref(mockData)
const active = ref(-1);
const active_item = ref({})

const onChange = (index) => {
  active.value = index
  active_item.value = Object.entries(mockData[index])
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
}

.content {
  flex-grow: 1;
}
</style>
