<template>
  <GradientBorder v-if="$screen.md" class="HomeWhyUs HomeWhyUs--bordered">
    <HomeWhyUsContent />
  </GradientBorder>
  <HomeWhyUsContent v-else class="HomeWhyUs" />
</template>

<script>
export default {
  name: 'HomeWhyUs',
}
</script>

<style lang="scss">
.HomeWhyUs {
  &--bordered {
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
