<template>
  <Container tag="section" class="TechsCta">
    <h4 class="TechsCta__text">
      {{ $t('techs.cta.textLine1') }}
      <br />
      {{ $t('techs.cta.textLine2') }}
    </h4>
    <BaseButton v-scroll-to="'#form'" class="TechsCta__button">
      {{ $t('techs.cta.button') }}
    </BaseButton>
  </Container>
</template>

<script>
export default {
  name: 'TechsCta',
}
</script>

<style lang="scss">
.TechsCta {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    margin-bottom: 8px;
    font-weight: 500;
    text-align: center;
    @include fontSize(20px);
    @include gradientText($gradient1);

    @include respondTo(md) {
      margin-bottom: 24px;
      @include fontSize(32px);
    }
  }

  &__button {
    font-weight: 700;

    @include addSpecificity {
      padding: 12px 56px;
    }
  }
}
</style>
