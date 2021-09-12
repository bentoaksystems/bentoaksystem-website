<template>
  <component
    :is="tag"
    :class="{ 'GradientBorder--nested': nested }"
    class="GradientBorder"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'GradientBorder',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    nested: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.GradientBorder {
  $boderRadius: 7px;
  $boderWidth: 2px;

  position: relative;
  background: #fff;
  background-clip: padding-box;
  border: solid transparent;
  margin: $boderWidth;
  border-width: $boderWidth;
  border-radius: $boderRadius;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -$boderWidth;
    background: $gradient5;
    border-radius: inherit;
    z-index: -2;
  }

  &--nested {
    @include stackingContext;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
      z-index: -1;
    }
  }
}
</style>
