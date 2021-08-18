<template>
  <GradientBorder tag="section" class="HomeHero">
    <Container class="HomeHero__container">
      <h1 class="HomeHero__headline">{{ $t('home.headline') }}</h1>
      <div class="HomeHero__content">
        <div class="HomeHero__subheadContainer">
          <h3 class="HomeHero__subhead">{{ $t('home.subhead') }}</h3>
          <NuxtLink :to="localePath('/services')" class="HomeHero__readmore">
            {{ $t('readmore') }}
          </NuxtLink>
        </div>
        <BaseButton v-scroll-to="'#form'" class="HomeHero__cta">
          {{ $t('home.cta') }}
        </BaseButton>
      </div>
    </Container>
  </GradientBorder>
</template>

<script>
export default {
  name: 'HomeHero',
}
</script>

<style lang="scss">
.HomeHero {
  padding-top: var(--headerHeight);
  padding-bottom: 32px;

  @include addSpecificity {
    margin: 0 -2px;
    border-radius: 0;
    background-image: url('~/assets/images/home/bgHomepage.png');
    background-size: cover;

    @include respondTo(md) {
      margin: 0;
      border-radius: 32px;
    }
  }

  @include respondTo(md) {
    padding-bottom: 160px;
  }

  &__container {
    @include respondTo(md) {
      padding-top: 70px;
    }
  }

  &__headline {
    font-weight: 700;
    line-height: 51px;
    @include fontSize(34px);
    @include gradientText($gradient5);

    @include respondTo(md) {
      line-height: 75px;
      @include fontSize(60px);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    @include respondTo(md) {
      flex-direction: row;
    }
  }

  &__subheadContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @include respondTo(md) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: baseline;
    }
  }

  &__subhead {
    font-weight: 500;
    @include fontSize(16px);
    @include gradientText($gradient2);

    @include respondTo(md) {
      margin-right: 10px;
      line-height: 75px;
      @include fontSize(34px);
    }
  }

  &__readmore {
    position: relative;
    @include fontSize(12px);
    @include gradientText($gradient1);

    &:before {
      content: '';
      position: absolute;
      right: -1px;
      left: -1px;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: $gradient1;
    }
  }

  &__cta {
    margin-top: 24px;

    @include addSpecificity {
      padding: 10px 35px;
    }

    @include respondTo(md) {
      margin-top: 12px;
      margin-left: auto;

      @include addSpecificity {
        padding: 12px 56px;
      }
    }
  }
}
</style>
