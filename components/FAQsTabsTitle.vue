<template>
  <component
    :is="button ? 'button' : 'div'"
    class="FAQsTabsTitle"
    :class="{ 'FAQsTabsTitle--active': active }"
  >
    {{ $t(title) }}
  </component>
</template>

<script>
export default {
  name: 'FAQsTabsTitle',
  props: {
    title: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.FAQsTabsTitle {
  font-weight: 700;
  background-color: unset;
  cursor: pointer;
  @include fontSize(20px);

  &--active {
    text-decoration: underline;
    @include fontSize(24px);
  }
}
</style>
