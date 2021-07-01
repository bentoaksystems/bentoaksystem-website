<template>
  <Container tag="section" class="AboutUsWhyUs">
    <h2 class="AboutUsWhyUs__title">
      {{ $t('aboutUs.whyUs.title') }}
    </h2>
    <GradientBorder class="AboutUsWhyUs__textContainer">
      <p v-for="item in content" :key="item" class="AboutUsWhyUs__text">
        {{ $t(item) }}
      </p>
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'AboutUsWhyUs',
  computed: {
    content() {
      return [
        'aboutUs.whyUs.text1',
        'aboutUs.whyUs.text2',
        'aboutUs.whyUs.text3',
      ]
    },
  },
}
</script>

<style lang="scss">
.AboutUsWhyUs {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    display: inline-block;
    margin-bottom: 32px;
    font-weight: 500;
    @include fontSize(34px);
    @include gradientText($gradient5);

    @include respondTo(md) {
      margin-bottom: 106px;
      font-weight: 400;
      @include fontSize(60px);
    }
  }

  &__textContainer {
    @include addSpecificity {
      padding: 52px 36px;
      border-radius: 8px;
      @include fontSize(34px);

      &::before {
        margin: -1px;
        background: $gradientForm;
      }

      @include respondTo(md) {
        padding: 52px 36px;
        border-radius: 32px;
        @include fontSize(34px);
      }
    }
  }

  &__text {
    font-weight: 500;
    @include fontSize(16px);

    @include respondTo(md) {
      @include fontSize(20px);
    }
  }
}
</style>
