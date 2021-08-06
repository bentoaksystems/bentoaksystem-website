<template>
  <div class="SwitchLocale">
    <DropdownMenu
      :overlay="false"
      direction="left"
      with-dropdown-closer
      @opened="isOpen = true"
      @closed="isOpen = false"
    >
      <div slot="trigger" class="SwitchLocale__trigger">
        <Icon :name="activeLocale.icon" width="36" height="36" />
        <RotatingChevron class="SwitchLocale__triggerIcon" :active="isOpen" />
      </div>
      <GradientBorder slot="body" class="SwitchLocale__body">
        <div
          v-for="locale in $i18n.locales"
          :key="locale.code"
          dropdown-closer
          class="SwitchLocale__item"
          @click="$i18n.setLocale(locale.code)"
        >
          <Icon :name="locale.icon" class="SwitchLocale__itemFlag" />
          <span>{{ locale.name }}</span>
          <Icon
            v-if="activeLocale.code === locale.code"
            name="checkmark"
            class="SwitchLocale__itemCheckmark"
          />
        </div>
      </GradientBorder>
    </DropdownMenu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    activeLocale() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
  },
}
</script>

<style lang="scss">
.SwitchLocale {
  &__trigger {
    display: flex;
    align-items: center;
    padding: 4px;
    cursor: pointer;
  }

  &__triggerFlag {
    width: 36px;
  }

  &__triggerIcon {
    margin-left: 8px;
  }

  &__body {
    padding: 16px 0;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 4px 8px 4px 12px;
    cursor: pointer;
  }

  &__itemFlag {
    margin-right: 16px;
    width: 32px;
  }

  &__itemCheckmark {
    margin-left: 8px;
  }

  //overwriting v-dropdown-menu lib
  .v-dropdown-menu__container {
    min-width: 170px;
    border: none;
    background-color: transparent;
  }
}
</style>
