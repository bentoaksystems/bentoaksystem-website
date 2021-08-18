<template>
  <Container id="form" tag="section" class="NewCareer">
    <GradientBorder class="NewCareer__container">
      <h3 class="NewCareer__title">
        {{ $t('forms.title1') }}
        <br />
        {{ $t('forms.title2') }}
        <br />
        {{ $t('forms.title4') }}
      </h3>
      <LetsGetInTouchSteps :steps="steps" />
      <NewCareerForm />
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'NewCareer',
  computed: {
    steps() {
      return [
        this.$t('forms.newCareer.step1'),
        this.$t('forms.newCareer.step2'),
        this.$t('forms.newCareer.step3'),
        this.$t('forms.newCareer.step4'),
      ]
    },
  },
}
</script>

<style lang="scss">
.NewCareer {
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
