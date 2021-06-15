<template>
  <div class="HomePage">
    <HomeHero />
    <HomeQualities />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.HomePage {
  @include addSpecificity {
    padding: 0;
  }
}
</style>
