<template>
  <Container tag="section" class="HomeHowWeHelp">
    <h2 class="HomeHowWeHelp__title">
      {{ $t('home.howWeHelp.title') }}
    </h2>
    <GradientBorder class="HomeHowWeHelp__textContainer">
      <p class="HomeHowWeHelp__text">
        {{ $t('home.howWeHelp.text') }}
        <NuxtLink :to="localePath('/aboutus')" class="HomeHowWeHelp__link">
          {{ $t('home.howWeHelp.howWeStarted') }}
        </NuxtLink>
      </p>
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'HomeHowWeHelp',
}
</script>

<style lang="scss">
.HomeHowWeHelp {
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;

  @include respondTo(md) {
    padding-top: 32px;
    padding-bottom: 128px;
  }

  &__title {
    @include gradientText($gradient5);
    @include fontSize(20px);
    margin-bottom: 24px;
    font-weight: 700;
    text-align: center;

    @include respondTo(md) {
      @include fontSize(60px);
      margin-bottom: 64px;
      font-weight: 400;
    }
  }

  &__textContainer {
    @include addSpecificity {
      padding: 20px 10px;
      border-radius: 16px;

      @include respondTo(md) {
        padding: 64px 32px;
        border-radius: 32px;
      }
    }
  }

  &__text {
    @include fontSize(16px);
    font-weight: 500;
    text-align: left;

    @include respondTo(md) {
      @include fontSize(20px);
    }
  }

  &__link {
    @include fontSize(12px);
    display: block;
    font-weight: 600;
    text-decoration: underline;

    @include respondTo(md) {
      @include fontSize(12px);
      display: inline-block;
      margin-left: 8px;
    }
  }
}
</style>
