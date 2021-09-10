<template>
  <footer class="Footer">
    <Container class="Footer__container">
      <Logo class="Footer__logo" />
      <Navigation variant="footer" />
      <div v-if="contactInfo.length" class="Footer__contactInfo">
        <div
          v-for="item in contactInfo"
          :key="item.text"
          class="Footer__contactItem"
        >
          <Icon :name="item.icon" class="Footer__contactItemIcon" />
          <p v-if="!item.hyperlink">{{ item.text }}</p>
          <p v-if="item.hyperlink" class="Footer__hyperlink">
            <a :href="item.hyperlink">{{ item.text }}</a>
          </p>
        </div>
      </div>
      <div class="Footer__socialAndRights">
        <div />
        <p class="Footer__rights">
          © 2021 BENT OAK SYSTEMS LTD. All rights reserved
        </p>
        <div class="Footer__socialMediaLinkList">
          <a
            v-for="link in socialMediaContacts"
            :key="link.label"
            :href="link.to"
            class="Footer__socialMediaLink"
          >
            <Icon :name="link.icon" />
          </a>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
export default {
  computed: {
    contactInfo() {
      return [
        {
          text: '+44 20 81442031',
          icon: 'phone',
          hyperlink: 'tel:+442081442031',
        },
        {
          text: '+44 778282 7075',
          icon: 'whatsapp',
          hyperlink:
            'https://wa.me/447782827075?text=I%20want%20to%20build%20a%20team',
        },
        {
          text: '20-22 Wenlock Road, London, N1 7GU, United Kingdomَ',
          icon: 'pin',
        },
      ]
    },
    socialMediaContacts() {
      return [
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          to: 'https://www.linkedin.com/company/bent-oak-systems/about/',
        },
        {
          icon: 'instagram',
          label: 'Instagram',
          to: 'https://www.instagram.com/bentoaksystems/',
        },
        {
          icon: 'facebook',
          label: 'Facebook',
          to: 'https://www.facebook.com/Bentoaksystems',
        },
        {
          icon: 'twitter',
          label: 'Twitter',
          to: 'https://twitter.com/bentoaksystems',
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.Footer {
  position: relative;
  overflow: hidden;
  padding: 36px 0;
  background-image: url('~/assets/images/footerBGVertical.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__hyperlink {
    text-decoration: underline;
    cursor: pointer;
  }
  &__logo {
    margin-bottom: 28px;
  }

  &__contactInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 100%;
  }

  &__contactItem {
    display: flex;
    align-items: center;
    @include fontSize(14px);
    font-weight: 500;
  }

  &__contactItemIcon {
    @include square(18px);
    margin-right: 8px;
  }

  &__socialAndRights {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 146px;
    padding: 2px 0;
    width: 100%;
  }

  &__rights {
    @include fontSize(14px);
    font-weight: 500;
  }

  &__socialMediaLinkList {
    display: flex;
    justify-content: flex-end;
  }

  &__socialMediaLink {
    &:nth-child(n + 2) {
      margin-left: 16px;
    }
  }

  &__socialMediaIcon {
    @include square(24px);
  }

  @include respondTo(md) {
    background-image: url('~/assets/images/footerBG.png');

    &__contactInfo {
      align-items: flex-start;
      margin-top: 12px;
      border-bottom: $divier-border;
    }

    &__socialAndRights {
      flex-direction: row;
      margin-top: unset;

      & > * {
        flex: 1;
      }
    }
  }
}
</style>
