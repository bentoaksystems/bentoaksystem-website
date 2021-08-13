<template>
  <form class="LetsGetInTouchForm" @submit.prevent="onSubmit">
    <BaseInput
      v-model="fname"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--fname"
      type="text"
      name="fname"
      :label="$t('forms.fname')"
      :invalid="$v.fname.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <BaseInput
      v-model="surname"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--surname"
      type="text"
      name="surname"
      :label="$t('forms.surname')"
      :invalid="$v.surname.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <BaseInput
      v-model="email"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--email"
      type="email"
      :label="$t('forms.email')"
      :invalid="$v.email.$anyError"
      :message="emailErrorMessage"
      name="email"
      required
    />
    <BaseInput
      v-model="phone"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--phone"
      type="text"
      name="phone"
      :label="$t('forms.phone')"
    />
    <BaseInput
      v-model="company"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--company"
      type="text"
      name="company"
      :label="$t('forms.company')"
    />
    <BaseInput
      v-model="role"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--role"
      type="text"
      name="role"
      :label="$t('forms.role')"
    />
    <BaseInput
      v-model="interests"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--interests"
      type="text"
      name="interests"
      :label="$t('forms.interests')"
    />
    <BaseInput
      v-model="inquiry"
      class="LetsGetInTouchForm__input LetsGetInTouchForm__input--inquiry"
      type="textarea"
      name="inquiry"
      :label="$t('forms.inquiry')"
      :invalid="$v.inquiry.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <div class="LetsGetInTouchForm__submitBox">
      <BaseButton class="LetsGetInTouchForm__submitBtn">
        {{ $t('forms.send') }}
      </BaseButton>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

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
  computed: {
    emailErrorMessage() {
      return this.$v.email.email
        ? this.$t('forms.errors.required')
        : this.$t('forms.errors.email')
    },
  },
  validations: {
    fname: { required },
    surname: { required },
    email: { required, email },
    inquiry: { required },
  },
  methods: {
    onSubmit() {
      // ToDo connect to api / add submit validation
      this.$v.$touch()
      if (this.$v.$invalid) return

      console.log(this)
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
