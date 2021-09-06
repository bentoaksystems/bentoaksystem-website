<template>
  <div class="CareersOpportunityListDesktop">
    <h5 class="CareersOpportunityListDesktop__title">
      {{ $t('careers.opportunities.browse') }}
    </h5>
    <CollapsibleChevron />
    <div class="CareersOpportunityListDesktop__list">
      <CareersOpportunityItem
        v-for="(position, index) in positions"
        :key="position.title"
        v-bind="position"
        :light="!Boolean((index + 2) % 3)"
      />
    </div>
    <BaseButton
      v-scroll-to="'#form'"
      class="CareersOpportunityListDesktop__button"
    >
      {{ $t('careers.opportunities.apply') }}
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'CareersOpportunityListDesktop',
  props: {
    positions: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss">
.CareersOpportunityListDesktop {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 10% 12%;
  border: $border-opportunities;
  border-radius: 16px;

  &__title {
    margin: 0 0 24px;
    font-weight: 500;
    text-align: center;
    @include fontSize(48px);
    @include gradientText($gradient2);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    column-gap: 48px;
    row-gap: 60px;
    margin: 68px 0;
  }

  &__button {
    width: 194px;
  }
}
</style>
