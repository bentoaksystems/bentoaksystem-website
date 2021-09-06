<template>
  <main class="AboutUs">
    <AboutUsHero class="AboutUs__hero" />
    <AboutUsWhyUs class="AboutUs__whyUs" />
    <AboutUsOurMission class="AboutUs__ourMission" />
    <LetsGetInTouch class="AboutUs__form" />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.AboutUs {
  background-image: linear-gradient(
    90deg,
    rgba(254, 191, 61, 0.072) 0%,
    rgba(0, 98, 186, 0.04) 100%
  );

  &__hero {
    margin-bottom: 32px;
  }

  &__whyUs {
    margin-bottom: 64px;
  }

  &__ourMission {
    margin-bottom: 64px;
  }

  &__form {
    padding-bottom: 46px;
  }

  @include respondTo(md) {
    background-image: linear-gradient(
        90deg,
        rgba(254, 191, 61, 0.072) 0%,
        rgba(0, 98, 186, 0.04) 100%
      ),
      url('./assets/images/aboutUs/aboutUsBg.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100vw;

    &__ourMission {
      margin-bottom: 128px;
    }

    &__form {
      padding-bottom: 64px;
    }
  }
}
</style>
