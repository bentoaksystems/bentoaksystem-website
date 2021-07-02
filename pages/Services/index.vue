<template>
  <main class="Services">
    <ServicesHero />
  </main>
</template>

<script>
export default {
  name: 'Services',
}
</script>

<style lang="scss">
.Services {
  @include addSpecificity {
    padding: 0;
  }
}
</style>
