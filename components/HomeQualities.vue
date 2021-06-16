<template>
  <Container class="HomeQualities">
    <div class="HomeQualities__container">
      <HomeQualityItem
        v-for="quality in qualities"
        :key="quality.name"
        class="HomeQualities__item"
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
    justify-content: center;
    overflow-y: auto;
  }

  &__item {
    margin: 16px;

    @include respondTo(md) {
      margin: unset;
    }
  }
}
</style>
