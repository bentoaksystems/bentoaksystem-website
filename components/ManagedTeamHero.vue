<template>
  <Container tag="section" class="ManagedTeamHero">
    <h1 class="ManagedTeamHero__headline">{{ $t('managedTeam.headline') }}</h1>
    <div class="ManagedTeamHero__imgBox">
      <img
        :src="require('~/assets/images/services/ManagedTeamHero.svg')"
        alt="Managed Team"
      />
    </div>
  </Container>
</template>

<script>
export default {
  name: 'ManagedTeamHero',
}
</script>

<style lang="scss">
.ManagedTeamHero {
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
    @include gradientText($gradient7);
  }

  &__imgBox {
    max-width: 55%;
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
