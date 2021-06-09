<template>
  <NuxtLink :to="localePath('/')">
    <img
      v-if="hasText"
      src="~/assets/images/bosLogoWithText.svg"
      alt="Logo"
      class="Logo Logo--hasText"
    />
    <img
      v-else
      src="~/assets/images/bosLogo.svg"
      alt="Logo"
      class="Logo Logo--noText"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    hasText: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.Logo {
  &--hasText {
    width: 54px;
  }

  &--noText {
    width: 34px;
  }

  @include respondTo(md) {
    &--hasText {
      width: 100px;
    }
  }
}
</style>
