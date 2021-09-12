<template>
  <Container tag="section" class="TeamExtensionHero">
    <div class="TeamExtensionHero__main">
      <h1 class="TeamExtensionHero__headline">
        {{ $t('teamExtension.headline') }}
      </h1>
      <div class="TeamExtensionHero__imgContainer">
        <img
          :src="require('~/assets/images/services/how.svg')"
          alt="Team"
          class="TeamExtensionHero__img"
        />
      </div>
    </div>
    <h2 class="TeamExtensionHero__subhead">
      {{ $t('teamExtension.subhead1') }}
      <span class="TeamExtensionHero__price">
        {{ $t('teamExtension.subhead2', { price: '£7.99' }) }}
      </span>
    </h2>
  </Container>
</template>

<script>
export default {
  name: 'TeamExtensionHero',
}
</script>

<style lang="scss">
.TeamExtensionHero {
  padding-bottom: 12px;

  &__main {
    display: flex;
    align-items: center;
    column-gap: 32px;

    & > * {
      flex: 1 100%;
    }
  }

  &__headline {
    font-weight: 500;
    line-height: 1;
    @include fontSize(34px);
    @include gradientText($gradient7);
  }

  &__subhead {
    margin-top: 32px;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    @include fontSize(20px);
    @include gradientText($gradient4);
  }

  &__price {
    display: block;
    margin-top: 24px;
    line-height: 1.2;
    @include gradientText($gradient5);
  }

  &__imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    max-height: 480px;
  }

  @include respondTo(sm) {
    &__headline {
      @include fontSize(48px);
    }
  }

  @include respondTo(md) {
    &__headline {
      @include fontSize(96px);
    }

    &__subhead {
      font-weight: 500;
      @include fontSize(57px);
    }

    &__price {
      margin-top: 32px;
      @include fontSize(48px);
    }
  }
}
</style>
