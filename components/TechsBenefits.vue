<template>
  <Container tag="section" class="TechsBenefits">
    <GradientBorder
      class="TechsBenefits__box TechsBenefits__box--dataEngineering"
    >
      <img
        v-show="!isDesktop"
        :src="require('~/assets/images/techs/techsAws.png')"
        alt="Aws"
        class="TechsBenefits__img"
      />
      <h4 v-show="!isDesktop" class="TechsBenefits__title">
        {{ $t('techs.dataEngineering.title') }}
      </h4>
      <VerticalImageList
        v-show="isDesktop"
        :images="dataEngineeringImages"
        class="TechsBenefits__imgList TechsBenefits__imgList--dataEngineering"
      />
      <SimpleUnorderedList
        :items="dataEngineeringContent"
        class="TechsBenefits__list"
      />
    </GradientBorder>
    <GradientBorder
      class="TechsBenefits__box TechsBenefits__box--productDesign"
    >
      <VerticalImageList
        v-show="isDesktop"
        :images="productDesignImageslarge"
        class="TechsBenefits__imgList TechsBenefits__imgList--designLarge"
      />
      <VerticalImageList
        v-show="isDesktop"
        :images="productDesignImagesSmall"
        class="TechsBenefits__imgList TechsBenefits__imgList--designSmall"
      />
      <img
        v-show="!isDesktop"
        :src="require('~/assets/images/techs/techsFigma.png')"
        alt="Figma"
        class="TechsBenefits__img"
      />
      <h4 v-show="!isDesktop" class="TechsBenefits__title">
        {{ $t('techs.productDesign.title') }}
      </h4>
      <div class="TechsBenefits__productDesignContentList">
        <SimpleUnorderedList
          v-show="isDesktop"
          :items="productDesignContent1"
          class="TechsBenefits__list"
        />
        <SimpleUnorderedList
          :items="productDesignContent2"
          class="TechsBenefits__list"
        />
        <SimpleUnorderedList
          :items="productDesignContent3"
          class="TechsBenefits__list"
        />
      </div>
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'TechsBenefits',
  computed: {
    isDesktop() {
      return this.$screen.md
    },
    dataEngineeringImages() {
      return [
        this.makeImgObj(
          'Pandas',
          require('~/assets/images/techs/techsPandas.png')
        ),
        this.makeImgObj('Aws', require('~/assets/images/techs/techsAws.png')),
        this.makeImgObj(
          'Python',
          require('~/assets/images/techs/techsPython.png')
        ),
      ]
    },
    dataEngineeringContent() {
      return ['techs.dataEngineering.item1', 'techs.dataEngineering.item2']
    },
    productDesignImageslarge() {
      return [
        this.makeImgObj(
          'Sketch',
          require('~/assets/images/techs/techsSketch.png')
        ),
        this.makeImgObj(
          'Figma',
          require('~/assets/images/techs/techsFigma.png')
        ),
        this.makeImgObj('Xd', require('~/assets/images/techs/techsXd.png')),
      ]
    },
    productDesignImagesSmall() {
      return [
        this.makeImgObj('Miro', require('~/assets/images/techs/techsMiro.png')),
        this.makeImgObj(
          'Invision',
          require('~/assets/images/techs/techsInvision.png')
        ),
        this.makeImgObj(
          'protoPie',
          require('~/assets/images/techs/techsProtoPie.png')
        ),
        this.makeImgObj(
          'Hotjar',
          require('~/assets/images/techs/techsHotjar.png')
        ),
      ]
    },
    productDesignContent1() {
      return [
        'techs.productDesign.list1.item1',
        'techs.productDesign.list1.item2',
        'techs.productDesign.list1.item3',
      ]
    },
    productDesignContent2() {
      return [
        'techs.productDesign.list2.item1',
        'techs.productDesign.list2.item2',
        'techs.productDesign.list2.item3',
        'techs.productDesign.list2.item4',
        'techs.productDesign.list2.item5',
      ]
    },
    productDesignContent3() {
      return [
        'techs.productDesign.list3.item1',
        'techs.productDesign.list3.item2',
        'techs.productDesign.list3.item3',
        'techs.productDesign.list3.item4',
        'techs.productDesign.list3.item5',
      ]
    },
  },
  methods: {
    makeImgObj(name, url) {
      return { name, url }
    },
  },
}
</script>

<style lang="scss">
.TechsBenefits {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include respondTo(md) {
    gap: 64px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include addSpecificity {
      padding: 24px 16px;
      border-radius: 8px;

      &::before {
        margin: -1px;
      }

      @include respondTo(md) {
        padding: 24px 120px;
        border-radius: 16px;

        &::before {
          margin: -3px;
        }
      }
    }
  }

  &__title {
    margin-bottom: 32px;
    color: $blue;
    font-weight: 500;
    text-align: center;
    @include fontSize(34px);
  }

  &__imgList {
    & > * {
      flex: 1 100%;
    }

    &--dataEngineering {
      margin-bottom: 32px;
      gap: 100px;
    }

    &--designLarge {
      margin-bottom: 24px;
      gap: 100px;
    }

    &--designSmall {
      margin-bottom: 32px;
      gap: 30px;
    }
  }

  &__img {
    margin-bottom: 24px;
  }

  &__list {
    width: 100%;
    font-weight: 700;
    line-height: 30px;
    @include fontSize(20px);
  }

  &__productDesignContentList {
    display: grid;
    width: 100%;
    gap: 24px;

    & > *:first-child {
      grid-column: 1 / -1;
    }

    @include respondTo(md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
