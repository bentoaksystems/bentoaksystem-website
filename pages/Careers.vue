<template>
  <main class="Careers">
    <CareersHero />
    <CareersBenefits />
    <CareersOpportunities />
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
