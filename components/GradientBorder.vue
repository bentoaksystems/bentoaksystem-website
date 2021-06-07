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
$gradient-default: linear-gradient(
  291.41deg,
  rgba(0, 152, 205, 0.7) 18.52%,
  rgba(0, 127, 191, 0.7) 28.5%,
  rgba(0, 98, 186, 0.7) 32.14%,
  rgba(0, 65, 160, 0.7) 36.27%,
  rgba(185, 0, 211, 0.7) 40.37%,
  rgba(149, 0, 175, 0.7) 42.81%,
  rgba(137, 0, 170, 0.7) 45.61%,
  rgba(102, 0, 95, 0.7) 47.98%,
  rgba(115, 0, 124, 0.7) 50.98%,
  rgba(155, 0, 48, 0.7) 54.18%,
  rgba(142, 0, 51, 0.7) 56.89%,
  rgba(163, 5, 35, 0.7) 60.04%,
  rgba(191, 0, 32, 0.7) 62.93%,
  rgba(226, 0, 33, 0.7) 66.7%,
  rgba(249, 0, 0, 0.7) 69.74%,
  rgba(233, 93, 23, 0.7) 73.8%,
  rgba(238, 116, 52, 0.7) 77.59%,
  rgba(242, 142, 0, 0.7) 82.79%,
  rgba(249, 175, 0, 0.7) 85.99%,
  rgba(254, 184, 38, 0.7) 89.33%
);

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
      background: $gradient-default;
    }
  }
}
</style>
