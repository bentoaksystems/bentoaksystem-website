<template>
  <Container tag="section" class="TechHero">
    <h1 class="TechHero__headline">
      {{ $t('techs.headline') }}
    </h1>
    <p class="TechHero__subhead">
      <span class="TechHero__subheadContent">
        {{ $t('techs.subhead') }}
      </span>
      <NuxtLink to="/services" class="TechHero__ourServices">
        {{ $t('techs.ourServices') }}
      </NuxtLink>
    </p>
  </Container>
</template>

<script>
export default {
  name: 'TechHero',
}
</script>

<style lang="scss">
.TechHero {
  margin-bottom: 60px;

  @include respondTo(md) {
    margin-bottom: 100px;
    padding-top: 40px;
  }

  &__headline {
    margin-bottom: 40px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    @include fontSize(34px);
    @include gradientText($gradient5);

    @include respondTo(md) {
      margin-bottom: 100px;
      line-height: 120px;
      @include fontSize(96px);
    }
  }

  &__subhead {
    margin: 0 auto;
    max-width: 940px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
  }

  &__subheadContent {
    @include fontSize(20px);
    @include gradientText($gradient5);

    @include respondTo(md) {
      line-height: 51px;
      @include fontSize(34px);
    }
  }

  &__ourServices {
    color: $blue;
    text-decoration: underline;
    @include fontSize(20px);
  }
}
</style>
