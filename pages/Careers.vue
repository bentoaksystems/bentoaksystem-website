<template>
  <main class="Careers">
    <CareersHero />
    <CareersBenefits />
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
