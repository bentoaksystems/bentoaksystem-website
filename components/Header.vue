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
    <ButtonCallUs v-show="$screen.md" class="Header__CTA" />
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
  z-index: 3;
  background: #ffffffdd;
  width: calc(min(#{$maxWidth}, 100vw - 32px));
  top: 0px;
  left: calc(max(0px, (100vw - #{$maxWidth} - 32px) / 2));
  position: fixed;
  box-shadow: 0px 2px 2px 1px #8888884a;

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
