<template>
  <div class="HomeTestimonials">
    <div class="HomeTestimonials__slideBox">
      <img
        :src="require('~/assets/images/home/HomeTestimonials.png')"
        class="HomeTestimonials__img"
      />
      <agile
        v-bind="carouselOptions"
        class="HomeTestimonials__slideContainer"
        @before-change="updateActiveSlide"
      >
        <div
          v-for="slide of slides"
          :key="slide.title"
          class="HomeTestimonials__slide slide"
        >
          <HomeTestimonialsSlide
            v-bind="slide"
            class="HomeTestimonials__slideContent"
          />
        </div>
      </agile>
    </div>
    <div class="HomeTestimonials__img2Container">
      <img
        :src="require('~/assets/images/home/HomeTestimonials2.png')"
        class="HomeTestimonials__img"
      />
    </div>
    <div class="HomeTestimonials__personCard">
      <span class="HomeTestimonials__personName">
        {{ $t(activeSlide.name) }}
      </span>
      <span class="HomeTestimonials__personTitle">
        {{ $t(activeSlide.jobTitle) }}
      </span>
      <div class="HomeTestimonials__personImgContainer">
        <img :src="activeSlide.imgUrl" :alt="activeSlide.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTestimonials',
  data() {
    return {
      activeSlideIndex: 0,
    }
  },
  computed: {
    activeSlide() {
      return this.slides[this.activeSlideIndex]
    },
    carouselOptions() {
      return {
        initialSlide: 0,
        navButtons: false,
      }
    },
    slides() {
      return [
        this.makeSlideObj(
          'home.testimonials.title1',
          'home.testimonials.text1',
          'home.testimonials.name1',
          'home.testimonials.jobTitle1',
          require('~/assets/images/home/HomeTestimonialsPerson1.png')
        ),
        this.makeSlideObj(
          'home.testimonials.title2',
          'home.testimonials.text2',
          'home.testimonials.name2',
          'home.testimonials.jobTitle2',
          require('~/assets/images/home/HomeTestimonialsPerson1.png')
        ),
      ]
    },
  },
  methods: {
    updateActiveSlide({ nextSlide }) {
      this.activeSlideIndex = nextSlide
    },
    makeSlideObj(title, text, name, jobTitle, imgUrl) {
      return { title, text, name, jobTitle, imgUrl }
    },
  },
}
</script>

<style lang="scss">
.HomeTestimonials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__slideBox {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url('~/assets/images/home/HomeTestimonials.png');
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 100% auto;
  }

  &__slideBox {
    .agile__list,
    .agile__track,
    .agile__slide {
      height: 100%;
    }

    .agile__actions {
      padding-top: 16px;
    }

    .agile__dots {
      display: flex;
      gap: 16px;
    }

    .agile__dot button {
      @include square(16px);
      border-radius: 999px;
      background-color: transparent;
      border: 1px solid $white;
    }
    .agile__dot.agile__dot--current button {
      background-color: $white;
    }
  }

  &__slideContainer {
    flex: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 16px 8px;
  }

  &__slide {
    height: 100%;
  }

  &__img {
    width: 100%;
    visibility: hidden;
  }

  &__img2Container {
    position: relative;
    top: -3vw;
    width: 20%;
    margin-left: 20%;
    display: inline-block;
    background-image: url('~/assets/images/home/HomeTestimonials2.png');
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 100% auto;
    z-index: -1;
  }

  &__personCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10%;
  }

  &__personName {
    @include fontSize(16px);
    margin-bottom: 8px;
    font-weight: 500;
    text-align: center;
  }

  &__personTitle {
    @include fontSize(12px);
    margin-bottom: 8px;
    font-weight: 500;
    text-align: center;
  }

  &__personImgContainer {
    width: 100%;
    max-width: 32px;
    border-radius: 9999px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  @include respondTo(sm) {
    &__personCard {
      margin-left: 12%;
    }
  }

  @include respondTo(md) {
    &__slideBox {
      .agile__actions {
        padding-top: 32px;
      }

      .agile__dots {
        gap: 32px;
      }

      .agile__dot button {
        @include square(32px);
      }
    }

    &__slideContainer {
      padding: 36px 48px 40px;
    }

    &__personCard {
      margin-left: 16%;
    }

    &__personTitle {
      @include fontSize(14px);
    }

    &__personImgContainer {
      max-width: 130px;
    }
  }

  @include respondTo(lg) {
    &__personCard {
      margin-left: 20%;
    }
  }
}
</style>
