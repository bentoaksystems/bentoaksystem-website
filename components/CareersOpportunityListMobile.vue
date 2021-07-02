<template>
  <div class="CareersOpportunityListMobile">
    <h5 class="CareersOpportunityListMobile__title">
      {{ $t('careers.opportunities.browse') }}
    </h5>
    <Collapsible
      v-for="group in groupedPositions"
      :key="group.title"
      class="CareersOpportunityListMobile__group"
    >
      <template #title>
        <h6 class="CareersOpportunityListMobile__groupTitle">
          {{ $t(group.title) }}
        </h6>
      </template>
      <div class="CareersOpportunityListMobile__groupBody">
        <CareersOpportunityItem
          v-for="position in group.list"
          :key="position.title"
          v-bind="position"
        />
        <div class="CareersOpportunityListMobile__groupButtonContainer">
          <BaseButton
            to="#form"
            class="CareersOpportunityListMobile__groupButton"
          >
            {{ $t('careers.opportunities.apply') }}
          </BaseButton>
        </div>
      </div>
    </Collapsible>
  </div>
</template>

<script>
import { TYPES } from './CareersOpportunityItem'

export default {
  name: 'CareersOpportunityListMobile',
  props: {
    positions: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      devPositions: [],
      productPositions: [],
    }
  },
  computed: {
    groupedPositions() {
      return [
        {
          title: 'careers.opportunities.develop',
          list: this.devPositions,
        },
        {
          title: 'careers.opportunities.product',
          list: this.productPositions,
        },
      ]
    },
  },
  created() {
    this.groupPositions()
  },
  methods: {
    groupPositions() {
      this.positions.forEach((position) => {
        switch (position.type) {
          case TYPES.DEV:
            this.devPositions.push(position)
            break
          case TYPES.IOS:
            this.devPositions.push(position)
            break
          case TYPES.QC:
            this.devPositions.push(position)
            break
          case TYPES.UIUX:
            this.productPositions.push(position)
            break
        }
      })
    },
  },
}
</script>

<style lang="scss">
.CareersOpportunityListMobile {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin: 0;
    font-weight: 700;
    text-align: center;
    @include fontSize(20px);
    @include gradientText($gradient2);
  }

  &__group {
    margin-top: 18px;
    width: 100%;
  }

  &__groupTitle {
    margin: 0 0 12px;
    color: $blue;
    font-weight: 500;
    @include fontSize(16px);
  }

  &__groupBody {
    display: grid;
    row-gap: 24px;
    padding: 32px 24px 24px;
  }

  &__groupButtonContainer {
    display: flex;
    justify-content: center;
  }

  &__groupButton {
    width: 100%;
    max-width: 194px;
  }
}
</style>
