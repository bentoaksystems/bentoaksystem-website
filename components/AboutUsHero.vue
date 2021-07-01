<template>
  <Container tag="section" class="AboutUsHero">
    <div class="AboutUsHero__imgContainer">
      <img
        class="AboutUsHero__img"
        :src="require('~/assets/images/aboutUs/aboutUsMain.svg')"
        alt="About us"
      />
    </div>
    <h1 class="AboutUsHero__headline">{{ $t('aboutUs.headline') }}</h1>
    <p class="AboutUsHero__subhead">{{ $t('aboutUs.subhead') }}</p>
  </Container>
</template>

<script>
export default {
  name: 'AboutUsHero',
}
</script>

<style lang="scss">
.AboutUsHero {
  padding-bottom: 32px;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  &__headline {
    margin-bottom: 24px;
    font-weight: 500;
    line-height: 50px;
    @include fontSize(34px);
    @include gradientText($gradient5);

    @include respondTo(dm) {
      line-height: 80px;
      @include fontSize(60px);
    }

    @include respondTo(md) {
      line-height: 120px;
      @include fontSize(92px);
    }
  }

  &__subhead {
    font-weight: 700;
    line-height: 30px;
    @include fontSize(20px);
    @include gradientText($gradient1);

    @include respondTo(sm) {
      line-height: 40px;
      font-weight: 500;
      @include fontSize(32px);
    }

    @include respondTo(md) {
      line-height: 60px;
      @include fontSize(48px);
    }
  }

  &__imgContainer {
    float: right;
    width: 45%;
  }
}
</style>
