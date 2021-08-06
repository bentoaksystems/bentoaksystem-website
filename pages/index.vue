<template>
  <main class="HomePage">
    <HomeHero />
    <HomeQualities />
    <HomeHowWeHelp />
    <HomeYourNeeds />
    <HomeWhyUs />
    <HomeTestimonials class="HomePage__testimonials" />
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

  &__testimonials {
    margin-top: 64px;
  }

  @include respondTo(md) {
    &__testimonials {
      margin-top: 24px;
    }
  }
}
</style>
