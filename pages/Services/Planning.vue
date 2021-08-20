<template>
  <main class="Planning">
    <PlanningHero />
    <PlanningSteps />
    <LetsGetInTouch class="Planning__form" />
  </main>
</template>

<script>
export default {
  name: 'Planning',
}
</script>

<style lang="scss">
.Planning {
  background-image: url('./assets/images/services/PlanningRainbow.svg');
  background-position: center;
  background-size: 100vw;
  background-repeat: no-repeat;

  &__form {
    margin-top: 64px;
    margin-bottom: 32px;

    @include respondTo(md) {
      margin-top: 154px;
      margin-bottom: 64px;
    }
  }
}
</style>
