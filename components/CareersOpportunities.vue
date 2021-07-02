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
        this.makeOpportunityObj(TYPES.DEV, 'careers.positions.front.title', [
          'careers.positions.front.item1',
          'careers.positions.front.item2',
        ]),
        this.makeOpportunityObj(
          TYPES.DEV,
          'careers.positions.reactJunior.title',
          ['careers.positions.reactJunior.item1']
        ),
        this.makeOpportunityObj(
          TYPES.IOS,
          'careers.positions.iosMiddle.title',
          [
            'careers.positions.iosMiddle.item1',
            'careers.positions.iosMiddle.item2',
          ]
        ),
        this.makeOpportunityObj(TYPES.DEV, 'careers.positions.kafkaDev.title', [
          'careers.positions.kafkaDev.item1',
          'careers.positions.kafkaDev.item2',
        ]),
        this.makeOpportunityObj(
          TYPES.DEV,
          'careers.positions.fullStack.title',
          [
            'careers.positions.fullStack.item1',
            'careers.positions.fullStack.item2',
          ]
        ),
        this.makeOpportunityObj(TYPES.QC, 'careers.positions.QC.title', [
          'careers.positions.QC.item1',
          'careers.positions.QC.item2',
        ]),
        this.makeOpportunityObj(
          TYPES.DEV,
          'careers.positions.pythonDev.title',
          [
            'careers.positions.pythonDev.item1',
            'careers.positions.pythonDev.item2',
          ]
        ),
        this.makeOpportunityObj(TYPES.DEV, 'careers.positions.GoDev.title', [
          'careers.positions.GoDev.item1',
          'careers.positions.GoDev.item2',
        ]),
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
