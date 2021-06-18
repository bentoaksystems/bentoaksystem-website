<template>
  <component :is="tag" :class="modifierClasses" class="GradientBorder">
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
    modifier: {
      type: [Array, String],
      default: 'default',
      validator(value) {
        const whiteList = ['default', 'form', 'nested']

        if (Array.isArray(value)) {
          return value.every((valueItem) => whiteList.includes(valueItem))
        } else {
          return whiteList.includes(value)
        }
      },
    },
  },
  computed: {
    modifierClasses() {
      const { modifier } = this

      if (Array.isArray(modifier)) {
        return modifier.map((modifierItem) => `GradientBorder--${modifierItem}`)
      } else {
        return `GradientBorder--${modifier}`
      }
    },
  },
}
</script>

<style lang="scss">
.GradientBorder {
  position: relative;
  background: #fff;
  background-clip: padding-box;
  border: solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    z-index: -2;
  }

  &--default {
    $boderWidth: 2px;

    margin: $boderWidth;
    border-width: $boderWidth;
    border-radius: 4px;

    &::before {
      margin: -$boderWidth;
      background: $gradient5;
    }
  }

  &--form {
    $boderWidth: 1px;

    margin: $boderWidth;
    border-width: $boderWidth;
    border-radius: 4px;

    &::before {
      margin: -$boderWidth;
      background: $gradientForm;
    }
  }

  &--nested {
    border-radius: 4px;
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
