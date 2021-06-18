<template>
  <section class="HomeLetsGetInTouch">
    <LetsGetInTouch class="HomeLetsGetInTouch__content">
      <h3 class="HomeLetsGetInTouch__title">
        Let's Get In Touch & Hire A Team In 4 Simple Steps
      </h3>
    </LetsGetInTouch>
  </section>
</template>

<script>
export default {
  name: 'HomeLetsGetInTouch',
}
</script>

<style lang="scss">
.HomeLetsGetInTouch {
  &__title {
    @include gradientText($gradient1);
    @include fontSize(20px);
    margin-bottom: 16px;
    text-align: center;

    @include respondTo(md) {
      @include fontSize(48px);
      margin-bottom: 30px;
    }
  }

  &__content {
    margin-top: 64px;
    margin-bottom: 64px;
  }
}
</style>
