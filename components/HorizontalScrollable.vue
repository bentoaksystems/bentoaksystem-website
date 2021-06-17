<template>
  <div class="HorizontalScrollable">
    <slot />
  </div>
</template>

<style lang="scss">
.HorizontalScrollable {
  display: flex;
  margin-left: -($sidePadding);
  margin-right: -($sidePadding);
  padding-left: $sidePadding;
  width: calc(100% + (2 * #{$sidePadding}));
  overflow-y: auto;

  & > * {
    flex-basis: 100%;
    flex: 1;
  }

  & > *:last-child {
    margin-right: $sidePadding;
  }
}
</style>
