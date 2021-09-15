<template>
  <div class="HomeQualityItem">
    <img class="HomeQualityItem__img" :src="imgUrl" :alt="$t(name)" />
    <span class="HomeQualityItem__title">
      {{ $t(name) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'HomeQualityItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.HomeQualityItem {
  $imgWidth: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: $imgWidth;
  min-width: $imgWidth;
  text-align: center;
  margin: 0 20px;

  @include respondTo(md) {
    width: unset;
    flex: 1;
  }

  &__img {
    width: $imgWidth;
    margin-bottom: 8px;
  }

  &__title {
    font-weight: 500;
    @include fontSize(14px);
  }
}
</style>
