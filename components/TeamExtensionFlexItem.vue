<template>
  <GradientBorder class="TeamExtensionFlexItem">
    <p class="TeamExtensionFlexItem__text">
      <span class="TeamExtensionFlexItem__title">
        {{ $t(title) }}
      </span>
      {{ $t(text) }}
    </p>
    <ul class="TeamExtensionFlexItem__list">
      <li
        v-for="item in items"
        :key="item"
        class="TeamExtensionFlexItem__listItem"
      >
        {{ $t(item) }}
      </li>
    </ul>
  </GradientBorder>
</template>

<script>
export default {
  name: 'TeamExtensionFlexItem',
  props: {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    items: {
      type: Array,
      require: true,
      validator(items) {
        return items.every((item) => typeof item === 'string')
      },
    },
  },
}
</script>

<style lang="scss">
.TeamExtensionFlexItem {
  display: flex;
  flex-direction: column;
  padding: 32px 44px;
  column-gap: 10%;
  row-gap: 28px;

  @include addSpecificity {
    border-radius: 8px;

    &:before {
      background: $gradient3;
    }
  }

  &__text {
    font-weight: 500;
    @include fontSize(16px);
  }

  &__title {
    color: $orange;
    font-weight: 700;
    @include fontSize(20px);
  }

  &__list {
    display: grid;
    row-gap: 30px;

    @include addSpecificity {
      padding-left: 32px;
    }
  }

  &__listItem {
    position: relative;
    font-weight: 500;
    @include fontSize(14px);

    &:before {
      content: '';
      position: absolute;
      left: -32px;
      top: 3px;
      display: block;
      background: $gradient4;
      border-radius: 999px;
      @include square(16px);
    }
  }

  @include respondTo(md) {
    flex-direction: row;

    @include addSpecificity {
      border-radius: 32px;

      &:before {
        background: $gradient5;
      }
    }

    &__text {
      flex: 1 65%;
    }

    &__list {
      flex: 1 35%;
    }
  }
}
</style>
