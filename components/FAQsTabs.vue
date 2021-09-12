<template>
  <Container tag="section" class="FAQsTabs">
    <FAQsTabsDesktop
      v-show="isDesktop"
      :tabs="tabs"
      @changeActiveTab="changeActiveTab"
    />
    <FAQsTabsMobile
      v-show="!isDesktop"
      :tabs="tabs"
      @changeActiveTab="changeActiveTab"
    />
  </Container>
</template>

<script>
import faqs from '@/locales/en/faqs'
const tabs = ['Clients', 'Devs', 'Work', 'Payment']
const arrayLength = (tabName) =>
  faqs['qas' + tabName] ? Object.keys(faqs['qas' + tabName]).length / 2 : 0
export default {
  name: 'FAQsTabs',
  data() {
    return {
      tabs: tabs.map((tabName, index) =>
        this.makeTabObj(
          'faqs.tabs.' + tabName.toLowerCase(),
          [...Array(arrayLength(tabName)).keys()].map((i) =>
            this.makeQaObj(
              `faqs.qas${tabName}.q` + (i + 1),
              `faqs.qas${tabName}.a` + (i + 1)
            )
          ),
          !index
        )
      ),
    }
  },
  computed: {
    isDesktop() {
      return this.$screen.md
    },
  },
  methods: {
    makeTabObj(title, list, isActive = false) {
      return { title, list, isActive }
    },
    makeQaObj(question, answer) {
      return { question, answer }
    },
    changeActiveTab(tabIndex) {
      this.tabs.forEach((tab, index) => {
        if (tabIndex === index) tab.isActive = true
        else tab.isActive = false
      })
    },
  },
}
</script>

<style lang="scss">
.FAQsTabs {
}
</style>
