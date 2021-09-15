<template>
  <form class="SomethingElseForm" @submit.prevent="onSubmit">
    <div v-show="isDesktop" class="SomethingElseForm__desktopForm">
      <BaseInput
        v-model="form.fname"
        class="SomethingElseForm__input"
        type="text"
        name="fname"
        :label="$t('forms.fname')"
        :invalid="$v.form.fname.$anyError"
        :message="$t('forms.errors.required')"
        required
      />
      <BaseInput
        v-model="form.surname"
        class="SomethingElseForm__input"
        type="text"
        name="surname"
        :label="$t('forms.surname')"
        :invalid="$v.form.surname.$anyError"
        :message="$t('forms.errors.required')"
        required
      />
      <BaseInput
        v-model="form.email"
        class="SomethingElseForm__input"
        type="email"
        :label="$t('forms.email')"
        :invalid="$v.form.email.$anyError"
        :message="emailErrorMessage"
        name="email"
        required
      />
      <BaseInput
        v-model="form.phone"
        class="SomethingElseForm__input"
        type="text"
        name="phone"
        :label="$t('forms.phone')"
      />
      <BaseInput
        v-model="form.regarding"
        class="SomethingElseForm__input"
        type="text"
        name="regarding"
        :label="$t('forms.regarding')"
      />
      <BaseInput
        v-model="form.inquiry"
        class="SomethingElseForm__input SomethingElseForm__input--inquiry"
        type="textarea"
        name="inquiry"
        :label="$t('forms.inquiry')"
        :invalid="$v.form.inquiry.$anyError"
        :message="$t('forms.errors.required')"
        required
      />
      <div class="SomethingElseForm__submitBox">
        <FormSuccessMessage
          :show="sentSuccessfully"
          :message-main="$t('forms.submitMessage1')"
          :message-sub="$t('forms.submitMessage2')"
        />
        <BaseButton class="SomethingElseForm__submitBtn" :disabled="apiAtWork">
          {{ $t('forms.send') }}
        </BaseButton>
      </div>
    </div>
    <div v-show="!isDesktop" class="SomethingElseForm__mobileForm">
      <agile v-bind="carouselOptions" ref="formCarousel">
        <div
          v-for="(slide, index) of mobileInputs"
          :key="index"
          class="SomethingElseForm__slide"
        >
          <BaseInput
            v-for="input of slide"
            :key="input.name"
            v-model="form[input.name]"
            :class="[
              'SomethingElseForm__input',
              `SomethingElseForm__input--${input.name}`,
            ]"
            v-bind="input"
          />
          <div
            v-if="index < mobileInputs.length - 1"
            class="SomethingElseForm__nextBtnBox"
          >
            <BaseButton
              class="SomethingElseForm__nextBtn"
              type="button"
              @click="$refs.formCarousel.goToNext()"
            >
              {{ $t('forms.next') }}
            </BaseButton>
          </div>
          <div
            v-if="index === mobileInputs.length - 1"
            class="SomethingElseForm__submitBox"
          >
<!--            <FormSuccessMessage-->
<!--              :show="sentSuccessfully"-->
<!--              :message-main="$t('forms.submitMessage1')"-->
<!--              :message-sub="$t('forms.submitMessage2')"-->
<!--            />-->
            <BaseButton
              class="SomethingElseForm__submitBtn"
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
import { db, timestamped } from '~/firestore-service'

export default {
  name: 'SomethingElseForm',
  data() {
    return {
      form: {
        fname: '',
        surname: '',
        email: '',
        phone: '',
        regarding: '',
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
        this.makeInputObj('regarding', 'text', this.$t('forms.regarding')),
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
      const [fname, surname, email, phone, regarding, inquiry] = this.inputs

      return [[fname, surname, email], [phone, regarding], [inquiry]]
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
      this.$v.$touch()
      if (this.$v.$invalid) return

      db.collection('faq')
        .add(timestamped(this.$v.form.$model))
        .then(() => {
          this.sentSuccessfully = true
          window.location.href = './ThankYou'
        })
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
.SomethingElseForm {
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
