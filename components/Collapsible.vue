<template>
  <div class="Collapsible">
    <div
      class="Collapsible__label"
      tabindex="0"
      @click="switchCollapsible"
      @keypress.enter="switchCollapsible"
      @keypress.space="switchCollapsible"
    >
      <slot v-if="hasTitleSlot" name="title" />
      <h5 v-else class="Collapsible__title">{{ $t(title) }}</h5>
      <div
        class="Collapsible__chevron"
        :class="{ 'Collapsible__chevron--active': isOpen }"
      >
        <CollapsibleChevron :is-open="isOpen" />
      </div>
    </div>
    <div v-if="isOpen">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapsible',
  props: {
    title: {
      type: String,
      require: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    }
  },
  computed: {
    hasTitleSlot() {
      return this.$slots.title || this.title
    },
  },
  methods: {
    switchCollapsible() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.Collapsible {
  display: flex;
  flex-direction: column;

  &__label {
    text-align: center;
    cursor: pointer;
  }

  &__chevron {
    display: flex;
    justify-content: center;
    align-items: center;

    &--active {
      transform: rotate(180deg);
    }
  }
}
</style>
