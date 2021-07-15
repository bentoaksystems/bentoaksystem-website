<template>
  <div
    class="PlanningStepItemDesktop"
    :class="{ 'PlanningStepItemDesktop--rtl': rtl }"
  >
    <div class="PlanningStepItemDesktop__col PlanningStepItemDesktop__col--img">
      <img :src="imgUrl" :alt="title" />
    </div>
    <div
      class="PlanningStepItemDesktop__col PlanningStepItemDesktop__col--content"
    >
      <div
        class="PlanningStepItemDesktop__titleContainer"
        :class="{ 'PlanningStepItemDesktop__titleContainer--rtl': rtl }"
      >
        <span class="PlanningStepItemDesktop__index">
          {{ index + 1 }}
        </span>
        <span class="PlanningStepItemDesktop__title">
          {{ $t(title) }}
        </span>
      </div>
      <div class="PlanningStepItemDesktop__listContainer">
        <ul
          class="PlanningStepItemDesktop__list"
          :class="{ 'PlanningStepItemDesktop__list--rtl': rtl }"
        >
          <li
            v-for="item in items"
            :key="item"
            class="PlanningStepItemDesktop__item"
          >
            <template v-if="typeof item === 'object'">
              {{ $t(item.item) }}
              <ul class="PlanningStepItemDesktop__subList">
                <li
                  v-for="subItem in item.subItems"
                  :key="subItem"
                  class="PlanningStepItemDesktop__subItem"
                >
                  {{ $t(subItem) }}
                </li>
              </ul>
            </template>
            <template v-else>
              {{ $t(item) }}
            </template>
          </li>
        </ul>
        <img :src="bgImgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanningStepItemDesktop',
  props: {
    index: { type: Number, require: true },
    title: { type: String, require: true },
    items: { type: Array, require: true },
    imgUrl: { type: String, require: true },
    bgImgUrl: { type: String, require: true },
    rtl: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss">
.PlanningStepItemDesktop {
  display: flex;
  justify-content: space-between;
  gap: 32px;

  &--rtl {
    flex-direction: row-reverse;
  }

  &__col {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--img {
      flex: 0 150px;
      min-width: 100px;
    }

    &--content {
      flex: 820px;
      min-width: 820px;
    }
  }

  &__titleContainer {
    padding-left: 14%;

    &--rtl {
      padding-left: 7%;
    }
  }

  &__index {
    display: inline-block;
    margin-right: 8px;
    font-family: Caudex;
    font-weight: 700;
    line-height: 0.8;
    @include fontSize(72px);
    @include gradientText($gradientCTA);
  }

  &__title {
    @include fontSize(31px);
    @include gradientText($gradient1);
  }

  &__listContainer {
    position: relative;
  }

  &__list {
    position: absolute;
    top: 40px;
    left: 15%;
    max-width: 78%;
    max-height: 78%;
    overflow-y: auto;
    color: $white;

    @include addSpecificity {
      padding-left: 18px;
    }

    &--rtl {
      left: 8%;
    }
  }

  &__item {
    position: relative;
    font-weight: 700;
    @include fontSize(20px);

    &::before {
      content: '';
      position: absolute;
      left: -18px;
      top: 10px;
      display: block;
      @include square(6px);
      background-color: currentColor;
      color: inherit;
      border-radius: 99px;
    }

    &:nth-child(n + 2) {
      margin-top: 2px;
    }
  }

  &__subList {
    @include addSpecificity {
      padding-left: 46px;
    }
  }

  &__subItem {
    position: relative;
    font-weight: 500;
    @include fontSize(16px);

    &::before {
      content: '';
      position: absolute;
      left: -18px;
      top: 10px;
      display: block;
      @include square(4px);
      background-color: currentColor;
      color: inherit;
      border-radius: 99px;
    }
  }
}
</style>
