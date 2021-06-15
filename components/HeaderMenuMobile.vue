<template>
  <div class="HeaderMenuMobile" :class="{ 'HeaderMenuMobile--closed': isOpen }">
    <GradientBorder class="HeaderMenuMobile__gradientBorder">
      <div class="HeaderMenuMobile__mainContainer">
        <div>
          <SwitchLocale />
        </div>
        <div class="HeaderMenuMobile__midCol">
          <Navigation
            variant="headerMenuMobile"
            class="HeaderMenuMobile__navList"
          />
          <BaseButton class="HeaderMenuMobile__CTA"> Call us </BaseButton>
        </div>
        <div class="HeaderMenuMobile__lastCol">
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
.HeaderMenuMobile {
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
    height: 100%;

    @include addSpecificity {
      margin: 0;
      border-radius: 0;
    }
  }

  &__mainContainer {
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: $dark-grey;
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
