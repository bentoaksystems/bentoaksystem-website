<template>
  <section class="CareersBenefits">
    <Container class="CareersBenefits__container">
      <div
        v-for="(benefit, index) in benefitsList"
        :key="benefit.name"
        class="CareersBenefits__item"
        :class="{ 'CareersBenefits__item--reversed': Boolean(index % 2) }"
      >
        <CareersBenefitItem v-bind="benefit" :rtl="Boolean(index % 2)" />
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'CareersBenefits',
  computed: {
    benefitsList() {
      return [
        this.makeBenefitObj(
          'workflow',
          'careers.benefits.text1',
          require('~/assets/images/careers/careersWorkflow.png')
        ),
        this.makeBenefitObj(
          'remote',
          'careers.benefits.text2',
          require('~/assets/images/careers/careersRemote.png')
        ),
        this.makeBenefitObj(
          'support',
          'careers.benefits.text3',
          require('~/assets/images/careers/careersSupport.png')
        ),
        this.makeBenefitObj(
          'salary',
          'careers.benefits.text4',
          require('~/assets/images/careers/careersSalary.png')
        ),
        this.makeBenefitObj(
          'learning',
          'careers.benefits.text5',
          require('~/assets/images/careers/careersLearning.png')
        ),
      ]
    },
  },
  methods: {
    makeBenefitObj(name, text, imgUrl) {
      return { name, text, imgUrl }
    },
  },
}
</script>

<style lang="scss">
.CareersBenefits {
  background: linear-gradient(
    90deg,
    #f1f1f1 0%,
    rgba(189, 216, 230, 0.12) 0.01%,
    rgba(139, 198, 227, 0) 100%
  );

  &__container {
    $verticalPadding: 50px;

    display: grid;
    grid-auto-rows: 1fr;
    row-gap: 16px;
    padding-top: $verticalPadding;
    padding-bottom: $verticalPadding;

    &__item {
      display: flex;

      & > * {
        flex: 1;
      }
    }
  }

  @include respondTo(md) {
    &__container {
      $verticalPadding: 120px;

      row-gap: 80px;
      padding-top: $verticalPadding;
      padding-bottom: $verticalPadding;

      &__item {
        & > * {
          flex: 0 65%;
        }

        &--reversed {
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
