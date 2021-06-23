<template>
  <main class="HomePage">
    <HomeHero />
    <HomeQualities />
    <HomeHowWeHelp />
    <HomeYourNeeds />
    <HomeWhyUs />
    <HomeLetsGetInTouch />
  </main>
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
