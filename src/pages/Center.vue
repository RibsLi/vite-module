<template>
  <div>2</div>
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
