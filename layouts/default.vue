<template>
  <div>
    <Header class="DefaultLayout__header" />
    <Nuxt class="DefaultLayout__body" />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="scss">
:root {
  --headerHeight: 56px;
}

.DefaultLayout {
  &__header {
    position: relative;
    z-index: 1;
    background: #ffffffdd;
  }

  &__body {
    @include respondTo(md) {
      --headerHeight: 112px;
    }

    margin-top: 0;
    padding-top: calc(var(--headerHeight) + 1vw);
  }
}
</style>
