<template>
  <form class="SomethingElseForm" @submit.prevent="onSubmit">
    <BaseInput
      v-model="fname"
      class="SomethingElseForm__input"
      type="text"
      name="fname"
      :label="$t('forms.fname')"
      :invalid="$v.fname.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <BaseInput
      v-model="surname"
      class="SomethingElseForm__input"
      type="text"
      name="surname"
      :label="$t('forms.surname')"
      :invalid="$v.surname.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <BaseInput
      v-model="email"
      class="SomethingElseForm__input"
      type="email"
      :label="$t('forms.email')"
      :invalid="$v.email.$anyError"
      :message="emailErrorMessage"
      name="email"
      required
    />
    <BaseInput
      v-model="phone"
      class="SomethingElseForm__input"
      type="text"
      name="phone"
      :label="$t('forms.phone')"
    />
    <BaseInput
      v-model="regarding"
      class="SomethingElseForm__input"
      type="text"
      name="regarding"
      :label="$t('forms.regarding')"
    />
    <BaseInput
      v-model="inquiry"
      class="SomethingElseForm__input SomethingElseForm__input--inquiry"
      type="textarea"
      name="inquiry"
      :label="$t('forms.inquiry')"
      :invalid="$v.inquiry.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <div class="SomethingElseForm__submitBox">
      <FormSuccessMessage
        :show="sentSuccessfully"
        :message-main="$t('forms.submitMessage1')"
        :message-sub="$t('forms.submitMessage2')"
      />
      <BaseButton class="SomethingElseForm__submitBtn">
        {{ $t('forms.send') }}
      </BaseButton>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'SomethingElseForm',
  data() {
    return {
      fname: '',
      surname: '',
      email: '',
      phone: '',
      regarding: '',
      inquiry: '',
      sentSuccessfully: false,
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
      this.$v.$touch()
      if (this.$v.$invalid) return

      // ToDo connect to api
      this.sentSuccessfully = true
      setTimeout(() => {
        this.sentSuccessfully = false
      }, 3000)
    },
  },
}
</script>

<style lang="scss">
.SomethingElseForm {
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
