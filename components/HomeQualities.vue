<template>
  <Container class="HomeQualities">
    <HorizontalScrollable class="HomeQualities__container">
      <HomeQualityItem
        v-for="quality in qualities"
        :key="quality.name"
        v-bind="quality"
      />
    </HorizontalScrollable>
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
    gap: 40px;
  }
}
</style>
