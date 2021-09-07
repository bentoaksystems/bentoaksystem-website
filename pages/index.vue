<template>
  <main class="HomePage">
    <HomeHero />
    <HomeQualities />
    <HomeHowWeHelp />
    <HomeYourNeeds />
    <HomeWhyUs />
    <!-- <HomeTestimonials class="HomePage__testimonials" /> -->
    <LetsGetInTouch class="HomePage__letsGetInTouch" />
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

  &__letsGetInTouch {
    margin-top: 48px;
    margin-bottom: 48px;

    @include respondTo(md) {
      margin-top: 64px;
      margin-bottom: 64px;
    }
  }
}
</style>
