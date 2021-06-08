<template>
  <nav class="Navigation">
    <ul class="Navigation__list">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        v-slot="{ href, navigate, isExactActive }"
        :to="localePath(link.to)"
        custom
      >
        <li
          :class="[
            'Navigation__item',
            { 'Navigation__item--active': isExactActive },
            { 'Navigation__item--footer': variant === 'footer' },
          ]"
        >
          <a :href="href" @click="navigate">
            {{ $t(link.label) }}
          </a>
          <NavigationSubLinks
            v-if="link.children"
            :links="link.children"
            class="Navigation__subLinks"
          />
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'footer'].includes(value)
      },
    },
  },
  computed: {
    navLinks() {
      return [
        this.makeNavLink('navLinks.home', '/'),
        this.makeNavLink('navLinks.aboutUs', '/aboutus'),
        this.makeNavLink('navLinks.services', '/services', [
          this.makeNavLink('navLinks.teamextension', '/services/teamextension'),
          this.makeNavLink('navLinks.managedteam', '/services/managedteam'),
          this.makeNavLink('navLinks.planning', '/services/planning'),
        ]),
        this.makeNavLink('navLinks.techs', '/techs'),
        this.makeNavLink('navLinks.careers', '/careers'),
        this.makeNavLink('navLinks.faq', '/faq'),
      ]
    },
  },
  methods: {
    makeNavLink(label, to, children = null) {
      return {
        label,
        to,
        children,
      }
    },
  },
}
</script>

<style lang="scss">
.Navigation {
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;
    color: $blue;
    font-weight: 500;
    @include fontSize(16px);

    &--active {
      text-decoration: underline;
    }

    &--header {
      color: $white;
    }

    &--footer {
      color: $dark-grey;
    }
  }

  &__subLinks {
    margin-left: 8px;
  }

  @include respondTo(md) {
    &__list {
      flex-direction: row;
    }

    &__item {
      &:nth-child(n + 2) {
        margin-left: 16px;
      }
    }
  }
}
</style>
