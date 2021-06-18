<template>
  <Container tag="header" class="Header">
    <Logo class="Header__logo" has-text />
    <template v-if="!$screen.md">
      <Icon name="menu" @click.native="isMobileMenuOpen = true" />
      <HeaderMenuMobile
        :is-open="isMobileMenuOpen"
        @close="isMobileMenuOpen = false"
      />
    </template>
    <template v-else>
      <Navigation />
      <SwitchLocale class="Header__switchLocale" />
      <BaseButton class="Header__CTA">Call us</BaseButton>
    </template>
  </Container>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  watch: {
    '$route.fullPath'() {
      this.isMobileMenuOpen = false
    },
  },
}
</script>

<style lang="scss">
.Header {
  display: flex;
  align-items: center;
  padding: 16px 0;

  &__logo {
    margin-right: auto;
  }

  &__switchLocale {
    margin-left: 16px;
  }

  &__CTA {
    margin-left: 16px;
  }

  @include respondTo(md) {
    padding: 32px 0;
  }
}
</style>
