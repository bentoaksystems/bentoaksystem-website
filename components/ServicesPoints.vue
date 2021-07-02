<template>
  <section>
    <Container v-show="isDesktop">
      <ServicesPointsList />
    </Container>
    <ServicesPointsList v-show="!isDesktop" />
  </section>
</template>

<script>
export default {
  name: 'ServicesPoints',
  computed: {
    isDesktop() {
      return this.$screen.md
    },
  },
}
</script>
