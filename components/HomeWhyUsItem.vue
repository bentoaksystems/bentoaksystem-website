<template>
  <GradientBorder nested>
    <div class="HomeWhyUsItem">
      <div class="HomeWhyUsItem__imgContainer">
        <img class="HomeWhyUsItem__img" :src="imgUrl" :alt="$t(title)" />
      </div>
      <h5 class="HomeWhyUsItem__title">{{ $t(title) }}</h5>
      <p class="HomeWhyUsItem__text">{{ $t(text) }}</p>
    </div>
  </GradientBorder>
</template>

<script>
export default {
  name: 'HomeWhyUsItem',
  props: ['title', 'text', 'imgUrl'],
}
</script>

<style lang="scss">
.HomeWhyUsItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 12px 8px;

  &__imgContainer {
    @include xyFlexCentered;
    height: 80px;
    width: 65px;
  }

  &__img {
    width: 100%;
  }

  &__title {
    font-weight: 700;
    margin: 0;
    margin-top: 4px;

    white-space: nowrap;
    @include fontSize(20px);
  }

  &__text {
    font-weight: 500;
    @include fontSize(16px);
  }

  @include respondTo(md) {
    padding: 32px 16px;

    &__title {
      margin-top: 12px;
    }
  }
}
</style>
