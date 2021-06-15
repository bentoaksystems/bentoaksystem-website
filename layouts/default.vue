<template>
  <div>
    <Header class="DefaultLayout__header" />
    <Nuxt class="DefaultLayout__body" />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
  --headerHeight: 56px;
}

.DefaultLayout {
  &__header {
    position: relative;
    z-index: 1;
  }

  &__body {
    @include respondTo(md) {
      --headerHeight: 112px;
    }

    margin-top: calc(var(--headerHeight) * -1);
    padding-top: var(--headerHeight);
  }
}
</style>
