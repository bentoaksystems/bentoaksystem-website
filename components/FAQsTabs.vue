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
export default {
  name: 'FAQsTabs',
  data() {
    return {
      tabs: [
        this.makeTabObj(
          'faqs.tabs.clients',
          [
            this.makeQaObj('faqs.qas.q1', 'faqs.qas.a1'),
            this.makeQaObj('faqs.qas.q2', 'faqs.qas.a2'),
            this.makeQaObj('faqs.qas.q3', 'faqs.qas.a3'),
            this.makeQaObj('faqs.qas.q4', 'faqs.qas.a4'),
            this.makeQaObj('faqs.qas.q5', 'faqs.qas.a5'),
          ],
          true
        ),
        this.makeTabObj('faqs.tabs.devs', [
          this.makeQaObj('faqs.qas.q1', 'faqs.qas.a1'),
          this.makeQaObj('faqs.qas.q2', 'faqs.qas.a2'),
          this.makeQaObj('faqs.qas.q3', 'faqs.qas.a3'),
          this.makeQaObj('faqs.qas.q4', 'faqs.qas.a4'),
          this.makeQaObj('faqs.qas.q5', 'faqs.qas.a5'),
        ]),
        this.makeTabObj('faqs.tabs.work', [
          this.makeQaObj('faqs.qas.q1', 'faqs.qas.a1'),
          this.makeQaObj('faqs.qas.q2', 'faqs.qas.a2'),
          this.makeQaObj('faqs.qas.q3', 'faqs.qas.a3'),
          this.makeQaObj('faqs.qas.q4', 'faqs.qas.a4'),
          this.makeQaObj('faqs.qas.q5', 'faqs.qas.a5'),
        ]),
        this.makeTabObj('faqs.tabs.payment', [
          this.makeQaObj('faqs.qas.q1', 'faqs.qas.a1'),
          this.makeQaObj('faqs.qas.q2', 'faqs.qas.a2'),
          this.makeQaObj('faqs.qas.q3', 'faqs.qas.a3'),
          this.makeQaObj('faqs.qas.q4', 'faqs.qas.a4'),
          this.makeQaObj('faqs.qas.q5', 'faqs.qas.a5'),
        ]),
      ],
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
