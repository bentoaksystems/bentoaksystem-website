<template>
  <GradientBorder tag="section" class="CareersHero">
    <Container class="CareersHero__container">
      <h1 class="CareersHero__headline">{{ $t('careers.headline') }}</h1>
      <h3 class="CareersHero__subhead">{{ $t('careers.subhead') }}</h3>
    </Container>
  </GradientBorder>
</template>

<script>
export default {
  name: 'CareersHero',
}
</script>

<style lang="scss">
.CareersHero {
  padding-top: var(--headerHeight);
  padding-bottom: 24px;

  @include addSpecificity {
    margin: 0;
    border-radius: 0;
    background-image: url('~/assets/images/home/bgHomepage.png');
    background-size: cover;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__headline {
    margin-bottom: 32px;
    font-weight: 500;
    line-height: 51px;
    @include fontSize(34px);
    @include gradientText($gradient5);
  }

  &__subhead {
    font-weight: 700;
    @include fontSize(20px);
    @include gradientText($gradient2);
  }

  @include respondTo(md) {
    padding-bottom: 74px;

    @include addSpecificity {
      margin: 1vw;
      border-radius: 32px;
    }

    &__headline {
      line-height: 120px;
      @include fontSize(96px);
    }

    &__subhead {
      max-width: 780px;
      font-weight: 500;
      line-height: 60px;
      @include fontSize(48px);
    }
  }
}
</style>
