<template>
  <Container tag="section" class="LetsGetInTouch">
    <GradientBorder class="LetsGetInTouch__container">
      <h3 class="LetsGetInTouch__title">
        {{ $t('home.form.title1') }}
        <br />
        {{ $t('home.form.title2') }}
        <br />
        {{ $t('home.form.title3') }}
      </h3>
      <LetsGetInTouchSteps :steps="steps" />
      <LetsGetInTouchForm />
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'LetsGetInTouch',
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
}
</style>
