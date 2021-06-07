<template>
  <DropdownMenu
    :overlay="false"
    mode="hover"
    direction="center"
    class="NavigationSubLinks"
    @mouseenter.native="isOpen = true"
    @mouseleave.native="isOpen = false"
  >
    <RotatingChevron slot="trigger" :size="12" :active="isOpen" />
    <GradientBorder slot="body">
      <ul>
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          v-slot="{ href, navigate, isExactActive }"
          :to="link.to"
          custom
        >
          <li
            class="NavigationSubLinks__link"
            :class="{ 'NavigationSubLinks__link--active': isExactActive }"
          >
            <a :href="href" @click="navigate">
              {{ $t(link.label) }}
            </a>
          </li>
        </NuxtLink>
      </ul>
    </GradientBorder>
  </DropdownMenu>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="scss">
.NavigationSubLinks {
  &__link {
    padding: 4px 8px 4px 12px;

    &--active {
      text-decoration: underline;
    }
  }

  //overwriting v-dropdown-menu lib
  .v-dropdown-menu__container {
    min-width: 170px;
    border: none;
    background-color: transparent;
  }
}
</style>
