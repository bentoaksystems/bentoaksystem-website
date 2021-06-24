<template>
  <Container tag="section" class="TechsWebTechs">
    <TechsWebTechItem
      v-for="webTech in webTechs"
      :key="webTech.title"
      v-bind="webTech"
      class="TechsWebTechs__item"
    />
  </Container>
</template>

<script>
export default {
  name: 'TechsWebTechs',
  computed: {
    webTechs() {
      return [
        {
          title: 'techs.frontend.title',
          imgUrl: require('~/assets/images/techs/TechsAngular.png'),
          imgWidth: '200px',
          items: [
            'techs.frontend.item1',
            'techs.frontend.item2',
            'techs.frontend.item3',
            'techs.frontend.item4',
          ],
        },
        {
          title: 'techs.backend.title',
          imgUrl: require('~/assets/images/techs/TechsNode.png'),
          imgWidth: '134px',
          items: [
            'techs.backend.item1',
            'techs.backend.item2',
            'techs.backend.item3',
            'techs.backend.item4',
            'techs.backend.item5',
          ],
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.TechsWebTechs {
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > * {
    flex: 1 100%;
  }

  @include respondTo(md) {
    flex-direction: row;
    gap: 72px;
  }

  &__item {
    @include addSpecificity {
      border-radius: 8px;

      &::before {
        margin: -1px;
      }
      @include respondTo(md) {
        border-radius: 16px;

        &::before {
          margin: -3px;
        }
      }
    }
  }
}
</style>
