<template>
  <Container tag="section" class="PlanningSteps">
    <p class="PlanningSteps__text">
      {{ $t('planning.steps.text1') }}
    </p>
    <p class="PlanningSteps__text">
      {{ $t('planning.steps.text2') }}
    </p>
    <div class="PlanningSteps__list">
      <template v-for="(step, index) in stepsList">
        <PlanningStepItemDesktop
          v-show="$screen.lg"
          :key="'d' + index"
          v-bind="{ index, ...step }"
          :rtl="Boolean(index % 2)"
          class="PlanningSteps__item PlanningSteps__item--desktop"
        />
        <PlanningStepItemMobile
          v-show="!$screen.lg"
          :key="'m' + index"
          v-bind="{ index, ...step }"
          class="PlanningSteps__item PlanningSteps__item--mobile"
        />
      </template>
    </div>
    <BaseButton class="PlanningSteps__button">
      {{ $t('planning.buttonLabel') }}
    </BaseButton>
  </Container>
</template>

<script>
export default {
  name: 'PlanningSteps',
  computed: {
    stepsList() {
      return [
        this.makeStepObj(
          require('~/assets/images/services/Planning1.png'),
          require('~/assets/images/services/PlanningBg1.png'),
          'planning.steps.list1.title',
          [
            'planning.steps.list1.item1',
            'planning.steps.list1.item2',
            'planning.steps.list1.item3',
            'planning.steps.list1.item4',
            'planning.steps.list1.item5',
            'planning.steps.list1.item6',
          ]
        ),
        this.makeStepObj(
          require('~/assets/images/services/Planning2.png'),
          require('~/assets/images/services/PlanningBg2.png'),
          'planning.steps.list2.title',
          [
            'planning.steps.list2.item1',
            'planning.steps.list2.item2',
            'planning.steps.list2.item3',
            'planning.steps.list2.item4',
            'planning.steps.list2.item5',
          ]
        ),
        this.makeStepObj(
          require('~/assets/images/services/Planning3.png'),
          require('~/assets/images/services/PlanningBg3.png'),
          'planning.steps.list3.title',
          [
            'planning.steps.list3.item1',
            'planning.steps.list3.item2',
            'planning.steps.list3.item3',
            'planning.steps.list3.item4',
            'planning.steps.list3.item5',
            'planning.steps.list3.item6',
          ]
        ),
        this.makeStepObj(
          require('~/assets/images/services/Planning4.png'),
          require('~/assets/images/services/PlanningBg4.png'),
          'planning.steps.list4.title',
          [
            'planning.steps.list4.item1',
            {
              item: 'planning.steps.list4.item2',
              subItems: [
                'planning.steps.list4.item21',
                'planning.steps.list4.item22',
                'planning.steps.list4.item23',
              ],
            },
          ]
        ),
      ]
    },
  },
  methods: {
    makeStepObj(imgUrl, bgImgUrl, title, items) {
      return { imgUrl, bgImgUrl, title, items }
    },
  },
}
</script>

<style lang="scss">
.PlanningSteps {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    margin-bottom: 20px;
    max-width: 900px;
    color: $dark-grey;
    font-weight: 700;
    text-align: center;
    @include fontSize(20px);
  }

  &__item {
    margin-bottom: 76px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__button {
    margin-top: 32px;
    width: 100%;
    max-width: 240px;
  }

  @include respondTo(md) {
    &__text {
      margin-bottom: 40px;
      font-weight: 500;
      @include fontSize(34px);
    }

    &__item {
      margin-bottom: 220px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__button {
      margin-top: 120px;
    }
  }
}
</style>
