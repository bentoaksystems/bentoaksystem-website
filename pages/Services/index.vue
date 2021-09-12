<template>
  <main class="Services">
    <ServicesHero />
    <ServicesPoints />
    <LetsGetInTouch class="Services__form" />
  </main>
</template>

<script>
export default {
  name: 'Services',
}
</script>

<style lang="scss">
.Services {

  &__form {
    margin-bottom: 32px;

    @include respondTo(md) {
      margin-bottom: 64px;
    }
  }
}
</style>
