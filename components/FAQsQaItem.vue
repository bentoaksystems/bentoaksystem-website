<template>
  <div class="FAQsQaItem">
    <div
      class="FAQsQaItem__label"
      tabindex="0"
      @click="switchCollapsible"
      @keypress.enter="switchCollapsible"
      @keypress.space="switchCollapsible"
    >
      <span class="FAQsQaItem__question">
        <Icon :name="isOpen ? 'minus' : 'plus'" class="FAQsQaItem__icon" />
        {{ $t(question) }}
      </span>
      <span v-if="isOpen" class="FAQsQaItem__answer">
        {{ $t(answer) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQsQaItem',
  props: {
    question: {
      type: String,
      require: true,
    },
    answer: {
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
  methods: {
    switchCollapsible() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.FAQsQaItem {
  color: $dark-grey;
  font-weight: 500;
  @include fontSize(16px);

  &__label {
    display: flex;
    flex-direction: column;
    padding: 16px 8px;
    cursor: pointer;

    @include respondTo(md) {
      padding: 32px 8px;
      border-bottom: $divier-border-faq;
    }
  }

  &__icon {
    min-width: 24px;
    margin-right: 12px;
  }

  &__question {
    display: flex;
    align-items: center;
  }

  &__answer {
    $paddingLeft: 40px;
    position: relative;
    margin: 16px 0 0 16px;
    padding-left: $paddingLeft;
    border-left: 1px $faqQuestion solid;
  }
}
</style>
