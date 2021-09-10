<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :disabled="disabled"
    class="BaseButton"
    @click="onEvent"
    @focus="onEvent"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    externalLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tag() {
      return this.to ? (this.externalLink ? 'a' : 'NuxtLink') : 'button'
    },
    href() {
      return this.externalLink && this.to
    },
  },
  methods: {
    onEvent(e) {
      this.$emit(e.type, e)
    },
  },
}
</script>

<style lang="scss">
.BaseButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  min-width: 110px;
  color: $white;
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(
    80.45deg,
    rgba(185, 0, 211, 0.8) -104.27%,
    rgba(0, 65, 160, 0.8) 60.74%,
    rgba(0, 65, 160, 0.8) 84.34%
  );
  cursor: pointer;

  &:disabled {
    user-select: none;
    opacity: 0.8;
  }
}
</style>
