<template>
  <DropdownMenu
    :overlay="false"
    mode="hover"
    direction="center"
    class="NavigationSubLinksDropDown"
    @mouseenter.native="openDropdown"
    @mouseleave.native="closeDropdown"
  >
    <RotatingChevron slot="trigger" :size="12" :active="isOpen" />
    <GradientBorder slot="body">
      <ul>
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          v-slot="{ href, navigate, isExactActive }"
          :to="localePath(link.to)"
          custom
        >
          <li
            class="NavigationSubLinksDropDown__link"
            :class="{
              'NavigationSubLinksDropDown__link--active': isExactActive,
            }"
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
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openDropdown() {
      this.isOpen = true
    },
    closeDropdown() {
      this.isOpen = false
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.NavigationSubLinksDropDown {
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

  .rotatingChevron svg {
    color: #0041a0;
  }
}
</style>
