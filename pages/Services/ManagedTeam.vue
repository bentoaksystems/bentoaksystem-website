<template>
  <main class="ManagedTeam">
    <ManagedTeamHero />
    <ManagedTeamAgileTeam />
    <LetsGetInTouch class="ManagedTeam__form" />
  </main>
</template>

<script>
export default {
  name: 'ManagedTeam',
}
</script>

<style lang="scss">
.ManagedTeam {
  &__form {
    margin-top: 64px;
    margin-bottom: 32px;

    @include respondTo(md) {
      margin-top: 154px;
      margin-bottom: 64px;
    }
  }
}
</style>
