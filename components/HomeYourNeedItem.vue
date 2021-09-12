<template>
  <GradientBorder
    class="HomeYourNeedItem"
    :class="rtl && 'HomeYourNeedItem--rtl'"
  >
    <div class="HomeYourNeedItem__section">
      <div class="HomeYourNeedItem__content">
        <h6 class="HomeYourNeedItem__title">
          {{ $t(title) }}
        </h6>
        <ul class="HomeYourNeedItem__list">
          <li v-for="item in items" :key="item" class="HomeYourNeedItem__item">
            {{ $t(item) }}
          </li>
        </ul>
        <NuxtLink
          v-if="link"
          :to="localePath(linkUrl)"
          class="HomeYourNeedItem__link"
          >{{ $t(linkTitle) }}</NuxtLink
        >
      </div>
    </div>
    <div class="HomeYourNeedItem__section">
      <div class="HomeYourNeedItem__imgContainer">
        <img :src="imgUrl" :alt="$t(title)" class="HomeYourNeedItem__img" />
      </div>
    </div>
  </GradientBorder>
</template>

<script>
export default {
  name: 'HomeYourNeedItem',
  props: {
    rtl: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    items: {
      type: Array,
    },
    link: {
      type: [Object, null],
      defautl: null,
      validator(value) {
        if (!value && typeof value === 'object') return true
        else if (value && typeof value === 'object') {
          const keys = Object.keys(value)

          return keys.includes('title') && keys.includes('url')
        }
      },
    },
    imgUrl: {
      type: String,
    },
  },
  computed: {
    linkTitle() {
      return this.link?.title
    },
    linkUrl() {
      return this.link?.url
    },
  },
}
</script>

<style lang="scss">
$sidePadding: 32px;

.HomeYourNeedItem {
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px;

  gap: 16px;
  width: 100%;

  @include addSpecificity {
    border-radius: 8px;
  }

  @include respondTo(md) {
    flex-direction: row;
    padding: 36px 15%;

    @include addSpecificity {
      border-radius: 32px;
    }

    &--rtl {
      flex-direction: row-reverse;
    }
  }

  &__section {
    flex: 1 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    @include fontSize(20px);
    margin: 0;
    margin-bottom: 16px;
    padding-left: $sidePadding;
    font-weight: 700px;

    @include respondTo(md) {
      padding-left: unset;
    }
  }

  &__list {
    @include addSpecificity {
      padding-left: $sidePadding;
    }
  }

  &__item {
    @include fontSize(16px);
    font-weight: 500;

    @include addSpecificity {
      list-style: disc;
    }
  }

  &__link {
    @include fontSize(12px);
    font-weight: 600;
    padding-left: $sidePadding;
    text-decoration: underline;
  }

  &__imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 200px;

    @include respondTo(md) {
      max-width: 250px;
    }
  }

  &__img {
    width: 100%;
  }
}
</style>
