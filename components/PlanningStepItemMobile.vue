<template>
  <div class="PlanningStepItemMobile">
    <span class="PlanningStepItemMobile__index">{{ index + 1 }}</span>
    <span class="PlanningStepItemMobile__title">{{ $t(title) }}</span>
    <div class="PlanningStepItemMobile__imgContainer">
      <img :src="imgUrl" :alt="title" />
    </div>
    <div
      class="PlanningStepItemMobile__listContainer"
      :style="{
        backgroundImage: `url('${require('~/assets/images/services/planningBgMobile.svg')}')`,
      }"
    >
      <ul
        class="PlanningStepItemMobile__list"
        :class="{ 'PlanningStepItemMobile__list--rtl': rtl }"
      >
        <li
          v-for="item in items"
          :key="item"
          class="PlanningStepItemMobile__item"
        >
          <template v-if="typeof item === 'object'">
            {{ $t(item.item) }}
            <ul class="PlanningStepItemMobile__subList">
              <li
                v-for="subItem in item.subItems"
                :key="subItem"
                class="PlanningStepItemMobile__subItem"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanningStepItemMobile',
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
.PlanningStepItemMobile {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__index {
    display: inline-block;
    font-family: Caudex;
    font-weight: 700;
    line-height: 0.8;
    @include fontSize(72px);
    @include gradientText($gradientCTA);
  }

  &__title {
    @include fontSize(34px);
    @include gradientText($gradient1);
  }

  &__imgContainer {
    margin-top: 16px;
  }

  &__listContainer {
    position: relative;
    display: flex;
    align-items: center;
    margin: 16px #{-$sidePadding} 0;
    padding: 42px;
    height: 420px;
    width: 100vw;
    background-position: top right;
    background-size: cover;
  }

  &__list {
    max-height: 100%;
    overflow-y: auto;
    color: $white;

    @include addSpecificity {
      padding-left: 32px;
    }
  }

  &__item {
    position: relative;
    font-weight: 700;
    color: $white;
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

  @include respondTo(md) {
    &__item {
      @include fontSize(20px);

      &:nth-child(n + 2) {
        margin-top: 4px;
      }
    }
  }
}
</style>
