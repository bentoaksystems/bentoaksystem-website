<template>
  <div class="TY">
    <div class="TY__header">
      <button class="TY__closeButton" v-on:click="goBack()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="TY__message">
      <div class="TY__message__logo"><Logo /></div>
      <h1>{{ $t('thankYou.title') }}</h1>
      <p>{{ $t('thankYou.message') }}</p>
    </div>
    <div class="TY__footer"></div>
  </div>
</template>

<script>
export default {
  layout: 'ThankYou',
  methods: {
    goBack: () => {window.history.go(-1)}
  },
}
</script>

<style lang="scss">
.TY {
  display: inline-block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  border: 0;
  padding: 0;
  margin: 0;

  &__header {
    width: 100vw;
    height: 20vh;
    background: url('./assets/images/footerBG.png') no-repeat;
    transform: rotate(180deg);
    background-size: cover;
    background-position-x: center;
    position: fixed;
    top: 0;
  }
  &__closeButton {
    background: transparent;
    width: 7vh;
    height: 7vh;
    position: fixed;
    top: 7vh;
    left: 7vh;
    font-size: 4vh;
    color: #00000088;
  }
  &__footer {
    width: 100vw;
    height: 20vh;
    background: url('./assets/images/footerBG.png') no-repeat;
    background-size: cover;
    background-position-x: center;
    position: fixed;
    transform: scaleX(-1);
    top: 80vh;
  }
  &__message {
    position: fixed;
    width: min(50vh, 100vw);
    height: min(50vh, 100vw);
    top: calc((100vh - min(50vh, 100vw)) / 2);
    left: calc((100vw - min(50vh, 100vw)) / 2);
    color: black;
    display: block;
    text-align: center;
    align-items: center;
    &__logo {
      width: 100%;
      text-align: center;
      img {
        display: inline;
      }
    }
    h1 {
      margin-top: 5vh;
      font-size: 5vh;
      color: black;
    }
    p {
      margin-top: 2.5vh;
      font-size: 2vh;
      color: black;
    }
  }
}
</style>
