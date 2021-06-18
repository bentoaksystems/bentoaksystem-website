<template>
  <form class="LetsGetInTouchForm" @submit.prevent="onSubmit">
    <BaseInput
      v-model="fname"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--fname"
      type="text"
      name="fname"
      label="First Name"
      required
    />
    <BaseInput
      v-model="surname"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--surname"
      type="text"
      name="surname"
      label="Surname"
      required
    />
    <BaseInput
      v-model="email"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--email"
      type="email"
      name="email"
      label="Email"
      required
    />
    <BaseInput
      v-model="phone"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--phone"
      type="text"
      name="phone"
      label="Phone"
    />
    <BaseInput
      v-model="company"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--company"
      type="text"
      name="company"
      label="Company Name"
    />
    <BaseInput
      v-model="role"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--role"
      type="text"
      name="role"
      label="Role"
    />
    <BaseInput
      v-model="interests"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--interests"
      type="text"
      name="interests"
      label="Interested In"
    />
    <BaseInput
      v-model="inquiry"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--inquiry"
      type="textarea"
      name="inquiry"
      label="Inquiry"
      required
    />
    <div class="LetsGetInTouchForm__submitBox">
      <BaseButton class="LetsGetInTouchForm__submitBtn">Send</BaseButton>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LetsGetInTouchForm',
  data() {
    return {
      fname: '',
      surname: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      interests: '',
      inquiry: '',
    }
  },
  methods: {
    onSubmit(event) {
      // ToDo connect to api / add submit validation
      console.log(event)
    },
  },
}
</script>

<style lang="scss">
.LetsGetInTouchForm {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 20px;

  @include respondTo(md) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }

  &__input {
    &--inquiry {
      grid-row-end: span 2;
    }
  }

  &__submitBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
  }

  &__submitBtn {
    margin-top: auto;
    padding: 12px 56px;
  }
}
</style>
