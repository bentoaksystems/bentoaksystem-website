<template>
  <Container tag="section" class="PlanningHero">
    <h1 class="PlanningHero__headline">{{ $t('planning.headline') }}</h1>
    <div class="PlanningHero__imgBox">
      <img
        :src="require('assets/images/services/planningHero.jpg')"
        alt="Managed Team"
      />
    </div>
  </Container>
</template>

<script>
export default {
  name: 'PlanningHero',
}
</script>

<style lang="scss">
.PlanningHero {
  display: flex;
  align-items: center;
  padding-bottom: 48px;
  gap: 16px;

  & > * {
    flex: 1;
  }

  &__headline {
    font-weight: 500;
    line-height: 51px;
    @include fontSize(34px);
    @include gradientText($gradient8);
  }

  &__imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 55%;

    img {
      max-height: 520px;
    }
  }

  @include respondTo(md) {
    padding-bottom: 64px;

    &__headline {
      line-height: 120px;
      @include fontSize(96px);
    }
  }
}
</style>
