<template>
  <form class="NewCareerForm" @submit.prevent="onSubmit">
    <BaseInput
      v-model="fname"
      class="NewCareerForm__input"
      type="text"
      name="fname"
      :label="$t('forms.fname')"
      :invalid="$v.fname.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <BaseInput
      v-model="surname"
      class="NewCareerForm__input"
      type="text"
      name="surname"
      :label="$t('forms.surname')"
      :invalid="$v.surname.$anyError"
      :message="$t('forms.errors.required')"
      required
    />
    <BaseInput
      v-model="email"
      class="NewCareerForm__input"
      type="email"
      :label="$t('forms.email')"
      :invalid="$v.email.$anyError"
      :message="emailErrorMessage"
      name="email"
      required
    />
    <BaseInput
      v-model="phone"
      class="NewCareerForm__input"
      type="text"
      name="phone"
      :label="$t('forms.phone')"
    />
    <BaseInput
      v-model="specialty"
      class="NewCareerForm__input"
      type="text"
      name="specialty"
      :label="$t('forms.specialty')"
    />
    <BaseInput
      v-model="files"
      class="NewCareerForm__input NewCareerForm__input--files"
      type="file"
      name="files"
      :label="$t('forms.files')"
    />
    <div class="NewCareerForm__submitBox">
      <FormSuccessMessage
        :show="sentSuccessfully"
        :message-main="$t('forms.submitMessage1')"
        :message-sub="$t('forms.submitMessage2')"
      />
      <BaseButton class="NewCareerForm__submitBtn">
        {{ $t('forms.sendRequest') }}
      </BaseButton>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'NewCareerForm',
  data() {
    return {
      fname: '',
      surname: '',
      email: '',
      phone: '',
      specialty: '',
      files: [],
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
.NewCareerForm {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 20px;

  @include respondTo(md) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }

  &__input {
    &--files {
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
