<template>
  <GradientBorder class="TechsWebTechItem">
    <img :src="imgUrl" :alt="title" class="TechsWebTechItem__img" />
    <h5 class="TechsWebTechItem__title">
      {{ $t(title) }}
    </h5>
    <SimpleUnorderedList :items="items" />
  </GradientBorder>
</template>

<script>
export default {
  name: 'TechsWebTechItem',
  props: {
    title: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    items: {
      type: Array,
      require: true,
      validator(items) {
        return items.every((item) => typeof item === 'string')
      },
    },
  },
}
</script>

<style lang="scss">
.TechsWebTechItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 18px;

  @include respondTo(md) {
    padding: 24px;
  }

  &__imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    margin: 12px 0;
    font-weight: 700;
    @include fontSize(20px);
    @include gradientText($gradient1);
  }
}
</style>
