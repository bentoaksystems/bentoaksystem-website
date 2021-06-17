<template>
  <Container class="HomeQualities">
    <div class="HomeQualities__container">
      <HomeQualityItem
        v-for="quality in qualities"
        :key="quality.name"
        v-bind="quality"
      />
    </div>
  </Container>
</template>

<script>
export default {
  name: 'HomeQualities',
  computed: {
    qualities() {
      return [
        this.makeQualityObj(
          'home.qualities.hr',
          require('~/assets/images/home/homeQualitiesHr.png')
        ),
        this.makeQualityObj(
          'home.qualities.trial',
          require('~/assets/images/home/homeQualitiesTrial.png')
        ),
        this.makeQualityObj(
          'home.qualities.consult',
          require('~/assets/images/home/homeQualitiesConsult.png')
        ),
        this.makeQualityObj(
          'home.qualities.package',
          require('~/assets/images/home/homeQualitiesPackage.png')
        ),
        this.makeQualityObj(
          'home.qualities.ukContract',
          require('~/assets/images/home/homeQualitiesUkContract.png')
        ),
      ]
    },
  },
  methods: {
    makeQualityObj(name, imgUrl) {
      return {
        name,
        imgUrl,
      }
    },
  },
}
</script>

<style lang="scss">
.HomeQualities {
  --verticalPadding: 32px;

  padding-top: var(--verticalPadding);
  padding-bottom: var(--verticalPadding);

  @include respondTo(md) {
    --verticalPadding: 64px;
  }

  &__container {
    display: flex;
    gap: 40px;
    margin-left: -($sidePadding);
    margin-right: -($sidePadding);
    padding-left: $sidePadding;
    width: calc(100% + (2 * #{$sidePadding}));
    overflow-y: auto;

    & > * {
      flex-basis: 100%;
      flex: 1;
    }

    & > *:last-child {
      margin-right: $sidePadding;
    }
  }
}
</style>
