<template>
  <component :is="iconComponent" v-if="iconComponent" />
</template>

<script>
import checkmark from '~/assets/images/icons/checkmark'
import chevron from '~/assets/images/icons/chevron'
import english from '~/assets/images/icons/english'
import exit from '~/assets/images/icons/exit'
import facebook from '~/assets/images/icons/facebook'
import french from '~/assets/images/icons/french'
import german from '~/assets/images/icons/german'
import instagram from '~/assets/images/icons/instagram'
import linkedin from '~/assets/images/icons/linkedin'
import menu from '~/assets/images/icons/menu'
import minus from '~/assets/images/icons/minus'
import phone from '~/assets/images/icons/phone'
import pin from '~/assets/images/icons/pin'
import plus from '~/assets/images/icons/plus'
import spanish from '~/assets/images/icons/spanish'
import twitter from '~/assets/images/icons/twitter'
import upload from '~/assets/images/icons/upload'
import whatsapp from '~/assets/images/icons/whatsapp'

const iconsMap = {
  checkmark,
  chevron,
  english,
  exit,
  facebook,
  french,
  german,
  instagram,
  linkedin,
  menu,
  minus,
  phone,
  pin,
  plus,
  spanish,
  twitter,
  upload,
  whatsapp,
}

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconComponent() {
      const name = this.name

      // eslint-disable-next-line no-prototype-builtins
      if (iconsMap.hasOwnProperty(name)) {
        return iconsMap[name]
      }

      return null
    },
  },
}
</script>

<style></style>
