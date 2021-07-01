<template>
  <GradientBorder
    class="AboutUsOurMissionItem"
    :class="`AboutUsOurMissionItem--${name}`"
  >
    <div class="AboutUsOurMissionItem__textContainer">
      <p class="AboutUsOurMissionItem__text">
        {{ $t(text) }}
        <NuxtLink
          v-show="isDesktop"
          :to="url"
          class="AboutUsOurMissionItem__link"
        >
          {{ $t(urlLabel) }}
        </NuxtLink>
      </p>
    </div>
    <div class="AboutUsOurMissionItem__imgContainer">
      <img :src="imgUrl" :alt="name" class="AboutUsOurMissionItem__img" />
    </div>
  </GradientBorder>
</template>

<script>
export default {
  name: 'AboutUsOurMissionItem',
  props: {
    name: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    urlLabel: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
  },
  computed: {
    isDesktop() {
      return this.$screen.md
    },
  },
}
</script>

<style lang="scss">
.AboutUsOurMissionItem {
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 12px;

  @include addSpecificity {
    border-radius: 8px;

    &::before {
      margin: -1px;
    }
  }

  &--Talents {
    flex-direction: column-reverse;
  }

  &__textContainer {
    flex: 1%;
    display: flex;
    align-items: center;
  }

  &__text {
    font-weight: 700;
    @include fontSize(20px);
  }

  &__link {
    color: $blue;
    font-weight: 700;
    text-decoration: underline;
    @include fontSize(20px);
  }

  &__imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    max-height: 180px;
  }

  @include respondTo(md) {
    flex-direction: row;
    align-items: center;
    padding: 32px 12%;

    @include addSpecificity {
      border-radius: 32px;

      &::before {
        margin: -2px;
      }
    }

    &--Techs {
      flex-direction: row-reverse;

      .AboutUsOurMissionItem__text {
        text-align: center;
      }

      .AboutUsOurMissionItem__img {
        margin-right: 64px;
      }
    }

    &__textContainer {
      flex: 1 65%;
    }

    &__imgContainer {
      flex: 1 35%;
    }
  }
}
</style>
