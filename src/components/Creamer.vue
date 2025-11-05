<template>
  <div v-if="type !== 'No Creamer'" class="froth">
    <div v-for="i in 5" :key="i" class="foam" :style="{ backgroundColor: foamColor }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import creamers from '../data/creamers.json'

// Which creamer was chosen
const props = defineProps<{ type: string }>()

// Looks up color from creamers.json
const foamColor = computed(() => {
  const match = creamers.find(c => c.name === props.type)
  return match ? match.color : '#f7edd9'
})
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  background-color: #c6c6c6;
  animation: pour-tea 2s 2s forwards;
}
.foam {
  display: block;
  background: #e4e0d2;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>
