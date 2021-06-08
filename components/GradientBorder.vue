<template>
  <component
    :is="tag"
    :class="`GradientBorder--${modifier}`"
    class="GradientBorder"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    modifier: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="scss">
.GradientBorder {
  position: relative;
  background: #fff;
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    z-index: -1;
  }

  &--default {
    $boderWidth: 2px;

    margin: $boderWidth;
    border: $boderWidth solid transparent;
    border-radius: 4px;

    &::before {
      margin: -$boderWidth;
      background: $gradient5;
    }
  }
}
</style>
