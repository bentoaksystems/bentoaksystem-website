<template>
  <div class="FAQsTabsDesktop">
    <ul class="FAQsTabsDesktop__header">
      <li
        v-for="({ title, isActive }, index) in tabs"
        :key="title"
        class="FAQsTabsDesktop__headerItem"
      >
        <FAQsTabsTitle
          :title="title"
          :active="isActive"
          button
          @click.native="$emit('changeActiveTab', index)"
        />
      </li>
    </ul>
    <div v-for="tab in tabs" :key="tab.title">
      <FAQsQaItem
        v-for="(QaItem, index) in tab.list"
        v-show="tab.isActive"
        :key="QaItem.question"
        v-bind="QaItem"
        :open="index === 0"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQsTabsDesktopDesktop',
  props: {
    tabs: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss">
.FAQsTabsDesktop {
  padding: 48px 0;

  &__header {
    display: flex;

    @include addSpecificity {
      margin-bottom: 32px 120px;
    }
  }

  &__headerItem {
    flex: 1 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
