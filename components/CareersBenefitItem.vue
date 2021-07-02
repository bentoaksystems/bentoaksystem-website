<template>
  <GradientBorder
    class="CareersBenefitItem"
    :class="{ 'CareersBenefitItem--rtl': rtl }"
  >
    <div class="CareersBenefitItem__textContainer">
      <h5 class="CareersBenefitItem__text">{{ $t(text) }}</h5>
    </div>
    <div class="CareersBenefitItem__imgContainer">
      <img
        v-show="isDesktop"
        :src="imgUrl"
        :alt="name"
        class="CareersBenefitItem__img"
      />
    </div>
  </GradientBorder>
</template>

<script>
export default {
  name: 'CareersBenefitItem',
  props: {
    name: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDesktop() {
      return this.$screen.md
    },
  },
}
</script>

<style lang="scss">
.CareersBenefitItem {
  display: flex;
  justify-content: center;
  padding: 32px;
  border-radius: 8px;
  box-shadow: -5px -5px 250px 0px #ffffff05 inset;

  &--rtl {
    flex-direction: row-reverse;
  }

  &__textContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    margin: 0;
    font-weight: 700;
    @include fontSize(20px);
    text-align: center;
  }

  &__imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    max-height: 180px;
  }

  @include respondTo(md) {
    border-radius: 16px;

    &__textContainer {
      flex: 1 65%;
      padding: 0 48px;
    }

    &__imgContainer {
      flex: 1 35%;
    }
  }
}
</style>
