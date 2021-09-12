<template>
  <main class="Careers">
    <div class="Careers__container">
      <CareersHero />
      <CareersBenefits />
      <CareersOpportunities />
    </div>
    <NewCareer class="Careers__form" />
  </main>
</template>

<script>
export default {
  name: 'Careers',
}
</script>

<style lang="scss">
.Careers {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(172, 172, 172, 0.07) 100%
    ),
    url('./assets/images/careers/careersRipple.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw;

  &__form {
    margin-top: 180px;
    padding-bottom: 24px;
  }

  @include respondTo(md) {
    &__form {
      margin-top: 180px;
      padding-bottom: 74px;
    }
  }
}
</style>
