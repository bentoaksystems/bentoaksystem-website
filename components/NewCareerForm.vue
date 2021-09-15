<template>
  <form class="NewCareerForm" @submit.prevent="onSubmit">
    <div v-show="isDesktop" class="NewCareerForm__desktopForm">
      <BaseInput
        v-for="input of inputs"
        :key="input.name"
        v-model="form[input.name]"
        :class="['NewCareerForm__input', `NewCareerForm__input--${input.name}`]"
        v-bind="input"
      />
      <div class="NewCareerForm__submitBox">
        <FormSuccessMessage
          :show="sentSuccessfully"
          :message-main="$t('forms.submitMessage1')"
          :message-sub="$t('forms.submitMessage2')"
        />
        <BaseButton class="NewCareerForm__submitBtn" :disabled="apiAtWork">
          {{ $t('forms.sendRequest') }}
        </BaseButton>
      </div>
    </div>
    <div v-show="!isDesktop" class="NewCareerForm__mobileForm">
      <agile v-bind="carouselOptions" ref="formCarousel">
        <div
          v-for="(slide, index) of mobileInputs"
          :key="index"
          class="NewCareerForm__slide"
        >
          <BaseInput
            v-for="input of slide"
            :key="input.name"
            v-model="form[input.name]"
            :class="[
              'NewCareerForm__input',
              `NewCareerForm__input--${input.name}`,
            ]"
            v-bind="input"
          />
          <div
            v-if="index < mobileInputs.length - 1"
            class="NewCareerForm__nextBtnBox"
          >
            <BaseButton
              class="NewCareerForm__nextBtn"
              type="button"
              @click="$refs.formCarousel.goToNext()"
            >
              {{ $t('forms.next') }}
            </BaseButton>
          </div>
          <div
            v-if="index === mobileInputs.length - 1"
            class="NewCareerForm__submitBox"
          >
<!--            <FormSuccessMessage-->
<!--              :show="sentSuccessfully"-->
<!--              :message-main="$t('forms.submitMessage1')"-->
<!--              :message-sub="$t('forms.submitMessage2')"-->
<!--            />-->
            <BaseButton class="NewCareerForm__submitBtn" :disabled="apiAtWork">
              {{ $t('forms.sendRequest') }}
            </BaseButton>
          </div>
        </div>
      </agile>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import {
  db,
  fileStorage,
  TaskState,
  Timestamp,
  timestamped,
} from '~/firestore-service'

export default {
  name: 'NewCareerForm',
  data() {
    return {
      form: {
        fname: '',
        surname: '',
        email: '',
        phone: '',
        specialty: '',
        files: [],
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
        this.makeInputObj('specialty', 'text', this.$t('forms.specialty')),
        this.makeInputObj('files', 'file', this.$t('forms.files')),
      ]
    },
    mobileInputs() {
      const [fname, surname, email, phone, specialty, files] = this.inputs

      return [[fname, surname, email], [phone, specialty], [files]]
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
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      const formData = this.$v.form.$model
      const files = formData.files
      delete formData.files
      this.apiAtWork = true
      const resumeRef = db.collection('resume').doc()
      resumeRef
        .set(timestamped(formData))
        .then(() => {
          if (files.length) {
            const upload = fileStorage
              .ref(
                'resumes/' +
                  formData.fname +
                  '_' +
                  formData.surname +
                  '_' +
                  Timestamp.now().toMillis()
              )
              .put(files[0])
            upload.on(
              TaskState.STATE_CHANGED,
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
              },
              (err) => {
                console.error(err)
                this.apiAtWork = false
                window.location.href = './ThankYou'
              },
              async () => {
                await resumeRef.update({
                  path: await upload.snapshot.ref.getDownloadURL(),
                })
                this.apiAtWork = false
              }
            )
          } else {
            this.apiAtWork = false
            window.location.href = './ThankYou'
          }
        })
        .catch((e) => console.error(e))
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
.NewCareerForm {
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
    &--files {
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
