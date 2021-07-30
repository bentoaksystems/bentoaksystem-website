<template>
  <section class="HomeLetsGetInTouch">
    <LetsGetInTouch class="HomeLetsGetInTouch__content">
      <h3 class="HomeLetsGetInTouch__title">
        {{ $t('home.form.title1') }}
        <br />
        {{ $t('home.form.title2') }}
        <br />
        {{ $t('home.form.title3') }}
      </h3>
      <LetsGetInTouchSteps :steps="steps" />
    </LetsGetInTouch>
  </section>
</template>

<script>
export default {
  name: 'HomeLetsGetInTouch',
  computed: {
    steps() {
      return [
        this.$t('home.form.step1'),
        this.$t('home.form.step2'),
        this.$t('home.form.step3'),
        this.$t('home.form.step4'),
      ]
    },
  },
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
