<template>
  <div class="TeamExtensionRecruitmentItem">
    <div class="TeamExtensionRecruitmentItem__titleBox">
      <h5 class="TeamExtensionRecruitmentItem__title">
        {{ $t(title) | uppercase }}
      </h5>
      <span class="TeamExtensionRecruitmentItem__index">{{ index + 1 }}</span>
    </div>
    <div class="TeamExtensionRecruitmentItem__textBox">
      <p>{{ $t(text) }}</p>
      <ul v-if="items" class="TeamExtensionRecruitmentItem__list">
        <li
          v-for="item in items"
          :key="item"
          class="TeamExtensionRecruitmentItem__item"
        >
          {{ $t(item) }}
        </li>
      </ul>
    </div>
    <div class="TeamExtensionRecruitmentItem__imgBox">
      <img :src="iconUrl" :alt="title" />
    </div>
    <img
      v-if="chevron"
      :src="require('assets/images/services/chevronRight.svg')"
      class="TeamExtensionRecruitmentItem__chevron"
    />
  </div>
</template>

<script>
export default {
  name: 'TeamExtensionRecruitmentItem',
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    },
  },
  props: {
    index: { type: Number, require: true },
    title: { type: String, require: true },
    text: { type: String, require: true },
    items: { type: Array, require: true },
    iconUrl: { type: String, require: true },
    chevron: { type: Boolean, default: true },
  },
}
</script>

<style lang="scss">
@mixin dividerLine {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  height: 100%;
  background-color: $dark-grey;
}

@mixin dividerBox {
  $side: 30px;

  content: '';
  display: block;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-44%, -50%) rotate(45deg);
  background-color: inherit;
  border: 3px solid $dark-grey;
  border-left: none;
  border-bottom: none;
  z-index: 1;
  @include square($side);
}

.TeamExtensionRecruitmentItem {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 36px;
  background-color: $white;

  &::before {
    left: 0;
    @include dividerLine();
  }

  &:not(:last-child) {
    &:after {
      @include dividerBox();
    }
  }

  &:last-child {
    &::after {
      right: 0;
      @include dividerLine();
    }
  }

  &__titleBox {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  &__title {
    margin: 0;
    line-height: 1;
    text-align: center;
    font-weight: 500;
    @include gradientText($gradient1);
    @include fontSize(22px);
  }
  &__index {
    color: $yellow;
    font-family: Caudex;
    line-height: 0.8;
    @include fontSize(72px);
  }
  &__textBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    text-align: center;
    font-weight: 500;
    @include fontSize(16px);
  }
  &__list {
    text-align: left;

    @include addSpecificity {
      padding-left: 18px;
    }
  }
  &__item {
    position: relative;

    &::before {
      content: '';
      display: block;
      height: 1px;
      width: 6px;
      position: absolute;
      left: -12px;
      top: 50%;
      transform: translateY(-50%);
      color: inherit;
      background-color: currentColor;
      border-radius: 999px;
    }
  }
  &__imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
  }
  &__chevron {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-5px, -50%) scale(0.9);
  }
}
</style>
