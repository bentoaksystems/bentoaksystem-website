<template>
  <main class="Careers">
    <CareersHero />
    <CareersBenefits />
    <CareersOpportunities />
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
}
</style>
