<template>
  <Container tag="section" class="TeamExtensionFlex">
    <div class="TeamExtensionFlex__list">
      <TeamExtensionFlexItem
        v-for="item in flexItems"
        :key="item.name"
        v-bind="item"
      />
    </div>
    <BaseButton :to="'#form'" class="TeamExtensionFlex__button">{{
      $t('teamExtension.flex.btnLabel')
    }}</BaseButton>
  </Container>
</template>

<script>
export default {
  name: 'TeamExtensionFlex',
  computed: {
    flexItems() {
      return [
        this.makeFlexObj(
          'recharge',
          'teamExtension.flex.recharge.title',
          'teamExtension.flex.recharge.text',
          [
            'teamExtension.flex.recharge.item1',
            'teamExtension.flex.recharge.item2',
            'teamExtension.flex.recharge.item3',
          ]
        ),
        this.makeFlexObj(
          'recruit',
          'teamExtension.flex.recruit.title',
          'teamExtension.flex.recruit.text',
          [
            'teamExtension.flex.recruit.item1',
            'teamExtension.flex.recruit.item2',
            'teamExtension.flex.recruit.item3',
            'teamExtension.flex.recruit.item4',
          ]
        ),
      ]
    },
  },
  methods: {
    makeFlexObj(name, title, text, items) {
      return { name, title, text, items }
    },
  },
}
</script>

<style lang="scss">
.TeamExtensionFlex {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  &__list {
    display: grid;
    row-gap: 32px;
  }

  &__button {
    margin-top: 32px;

    @include addSpecificity {
      padding: 12px 56px;
    }
  }

  @include respondTo(md) {
    &__list {
      row-gap: 120px;
    }

    &__button {
      margin-top: 64px;
    }
  }
}
</style>
