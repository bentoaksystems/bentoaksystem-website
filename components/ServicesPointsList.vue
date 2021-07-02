<template>
  <div class="ServicesPointsList">
    <ServicesPointItem
      v-for="(point, index) in points"
      :key="point.name"
      v-bind="point"
      :rtl="Boolean(index % 2)"
      class="ServicesPointsList__item"
    />
  </div>
</template>

<script>
export default {
  name: 'ServicesPointsList',
  computed: {
    points() {
      return [
        this.makePointObj(
          'how',
          'services.points.text1',
          'services.points.label1',
          '/',
          require('~/assets/images/services/how.svg'),
          this.$t('services.points.focus1', { price: '£7.99' })
        ),
        this.makePointObj(
          'team',
          'services.points.text2',
          'services.points.label2',
          '/',
          require('~/assets/images/services/team.svg')
        ),
        this.makePointObj(
          'execution',
          'services.points.text3',
          'services.points.label3',
          '/',
          require('~/assets/images/services/execution.svg')
        ),
      ]
    },
  },
  methods: {
    makePointObj(name, text, btnLabel, url, imgUrl, focus = null) {
      return { name, text, btnLabel, url, imgUrl, focus }
    },
  },
}
</script>

<style lang="scss">
.ServicesPointsList {
  --borderWidth: 1px;
  $borderWidth: var(--borderWidth);

  position: relative;
  display: grid;
  row-gap: $borderWidth;
  background: $gradient5;

  &__item {
    background-color: white;

    &:nth-child(odd) {
      position: inherit;
      left: $borderWidth;
    }

    &:nth-child(even) {
      position: inherit;
      right: $borderWidth;
    }
  }

  @include respondTo(md) {
    --borderWidth: 4px;
  }
}
</style>
