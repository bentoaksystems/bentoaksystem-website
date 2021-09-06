<template>
  <Container tag="section" class="ManagedTeamAgileTeam">
    <h3 class="ManagedTeamAgileTeam__title">
      {{ $t('managedTeam.agileTeam.title') }}
    </h3>
    <GradientBorder class="ManagedTeamAgileTeam__box">
      <p class="ManagedTeamAgileTeam__text">
        {{ $t('managedTeam.agileTeam.text1') }}
        <br />
        {{ $t('managedTeam.agileTeam.text2') }}
      </p>
      <div class="ManagedTeamAgileTeam__listContainer">
        <ul
          v-for="(list, index) in lists"
          :key="index"
          class="ManagedTeamAgileTeam__list"
        >
          <li
            v-for="item in list"
            :key="item"
            class="ManagedTeamAgileTeam__item"
          >
            {{ $t(item) }}
          </li>
        </ul>
      </div>
    </GradientBorder>
    <BaseButton v-scroll-to="'#form'" class="ManagedTeamAgileTeam__button">{{
      $t('managedTeam.buttonLabel')
    }}</BaseButton>
  </Container>
</template>

<script>
export default {
  name: 'ManagedTeamAgileTeam',
  computed: {
    lists() {
      return [
        [
          'managedTeam.agileTeam.list1.item1',
          'managedTeam.agileTeam.list1.item2',
          'managedTeam.agileTeam.list1.item3',
          'managedTeam.agileTeam.list1.item4',
          'managedTeam.agileTeam.list1.item5',
        ],
        [
          'managedTeam.agileTeam.list2.item1',
          'managedTeam.agileTeam.list2.item2',
          'managedTeam.agileTeam.list2.item3',
          'managedTeam.agileTeam.list2.item4',
          'managedTeam.agileTeam.list2.item5',
        ],
      ]
    },
  },
}
</script>

<style lang="scss">
.ManagedTeamAgileTeam {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-bottom: 48px;
    font-weight: 700;
    text-align: center;
    @include fontSize(20px);
    @include gradientText($gradient3);
  }

  &__box {
    padding: 32px 16px;

    @include addSpecificity {
      border-radius: 8px;
    }
  }

  &__text {
    margin-bottom: 16px;
    color: $red;
    font-weight: 700;
    @include fontSize(20px);
  }

  &__listContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
  }

  &__list {
    color: $dark-grey;
    font-weight: 500;
    @include fontSize(14px);

    @include addSpecificity {
      padding-left: 32px;
    }
  }

  &__item {
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -32px;
      top: 50%;
      transform: translateY(-50%);
      background: $gradient3;
      border-radius: 999px;
      @include square(16px);
    }

    &:nth-of-type(n + 2) {
      margin-top: 8px;
    }
  }

  &__button {
    margin-top: 64px;
    width: 100%;
    max-width: 240px;
  }

  @include respondTo(md) {
    &__title {
      margin-bottom: 16px;
      font-weight: 500;
      @include fontSize(48px);
    }

    &__box {
      padding: 120px 64px;

      @include addSpecificity {
        border-radius: 32px;
      }
    }

    &__text {
      margin-bottom: 48px;
    }

    &__listContainer {
      flex-direction: row;
    }

    &__button {
      margin-top: 32px;
    }
  }
}
</style>
