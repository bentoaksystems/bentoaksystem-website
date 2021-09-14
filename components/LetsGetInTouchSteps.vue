<template>
  <div class="LetsGetInTouchSteps">
    <div
      v-for="(step, index) in steps"
      :key="step"
      class="LetsGetInTouchSteps__item"
    >
      <LetsGetInTouchStepItem
        :number="`0${index + 1}`"
        :text="step"
        :selected="!index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LetsGetInTouchSteps',
  props: {
    steps: { type: Array, require: true },
  },
}
</script>

<style lang="scss">
$gap: 48px;
$sidePadding: 12px;

.LetsGetInTouchSteps {
  display: flex;
  margin-bottom: 60px;
  padding-bottom: 12px;
  margin-left: -($sidePadding);
  margin-right: -($sidePadding);
  padding-left: $sidePadding;
  padding-right: $sidePadding;
  width: calc(100% + (2 * #{$sidePadding}));
  overflow-y: auto;

  &__item {
    flex: 1 100%;
    position: relative;
    display: flex;
    margin-right: $gap;
    align-items: center;
    min-width: 130px;

    &:nth-of-type(n + 2) {
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -($gap / 2);
        transform: translate(0, -50%);
        display: block;
        width: 2px;
        height: 40px;
        background-color: $blue;
        border-radius: 999px;
      }
    }
  }
}
</style>
