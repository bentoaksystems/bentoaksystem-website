<template>
  <Container tag="section" class="SomethingElse">
    <GradientBorder class="SomethingElse__container">
      <h3 class="SomethingElse__title">
        {{ $t('forms.somethingElse.title') }}
        <span class="SomethingElse__sub">
          {{ $t('forms.somethingElse.sub') }}
        </span>
      </h3>
      <SomethingElseForm />
    </GradientBorder>
  </Container>
</template>

<script>
export default {
  name: 'SomethingElse',
}
</script>

<style lang="scss">
.SomethingElse {
  &__container {
    padding: 24px 12px 30px;

    @include addSpecificity {
      border-radius: 8px;
    }

    &::before {
      margin: -1px;
      background: $gradientForm;
    }

    @include respondTo(md) {
      padding: 68px 80px 108px;

      @include addSpecificity {
        border-radius: 16px;
      }
    }
  }

  &__title {
    @include gradientText($gradient2);
    @include fontSize(34px);
    font-weight: 500;
    text-align: center;
    margin-bottom: 34px;

    @include respondTo(md) {
      @include fontSize(48px);
      margin-bottom: 160px;
    }
  }

  &__sub {
    display: block;

    @include respondTo(md) {
      @include fontSize(34px);
    }
  }
}
</style>
