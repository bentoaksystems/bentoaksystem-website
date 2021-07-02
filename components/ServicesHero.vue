<template>
  <GradientBorder tag="section" class="ServicesHero">
    <Container class="ServicesHero__container">
      <h1 class="ServicesHero__headline">
        {{ $t('services.headline1') }}
        <br />
        {{ $t('services.headline2') }}
      </h1>
      <h3 class="ServicesHero__subhead">
        {{ $t('services.subhead1') }}
        <br />
        {{ $t('services.subhead2') }}
      </h3>
    </Container>
  </GradientBorder>
</template>

<script>
export default {
  name: 'ServicesHero',
}
</script>

<style lang="scss">
.ServicesHero {
  padding-top: var(--headerHeight);
  padding-bottom: 24px;

  @include addSpecificity {
    margin: 0 -2px;
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
    @include fontSize(48px);
    @include gradientText($gradient5);
  }

  &__subhead {
    font-weight: 700;
    @include fontSize(20px);
    @include gradientText($gradient1);
  }

  @include respondTo(md) {
    padding-bottom: 74px;

    @include addSpecificity {
      margin: 0;
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
