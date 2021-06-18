<template>
  <section class="HomeWhyUs">
    <GradientBorder v-if="$screen.md" class="HomeWhyUs__gradientBorder">
      <HomeWhyUsContent />
    </GradientBorder>
    <HomeWhyUsContent v-else />
  </section>
</template>

<script>
export default {
  name: 'HomeWhyUs',
}
</script>

<style lang="scss">
.HomeWhyUs {
  &__gradientBorder {
    @include addSpecificity {
      margin: 0;
      border-radius: 8px;
      border-width: 1px;
    }

    @include respondTo(md) {
      border-radius: 16px;
    }
  }
}
</style>
