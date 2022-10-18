<template lang="pug">
div(class="w-100 bg-white")
  div(v-for="item in $store.typeArr" :key="item.id") {{item.name}}
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
function filter(item) {
  if (item.type === 'waterfall') {
    if (item.num >= 1) {
      return false
    }
  }
  return true
}
</script>

<style lang="stylus" scoped></style>
