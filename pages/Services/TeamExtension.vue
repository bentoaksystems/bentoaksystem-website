<template>
  <main class="TeamExtension">
    <TeamExtensionHero />
    <TeamExtensionFlex />
    <TeamExtensionRecruitment />
    <LetsGetInTouch class="TeamExtension__form" />
  </main>
</template>

<script>
export default {
  name: 'TeamExtension',
}
</script>

<style lang="scss">
.TeamExtension {
  &__form {
    margin-bottom: 32px;

    @include respondTo(md) {
      margin-top: 64px;
      margin-bottom: 64px;
    }
  }
}
</style>
