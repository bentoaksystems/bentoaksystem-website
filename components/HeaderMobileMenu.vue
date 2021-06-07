<template>
  <div class="HeaderMobileMenu" :class="{ 'HeaderMobileMenu--closed': isOpen }">
    <GradientBorder class="HeaderMobileMenu__gradientBorder">
      <div class="HeaderMobileMenu__mainContainer">
        <div>
          <SwitchLocale />
        </div>
        <div class="HeaderMobileMenu__midCol">
          <Navigation class="HeaderMobileMenu__navList" />
          <BaseButton class="HeaderMobileMenu__CTA"> Call us </BaseButton>
        </div>
        <div class="HeaderMobileMenu__lastCol">
          <Icon name="exit" @click.native="$emit('close')" />
        </div>
      </div>
    </GradientBorder>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.HeaderMobileMenu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  transform: translateX(105%);
  transition: transform 300ms ease-in-out;

  &--closed {
    transform: translateX(0);
  }

  &__gradientBorder {
    margin: 0;
    border-radius: 0;
    height: 100%;
  }

  &__mainContainer {
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: $main-black;
  }

  &__midCol {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__navList {
    flex: 1;
  }

  &__CTA {
    margin-top: 16px;
  }

  &__lastCol {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
