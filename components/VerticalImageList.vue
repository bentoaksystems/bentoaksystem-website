<template>
  <div class="VerticalImageList horizontalList horizontalList--centred-align">
    <div
      v-for="image in images"
      :key="image.name"
      class="VerticalImageList__imgContainer"
    >
      <img :src="image.url" :alt="image.name" class="VerticalImageList__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalImageList',
  props: {
    images: {
      type: Array,
      require: true,
      validator(images) {
        return images.every(
          ({ name, url }) => typeof name === 'string' && typeof url === 'string'
        )
      },
    },
  },
}
</script>

<style lang="scss">
.VerticalImageList {
  &__imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
