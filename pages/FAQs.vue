<template>
  <main class="FAQs">
    <FAQsHero />
    <FAQsTabs class="FAQs__tabs" />
    <SomethingElse class="FAQs__form" />
  </main>
</template>

<script>
export default {
  name: 'FAQs',
}
</script>

<style lang="scss">
.FAQs {
  background: linear-gradient(
    182.83deg,
    rgba(146, 174, 254, 0.0256) 5.94%,
    rgba(146, 174, 254, 0.0256) 18.49%,
    rgba(255, 244, 153, 0.112) 67.68%
  );

  &__tabs {
    padding-bottom: 74px;
  }

  &__form {
    padding-bottom: 24px;
  }

  @include respondTo(md) {
    &__tabs {
      padding-bottom: 280px;
    }

    &__form {
      padding-bottom: 74px;
    }
  }
}
</style>
