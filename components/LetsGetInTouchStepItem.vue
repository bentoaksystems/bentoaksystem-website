<template>
  <GradientBorder
    v-if="selected"
    nested
    class="LetsGetInTouchStepItem LetsGetInTouchStepItem--selected"
  >
    <span
      :class="[
        'LetsGetInTouchStepItem__number',
        'LetsGetInTouchStepItem__number--selected',
      ]"
    >
      {{ number }}
    </span>
    <span
      :class="[
        'LetsGetInTouchStepItem__text',
        'LetsGetInTouchStepItem__text--selected',
      ]"
    >
      {{ text }}
    </span>
    <div class="LetsGetInTouchStepItem__graphics"></div>
  </GradientBorder>
  <div v-else class="LetsGetInTouchStepItem">
    <span class="LetsGetInTouchStepItem__number">{{ number }}</span>
    <span class="LetsGetInTouchStepItem__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'LetsGetInTouchStepItem',
  props: {
    number: { type: String, require: true },
    text: { type: String, require: true },
    selected: { type: Boolean, defult: false },
  },
}
</script>

<style lang="scss">
$borderWidth: 3px;

.LetsGetInTouchStepItem {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 18px;
  width: 100%;
  color: $blue;
  font-weight: 500;

  &--selected {
    position: relative;
    border-width: $borderWidth;

    &::before {
      margin: -($borderWidth);
      background: $gradientFormSteps;
    }
  }

  &__number {
    @include fontSize(14px);
    line-height: 1;

    &--selected {
      @include fontSize(20px);
      @include gradientText($gradient2);
    }
  }

  &__text {
    text-align: center;
    @include fontSize(14px);

    &--selected {
      font-weight: 700;
      @include fontSize(20px);
    }
  }

  &__graphics {
    &::before {
      content: '';
      position: absolute;
      right: -4px;
      bottom: 0;
      width: $borderWidth + 4;
      height: 70%;
      background-color: $white;
    }
    &::after {
      content: '';
      position: absolute;
      top: calc(100% + #{$borderWidth + 1});
      right: -2px;
      display: block;
      width: 20px;
      height: 12px;
      background-repeat: no-repeat;
      background-image: url('~assets/images/triangle.svg');
    }
  }

  @include respondTo(md) {
    &__number {
      @include fontSize(34px);

      &--selected {
        @include fontSize(48px);
      }
    }

    &__text {
      @include fontSize(16px);

      &--selected {
        @include fontSize(24px);
      }
    }
  }
}
</style>
