<template>
  <Container tag="section" class="AboutUsOurMission">
    <h3 class="AboutUsOurMission__title">
      {{ $t('aboutUs.missions.title') }}
    </h3>
    <div class="AboutUsOurMission__list">
      <AboutUsOurMissionItem
        v-for="mission in ourMissionList"
        :key="mission.name"
        v-bind="mission"
      />
    </div>
  </Container>
</template>

<script>
export default {
  name: 'AboutUsOurMission',
  computed: {
    ourMissionList() {
      return [
        this.makeMissionObj(
          'Talents',
          'aboutUs.missions.text1',
          'aboutUs.missions.urlLabel1',
          '/careers',
          require('~/assets/images/aboutUs/aboutUsMissionsTalents.svg')
        ),
        this.makeMissionObj(
          'Techs',
          'aboutUs.missions.text2',
          'aboutUs.missions.urlLabel2',
          '/techs',
          require('~/assets/images/aboutUs/aboutUsMissionsTechs.svg')
        ),
        this.makeMissionObj(
          'Modules',
          'aboutUs.missions.text3',
          'aboutUs.missions.urlLabel3',
          '/services',
          require('~/assets/images/aboutUs/aboutUsMissionsModule.svg')
        ),
      ]
    },
  },
  methods: {
    makeMissionObj(name, text, urlLabel, url, imgUrl) {
      // name property is used to make custom css classes
      return { name, text, urlLabel, url, imgUrl }
    },
  },
}
</script>

<style lang="scss">
.AboutUsOurMission {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    display: inline-block;
    margin-bottom: 64px;
    font-weight: 500;
    @include fontSize(34px);
    @include gradientText($gradient1);
  }

  &__list {
    display: grid;
    row-gap: 32px;
    grid-template-rows: repeat(3, 1fr);
  }

  @include respondTo(md) {
    &__title {
      margin-bottom: 32px;
      @include fontSize(48px);
    }
  }
}
</style>
