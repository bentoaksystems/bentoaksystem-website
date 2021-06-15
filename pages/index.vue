<template>
  <div class="HomePage">
    <HomeHero class="HomePage__hero" />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.HomePage {
  @include addSpecificity {
    padding: 0;
  }

  &__hero {
    padding-top: var(--headerHeight);

    @include addSpecificity {
      margin: 0 -2px;
      border-radius: 0;
      background-image: url('~/assets/images/bgHomepage.png');
      background-size: cover;

      @include respondTo(md) {
        margin: 0;
        border-radius: 32px;
      }
    }
  }
}
</style>
