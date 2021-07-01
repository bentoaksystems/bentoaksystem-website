<template>
  <ul class="FAQsTabsMobile">
    <li
      v-for="{ title, list } in tabs"
      :key="title"
      class="FAQsTabsMobile__item"
    >
      <Collapsible>
        <template #title>
          <FAQsTabsTitle :title="title" />
        </template>
        <div class="FAQsTabsMobile__itemContent">
          <FAQsQaItem
            v-for="(QaItem, listIndex) in list"
            :key="QaItem.question"
            v-bind="QaItem"
            :open="listIndex === 0"
          />
        </div>
      </Collapsible>
    </li>
  </ul>
</template>

<script>
import Collapsible from './Collapsible.vue'

export default {
  name: 'FAQsTabsMobile',
  components: { Collapsible },
  props: {
    tabs: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss">
.FAQsTabsMobile {
  padding-bottom: 1px; //stops last collapsible's margin-bottom from overflowing

  &__item {
    margin-bottom: 32px;
  }

  &__itemContent {
    padding-top: 32px;
  }
}
</style>
