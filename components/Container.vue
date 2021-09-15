<template>
  <component :is="tag" class="Container">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Container',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
.Container {
  max-width: $maxWidth;
  padding-right: $sidePadding;
  padding-left: $sidePadding;
  margin-right: auto;
  margin-left: auto;
  box-sizing: content-box;
  border-radius: 0 0 35px 35px;
}
</style>
