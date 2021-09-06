<template>
  <main class="Techs">
    <TechsHero />
    <TechsWebTechs class="Techs__section Techs__section--webTechs" />
    <TechsCta class="Techs__section Techs__section--cta" />
    <TechsBenefits class="Techs__section Techs__section--benefits" />
    <LetsGetInTouch class="Techs__section Techs__section--form" />
  </main>
</template>

<script>
export default {
  name: 'Techs',
}
</script>

<style lang="scss">
.Techs {
  &__section {
    &--webTechs {
      margin-bottom: 16px;

      @include respondTo(md) {
        margin-bottom: 76px;
      }
    }

    &--cta {
      margin-bottom: 46px;

      @include respondTo(md) {
        margin-bottom: 54px;
      }
    }

    &--benefits {
      margin-bottom: 64px;

      @include respondTo(md) {
        margin-bottom: 160px;
      }
    }

    &--form {
      margin-bottom: 46px;

      @include respondTo(md) {
        margin-bottom: 64px;
      }
    }
  }
}
</style>
