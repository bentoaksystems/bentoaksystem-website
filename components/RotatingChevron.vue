<template>
  <span
    class="RotatingChevron"
    :class="{ 'RotatingChevron--active': cotrolledByProps ? active : isActive }"
    v-bind="$attrs"
    @click="toggle"
  >
    <Icon name="chevron" :width="size" :height="size" />
  </span>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: undefined,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    cotrolledByProps() {
      return this.active !== undefined
    },
  },
  methods: {
    toggle() {
      if (this.cotrolledByProps) {
        this.isActive = !this.isActive
        this.$emit('toggle', this.isActive)
      }
    },
  },
}
</script>

<style lang="scss">
.RotatingChevron {
  display: flex;
  transform-origin: center;
  cursor: pointer;
  transition: transform 300ms ease-in-out;

  &--active {
    transform: rotate(-180deg);
  }
}
</style>
