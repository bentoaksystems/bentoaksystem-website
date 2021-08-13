<template>
  <transition name="fade">
    <div v-if="show" class="FormSuccessMessage">
      <span class="FormSuccessMessage__main">
        {{ messageMain }}
      </span>
      <span class="FormSuccessMessage__sub">
        {{ messageSub }}
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FormSuccessMessage',
  props: {
    show: { type: Boolean, default: false },
    messageMain: { type: String },
    messageSub: { type: String },
  },
}
</script>

<style lang="scss" scope>
.FormSuccessMessage {
  text-align: center;
  font-weight: 500;
  @include gradientText($gradient3);

  &__main {
    display: block;
  }

  &__sub {
    @include fontSize(14px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
