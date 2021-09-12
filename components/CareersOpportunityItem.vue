<template>
  <div class="CareersOpportunityItem">
    <div class="CareersOpportunityItem__signBox">
      <img :src="imgUrl" :alt="type" />
    </div>
    <div class="CareersOpportunityItem__container">
      <div
        class="CareersOpportunityItem__innerContainer"
        :class="{ 'CareersOpportunityItem__innerContainer--light': light }"
      >
        <h6 class="CareersOpportunityItem__title">{{ $t(title) }}</h6>
        <ul class="CareersOpportunityItem__requirements">
          <li
            v-for="requirement in requirements"
            :key="requirement"
            class="CareersOpportunityItem__requirement"
          >
            {{ $t(requirement) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export const TYPES = {
  WEB: 'web',
  IOS: 'ios',
  QC: 'qc',
  UIUX: 'uiux',
  PYTHON: 'python',
}

export default {
  name: 'CareersOpportunityItem',
  props: {
    type: {
      type: String,
      require: true,
      validator(type) {
        return Object.values(TYPES).includes(type)
      },
    },
    title: {
      type: String,
      require: true,
    },
    requirements: {
      type: Array,
      require: true,
      validator(requirements) {
        return requirements.every(
          (requirement) => typeof requirement === 'string'
        )
      },
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imgUrl() {
      const { type, light } = this

      if (type === TYPES.DEV && light || type === TYPES.PYTHON) {
        return require('~/assets/images/careers/devLight.svg')
      } else if (type === TYPES.WEB) {
        return require('~/assets/images/careers/dev.svg')
      } else if (type === TYPES.IOS) {
        return require('~/assets/images/careers/ios.svg')
      } else if (type === TYPES.QC) {
        return require('~/assets/images/careers/qc.svg')
      } else if (type === TYPES.UIUX) {
        return require('~/assets/images/careers/uiux.svg')
      }
    },
  },
}
</script>

<style lang="scss">
$lightBlue: #92d0ee;

.CareersOpportunityItem {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__signBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 100%;
  }

  &__innerContainer {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    color: $white;
    background-color: $blue;
    border-radius: 10px;

    &--light {
      color: $dark-grey;
      background: linear-gradient(90deg, $lightBlue 2.89%, #a6e2ff 88.87%);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform-origin: center;
      transform: translate(-50%, -50%) rotate(45deg) skew(10deg, 10deg);
      border-top-left-radius: 4px;
      display: block;
      background: inherit;
      z-index: -1;
      @include square(20px);
    }
  }

  &__title {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 700;
    text-align: center;
    @include fontSize(18px);
  }

  &__requirements {
    @include addSpecificity {
      padding-left: 16px;
    }
  }

  &__requirement {
    position: relative;
    @include fontSize(14px);

    &:before {
      content: '';
      position: absolute;
      top: 6px;
      left: -14px;
      display: block;
      background-color: $yellow;
      border-radius: 999px;
      @include square(8px);
    }
  }
}
</style>
