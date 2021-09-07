<template>
  <Container tag="header" class="Header">
    <Logo class="Header__logo" has-text />
    <Icon
      v-show="!$screen.md"
      name="menu"
      @click.native="isMobileMenuOpen = true"
    />
    <HeaderMenuMobile
      v-show="!$screen.md"
      :is-open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
    />
    <Navigation v-show="$screen.md" />
    <!-- <SwitchLocale v-show="$screen.md" class="Header__switchLocale" /> -->
    <BaseButton v-show="$screen.md" v-scroll-to="'#form'" class="Header__CTA">
      Call us
    </BaseButton>
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
