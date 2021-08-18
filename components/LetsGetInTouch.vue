<template>
  <Container id="form" tag="section" class="LetsGetInTouch">
    <GradientBorder class="LetsGetInTouch__container">
      <h3 class="LetsGetInTouch__title">
        {{ $t('forms.title1') }}
        <br />
        {{ $t('forms.title2') }}
        <br />
        {{ $t('forms.title3') }}
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
        this.$t('forms.letsGetInTouch.step1'),
        this.$t('forms.letsGetInTouch.step2'),
        this.$t('forms.letsGetInTouch.step3'),
        this.$t('forms.letsGetInTouch.step4'),
      ]
    },
  },
}
</script>

<style lang="scss">
.LetsGetInTouch {
  &__container {
    padding: 24px 12px 30px;

    @include addSpecificity {
      border-radius: 8px;
    }

    &::before {
      margin: -1px;
      background: $gradientForm;
    }

    @include respondTo(md) {
      padding: 68px 80px 108px;

      @include addSpecificity {
        border-radius: 16px;
      }
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
