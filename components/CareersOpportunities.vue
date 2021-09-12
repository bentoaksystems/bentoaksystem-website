<template>
  <Container tag="section" class="CareersOpportunities">
    <h3 class="CareersOpportunities__title">
      {{ $t('careers.opportunities.title1') }}
      <br />
      {{ $t('careers.opportunities.title2') }}
    </h3>
    <CareersOpportunityListDesktop v-show="isDesktop" :positions="positions" />
    <CareersOpportunityListMobile v-show="!isDesktop" :positions="positions" />
  </Container>
</template>

<script>
import { TYPES } from './CareersOpportunityItem'

export default {
  name: 'CareersOpportunities',
  computed: {
    isDesktop() {
      return this.$screen.md
    },
    positions() {
      return [
        this.makeOpportunityObj(TYPES.WEB, 'careers.positions.front.title', [
          'careers.positions.front.item1',
          'careers.positions.front.item2',
        ]),
        this.makeOpportunityObj(TYPES.QC, 'careers.positions.QC.title', [
          'careers.positions.QC.item1',
          'careers.positions.QC.item2',
        ]),
        this.makeOpportunityObj(
          TYPES.PYTHON,
          'careers.positions.python.title',
          [['careers.positions.python.item1', 'careers.positions.python.item2']]
        ),
        this.makeOpportunityObj(TYPES.UIUX, 'careers.positions.UiUx.title', [
          'careers.positions.UiUx.item1',
          'careers.positions.UiUx.item2',
        ]),
      ]
    },
  },
  methods: {
    makeOpportunityObj(type, title, requirements) {
      return { type, title, requirements }
    },
  },
}
</script>

<style lang="scss">
.CareersOpportunities {
  &__title {
    font-weight: 500;
    text-align: center;
    @include fontSize(34px);
    @include gradientText($gradient1);
  }

  @include respondTo(md) {
    &__title {
      margin-bottom: 24px;
      @include fontSize(48px);
    }
  }
}
</style>
