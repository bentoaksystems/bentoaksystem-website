<template>
  <div class="HomeTestimonialsSlide">
    <h5 class="HomeTestimonialsSlide__title">{{ $t(title) }}</h5>
    <p class="HomeTestimonialsSlide__text">{{ $t(text) }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeTestimonialsSlide',
  props: {
    title: { type: String },
    text: { type: String },
    name: { type: String },
    jobTitle: { type: String },
    imgUrl: { type: String },
  },
}
</script>

<style lang="scss">
.HomeTestimonialsSlide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: $white;
  overflow-y: auto;

  &__title {
    @include fontSize(20px);
    margin: 0 0 8px;
    padding: 0 16px;
    font-weight: 700;
    text-align: center;
  }

  &__text {
    @include fontSize(16px);
    font-weight: 500;
  }

  @include respondTo(md) {
    &__title {
      @include fontSize(48px);
      margin: 0 0 32px;
      padding: 0 32px;
      font-weight: 500;
    }

    &__text {
      @include fontSize(34px);
    }
  }
}
</style>
