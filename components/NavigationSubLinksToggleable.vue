<template>
  <div class="NavigationSubLinksToggleable">
    <RotatingChevron :size="12" :active="isOpen" @toggle="toggle" />
    <ul v-show="isOpen">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        v-slot="{ href, navigate, isExactActive }"
        :to="localePath(link.to)"
        custom
      >
        <li
          class="NavigationSubLinksToggleable__link"
          :class="{
            'NavigationSubLinksToggleable__link--active': isExactActive,
          }"
        >
          <a :href="href" @click="navigate">
            {{ $t(link.label) }}
          </a>
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.NavigationSubLinksToggleable {
  display: flex;
  flex-direction: column;

  &__link {
    margin: 16px 0;
    @include fontSize(12px);
    white-space: nowrap;
    text-transform: capitalize;

    &:first-child,
    &:last-child {
      margin: 0;
    }

    &--active {
      text-decoration: underline;
    }
  }
}
</style>
