<template>
  <Container tag="section" class="LetsGetInTouch">
    <GradientBorder class="LetsGetInTouch__container">
      <slot />
      <LetsGetInTouchForm />
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'LetsGetInTouch',
}
</script>

<style lang="scss">
.LetsGetInTouch {
  &__container {
    padding: 24px 12px 30px;
    border-radius: 8px;

    &::before {
      margin: -1px;
      background: $gradientForm;
    }

    @include respondTo(md) {
      border-radius: 16px;
      padding: 68px 80px 108px;
    }
  }
}
</style>
