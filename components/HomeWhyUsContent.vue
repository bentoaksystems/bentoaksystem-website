<template>
  <Container>
    <div class="HomeWhyUsContent__box">
      <h3 class="HomeWhyUsContent__title">{{ $t('home.whyUs.title') }}</h3>
      <HorizontalScrollable class="HomeWhyUsContent__listContainer">
        <HomeWhyUsItem
          v-for="reason in reasons"
          :key="reason.title"
          v-bind="reason"
        />
      </HorizontalScrollable>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'HomeWhyUsContent',
  computed: {
    reasons() {
      return [
        this.makeReasonObj(
          'home.whyUs.valueTitle',
          'home.whyUs.valueText',
          require('~/assets/images/home/homeWhyUsValue.png')
        ),
        this.makeReasonObj(
          'home.whyUs.onboardingTitle',
          'home.whyUs.onboardingText',
          require('~/assets/images/home/homeWhyUsOnboarding.png')
        ),
        this.makeReasonObj(
          'home.whyUs.agileTitle',
          'home.whyUs.agileText',
          require('~/assets/images/home/homeWhyUsAgile.png')
        ),
      ]
    },
  },
  methods: {
    makeReasonObj(title, text, imgUrl) {
      return {
        title,
        text,
        imgUrl,
      }
    },
  },
}
</script>

<style lang="scss">
.HomeWhyUsContent {
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0 128px;
  }

  &__title {
    @include gradientText($gradient5);
    @include fontSize(34px);
    margin-bottom: 32px;
    font-weight: 500;
  }

  &__listContainer {
    gap: 32px;
  }

  @include respondTo(md) {
    &__title {
      @include fontSize(48px);
      margin-bottom: 128px;
    }

    &__listContainer {
      gap: 76px;
    }
  }
}
</style>
