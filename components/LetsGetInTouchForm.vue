<template>
  <form class="LetsGetInTouchForm" @submit.prevent="onSubmit">
    <div v-show="isDesktop" class="LetsGetInTouchForm__desktopForm">
      <BaseInput
        v-for="input of inputs"
        :key="input.name"
        v-model="form[input.name]"
        :class="[
          'LetsGetInTouchForm__input',
          `LetsGetInTouchForm__input--${input.name}`,
        ]"
        v-bind="input"
      />
      <div class="LetsGetInTouchForm__submitBox">
        <FormSuccessMessage
          :show="sentSuccessfully"
          :message-main="$t('forms.submitMessage1')"
          :message-sub="$t('forms.submitMessage2')"
        />
        <BaseButton class="LetsGetInTouchForm__submitBtn" :disabled="apiAtWork">
          {{ $t('forms.send') }}
        </BaseButton>
      </div>
    </div>
    <div v-show="!isDesktop" class="LetsGetInTouchForm__mobileForm">
      <agile v-bind="carouselOptions" ref="formCarousel">
        <div
          v-for="(slide, index) of mobileInputs"
          :key="index"
          class="LetsGetInTouchForm__slide"
        >
          <BaseInput
            v-for="input of slide"
            :key="input.name"
            v-model="form[input.name]"
            :class="[
              'LetsGetInTouchForm__input',
              `LetsGetInTouchForm__input--${input.name}`,
            ]"
            v-bind="input"
          />
          <div
            v-if="index < mobileInputs.length - 1"
            class="LetsGetInTouchForm__nextBtnBox"
          >
            <BaseButton
              class="LetsGetInTouchForm__nextBtn"
              type="button"
              @click="$refs.formCarousel.goToNext()"
            >
              {{ $t('forms.next') }}
            </BaseButton>
          </div>
          <div
            v-if="index === mobileInputs.length - 1"
            class="LetsGetInTouchForm__submitBox"
          >
            <FormSuccessMessage
              :show="sentSuccessfully"
              :message-main="$t('forms.submitMessage1')"
              :message-sub="$t('forms.submitMessage2')"
            />
            <BaseButton
              class="LetsGetInTouchForm__submitBtn"
              :disabled="apiAtWork"
            >
              {{ $t('forms.send') }}
            </BaseButton>
          </div>
        </div>
      </agile>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { db } from '~/firestore-service'
export default {
  name: 'LetsGetInTouchForm',
  data() {
    return {
      form: {
        fname: '',
        surname: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        interests: '',
        inquiry: '',
      },
      sentSuccessfully: false,
      apiAtWork: false,
    }
  },
  computed: {
    inputs() {
      return [
        this.makeInputObj(
          'fname',
          'text',
          this.$t('forms.fname'),
          this.$v.form.fname.$anyError,
          this.$t('forms.errors.required'),
          true
        ),
        this.makeInputObj(
          'surname',
          'text',
          this.$t('forms.surname'),
          this.$v.form.surname.$anyError,
          this.$t('forms.errors.required'),
          true
        ),
        this.makeInputObj(
          'email',
          'email',
          this.$t('forms.email'),
          this.$v.form.email.$anyError,
          this.emailErrorMessage,
          true
        ),
        this.makeInputObj('phone', 'text', this.$t('forms.phone')),
        this.makeInputObj('company', 'text', this.$t('forms.company')),
        this.makeInputObj('role', 'text', this.$t('forms.role')),
        this.makeInputObj('interests', 'text', this.$t('forms.interests')),
        this.makeInputObj(
          'inquiry',
          'textarea',
          this.$t('forms.inquiry'),
          this.$v.form.inquiry.$anyError,
          this.$t('forms.errors.required'),
          true
        ),
      ]
    },
    mobileInputs() {
      const [fname, surname, email, phone, company, role, interests, inquiry] =
        this.inputs

      return [
        [fname, surname, email],
        [phone, company, role, interests],
        [inquiry],
      ]
    },
    isDesktop() {
      return this.$screen.md
    },
    carouselOptions() {
      return {
        navButtons: false,
        infinite: false,
      }
    },
    emailErrorMessage() {
      return this.$v.form.email.email
        ? this.$t('forms.errors.required')
        : this.$t('forms.errors.email')
    },
  },
  validations: {
    form: {
      fname: { required },
      surname: { required },
      email: { required, email },
      inquiry: { required },
    },
  },
  methods: {
    onSubmit() {
      // ToDo connect to api / add submit validation
      this.$v.$touch()
      if (this.$v.$invalid) return

      db.collection('inquiry')
        .add(this.$v.form.$model)
        .then(() => (this.sentSuccessfully = true))
        .catch((e) => {
          console.error(e)
          this.sentSuccessfully = false
        })
        .finally(() => {
          setTimeout(() => {
            this.sentSuccessfully = false
          }, 3000)
        })
    },
    makeInputObj(name, type, label, invalid, message, required) {
      return {
        name,
        type,
        label,
        invalid,
        message,
        required,
      }
    },
  },
}
</script>

<style lang="scss">
.LetsGetInTouchForm {
  &__desktopForm {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;
    row-gap: 20px;

    @include respondTo(md) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 24px;
    }
  }

  &__mobileForm {
    .agile__actions {
      display: none;
    }
  }

  &__slide {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__input {
    &--inquiry {
      grid-row-end: span 2;
    }
  }

  &__nextBtnBox {
    display: flex;
    justify-content: center;
    align-items: center;
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
