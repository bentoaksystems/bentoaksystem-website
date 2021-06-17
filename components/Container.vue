<template>
  <div class="Container">
    <slot />
  </div>
</template>

<style lang="scss">
.Container {
  max-width: 1140px;
  padding-right: $sidePadding;
  padding-left: $sidePadding;
  margin-right: auto;
  margin-left: auto;
  box-sizing: content-box;
}
</style>
