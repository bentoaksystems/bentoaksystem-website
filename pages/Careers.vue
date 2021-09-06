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
  @include addSpecificity {
    padding: 0;
  }

  &__container {
    background-image: linear-gradient(
      90deg,
      #f1f1f1 0%,
      rgba(189, 216, 230, 0.12) 0.01%,
      rgba(139, 198, 227, 0) 100%
    );
  }

  &__form {
    margin-top: 180px;
    padding-bottom: 24px;
  }

  @include respondTo(md) {
    &__container {
      background-image: linear-gradient(
          90deg,
          #f1f1f1 0%,
          rgba(189, 216, 230, 0.12) 0.01%,
          rgba(139, 198, 227, 0) 100%
        ),
        url('./assets/images/careers/careersRipple.svg'),
        url('./assets/images/careers/careersRippleYellow.svg'),
        url('./assets/images/careers/careersGradleft.svg'),
        url('./assets/images/careers/careersGradRight.svg');
      background-position: initial, top right, center left, left top 20%,
        top 50% right;
      background-repeat: no-repeat;
    }

    &__form {
      margin-top: 180px;
      padding-bottom: 74px;
    }
  }
}
</style>
