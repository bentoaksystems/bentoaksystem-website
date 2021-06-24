<template>
  <ul class="SimpleUnorderedList verticalList">
    <li v-for="item in items" :key="item" class="SimpleUnorderedList__item">
      {{ $t(item) }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SimpleUnorderedList',
  props: {
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
.SimpleUnorderedList {
  @include addSpecificity {
    padding-left: 32px;
  }

  &__item {
    font-weight: 500;
    line-height: 24px;
    list-style: disc;
    @include fontSize(16px);
  }
}
</style>
