<template>
  <Container tag="section" class="FAQsHero">
    <div class="FAQsHero__content">
      <img
        :src="require('~/assets/images/faq/faqsMainArtwork.jpg')"
        alt="Ask questions"
        class="FAQsHero__img"
      />
      <h1>
        <div class="FAQsHero__headline">{{ $t('faqs.headline') }}</div>
        <div class="FAQsHero__subhead">{{ $t('faqs.subhead') }}</div>
      </h1>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'FAQsHero',
}
</script>

<style lang="scss">
.FAQsHero {
  @include respondTo(md) {
    padding-top: 24px;
  }

  &__headline {
    font-weight: 500;
    line-height: 51px;
    @include fontSize(34px);
    @include gradientText($gradient5);

    @include respondTo(md) {
      line-height: 120px;
      @include fontSize(96px);
    }
  }

  &__subhead {
    display: block;
    font-weight: 500;
    line-height: 51px;
    @include fontSize(34px);
    @include gradientText($gradient2);

    @include respondTo(md) {
      font-weight: 400;
      line-height: 75px;
      @include fontSize(60px);
    }
  }

  &__content {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  &__img {
    float: right;
    max-width: 40%;

    @include respondTo(lg) {
      max-width: 30%;
    }
  }
}
</style>
