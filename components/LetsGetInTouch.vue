<template>
  <Container tag="section" class="LetsGetInTouch">
    <GradientBorder class="LetsGetInTouch__container" modifier="form">
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

    @include respondTo(md) {
      padding: 68px 80px 108px;
    }
  }
}
</style>
