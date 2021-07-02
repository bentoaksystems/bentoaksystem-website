<template>
  <div class="ServicesPointItem" :class="{ 'ServicesPointItem--rtl': rtl }">
    <div class="ServicesPointItem__col ServicesPointItem__col--text">
      <h3 class="ServicesPointItem__text">{{ $t(text) }}</h3>
      <span v-if="focus" class="ServicesPointItem__focus">{{ focus }}</span>
    </div>
    <div class="ServicesPointItem__col ServicesPointItem__col--img">
      <div v-show="isDesktop" class="ServicesPointItem__imgContainer">
        <img :src="imgUrl" :alt="name" class="ServicesPointItem__img" />
      </div>
      <BaseButton class="ServicesPointItem__button">{{
        $t(btnLabel)
      }}</BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPointItem',
  props: {
    name: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    focus: {
      type: [String, null],
      require: true,
    },
    btnLabel: {
      type: String,
      require: true,
    },
    url: {
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
.ServicesPointItem {
  display: flex;
  flex-direction: column;
  padding: 48px 16px;
  gap: 32px;

  &__col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__text {
    font-weight: 700;
    text-align: center;
    line-height: 1.3;
    @include fontSize(20px);
  }

  &__focus {
    margin-top: 24px;
    font-weight: 700;
    text-align: center;
    line-height: 1.3;
    @include gradientText($gradient5);
    @include fontSize(20px);
  }

  &__img {
    max-height: 280px;
  }

  &__button {
    @include addSpecificity {
      padding: 12px 56px;
    }
  }

  @include respondTo(md) {
    flex-direction: row;
    padding: 48px;

    &--rtl {
      flex-direction: row-reverse;
    }

    &__col {
      flex: 1 100%;
    }

    &__text {
      font-weight: 500;
      @include fontSize(48px);
    }

    &__focus {
      max-width: 300px;
      font-weight: 500;
      @include fontSize(34px);
    }

    &__button {
      margin-top: 48px;
    }
  }
}
</style>
