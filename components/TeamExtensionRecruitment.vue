<template>
  <Container tag="section" class="TeamExtensionRecruitment">
    <h3 class="TeamExtensionRecruitment__title">
      {{ $t('teamExtension.recruitment.title') }}
    </h3>
    <p class="TeamExtensionRecruitment__text">
      {{ $t('teamExtension.recruitment.text') }}
    </p>
    <CollapsibleChevron
      v-show="isDesktop"
      class="TeamExtensionRecruitment__chevron"
    />
    <HorizontalScrollable class="TeamExtensionRecruitment__list">
      <TeamExtensionRecruitmentItem
        v-for="(step, index) in interviewSteps"
        :key="step.title"
        v-bind="{ index, ...step }"
        :chevron="!!index"
      />
    </HorizontalScrollable>
  </Container>
</template>

<script>
export default {
  name: 'TeamExtensionRecruitment',
  computed: {
    isDesktop() {
      return this.$screen.md
    },
    interviewSteps() {
      return [
        this.makeInterviewStepObj(
          require('~/assets/images/services/TeamExtension1.svg'),
          'teamExtension.recruitment.process.title1',
          'teamExtension.recruitment.process.text1'
        ),
        this.makeInterviewStepObj(
          require('~/assets/images/services/TeamExtension2.svg'),
          'teamExtension.recruitment.process.title2',
          'teamExtension.recruitment.process.text2',
          [
            'teamExtension.recruitment.process.item21',
            'teamExtension.recruitment.process.item22',
            'teamExtension.recruitment.process.item23',
            'teamExtension.recruitment.process.item24',
          ]
        ),
        this.makeInterviewStepObj(
          require('~/assets/images/services/TeamExtension3.svg'),
          'teamExtension.recruitment.process.title3',
          'teamExtension.recruitment.process.text3'
        ),
        this.makeInterviewStepObj(
          require('~/assets/images/services/TeamExtension4.svg'),
          'teamExtension.recruitment.process.title4',
          'teamExtension.recruitment.process.text4'
        ),
        this.makeInterviewStepObj(
          require('~/assets/images/services/TeamExtension5.svg'),
          'teamExtension.recruitment.process.title5',
          'teamExtension.recruitment.process.text5'
        ),
      ]
    },
  },
  methods: {
    makeInterviewStepObj(iconUrl, title, text, items = null) {
      return { iconUrl, title, text, items }
    },
  },
}
</script>

<style lang="scss">
.TeamExtensionRecruitment {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 500;
    @include fontSize(34px);
    @include gradientText($gradient4);
  }

  &__text {
    font-weight: 500;
    color: $dark-grey;
    max-width: 600px;
    text-align: center;
    @include fontSize(16px);
  }

  &__chevron {
    margin-top: 60px;
  }

  &__list {
    margin: 60px 0 65px;
  }

  @include respondTo(md) {
    &__title {
      font-weight: 400;
      @include fontSize(60px);
    }
    &__text {
      @include fontSize(34px);
    }
  }
}
</style>
