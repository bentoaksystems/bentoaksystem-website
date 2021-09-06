<template>
  <Container tag="section" class="HomeYourNeeds">
    <h2 class="HomeYourNeeds__title">
      {{ $t('home.yourNeeds.title') }}
    </h2>
    <div class="HomeYourNeeds__content">
      <div class="HomeYourNeeds__list">
        <HomeYourNeedItem
          v-for="(need, index) in needs"
          :key="need.title"
          :rtl="Boolean(index % 2)"
          v-bind="need"
          class="HomeYourNeeds__item"
        />
      </div>
      <BaseButton v-scroll-to="'#form'" class="HomeYourNeeds__CTA">
        {{ $t('home.yourNeeds.content.cta') }}
      </BaseButton>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'HomeYourNeeds',
  computed: {
    needs() {
      return [
        this.makeNeedObj(
          'home.yourNeeds.content.extension.title',
          [
            'home.yourNeeds.content.extension.items1',
            'home.yourNeeds.content.extension.items2',
          ],
          null,
          require('~/assets/images/home/HomeNeedExtension.png')
        ),
        this.makeNeedObj(
          'home.yourNeeds.content.team.title',
          [
            'home.yourNeeds.content.team.items1',
            'home.yourNeeds.content.team.items2',
          ],
          null,
          require('~/assets/images/home/HomeNeedPlanning.png')
        ),
        this.makeNeedObj(
          'home.yourNeeds.content.planning.title',
          [
            'home.yourNeeds.content.planning.items1',
            'home.yourNeeds.content.planning.items2',
          ],
          { title: 'See our complete services', url: '/services' },
          require('~/assets/images/home/HomeNeedRemoteTeam.png')
        ),
      ]
    },
  },
  methods: {
    makeNeedObj(title, items, link, imgUrl) {
      return { title, items, link, imgUrl }
    },
  },
}
</script>

<style lang="scss">
.HomeYourNeeds {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 56px;

  @include respondTo(md) {
    padding-top: 128px;
    padding-bottom: 64px;
  }

  &__title {
    @include gradientText($gradient5);
    @include fontSize(34px);
    margin-bottom: 42px;
    max-width: 900px;
    font-weight: 500;
    text-align: center;

    @include respondTo(md) {
      @include fontSize(60px);
      margin-bottom: 64px;
      font-weight: 400;
    }
  }

  &__content,
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    @include addSpecificity {
      margin-top: 16px;
      margin-bottom: 16px;

      @include respondTo(md) {
        margin-top: 64px;
        margin-bottom: 64px;

        &:last-child {
          margin-bottom: unset;
        }
      }
    }
  }

  &__CTA {
    margin-top: 24px;

    @include addSpecificity {
      padding: 12px 56px;
    }

    @include respondTo(md) {
      margin-top: 64px;
    }
  }
}
</style>
