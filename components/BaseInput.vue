<template>
  <div class="BaseInput">
    <GradientBorder
      class="BaseInput__inputContainer"
      :class="{ 'BaseInput__inputContainer--fileInput': isFileInput }"
      nested
    >
      <BaseFileInput
        v-if="isFileInput"
        :id="id"
        :name="name"
        :files="value || []"
        @update="$emit('update', $event)"
      />
      <textarea
        v-else-if="isTextarea"
        :id="id"
        :value="value"
        :name="name"
        resize="none"
        class="BaseInput__input BaseInput__input--textarea"
        @input="$emit('update', $event.target.value)"
      />
      <input
        v-else
        :id="id"
        :value="value"
        :name="name"
        :type="isEmail ? 'text' : type"
        class="BaseInput__input"
        @input="$emit('update', $event.target.value)"
      />
      <component
        :is="isFileInput ? 'div' : 'label'"
        class="BaseInput__label"
        :for="id"
      >
        <span class="BaseInput__labelBG"></span>
        <span>{{ label }}</span>
        <span v-if="required" class="BaseInput__required">*</span>
      </component>
    </GradientBorder>
    <div v-if="invalid" class="BaseInput__message">{{ message }}</div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'BaseInput',
  model: {
    prop: 'value',
    event: 'update',
  },
  props: {
    value: { type: [String, Array], default: '', require: true },
    label: { type: String, require: true },
    required: { type: Boolean, default: false },
    name: { type: String, require: true },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        const whiteList = ['text', 'textarea', 'email', 'file']
        return whiteList.includes(value)
      },
    },
    invalid: { type: Boolean, default: false },
    message: { type: String },
  },
  computed: {
    id() {
      return uuidv4()
    },
    isTextarea() {
      return this.type === 'textarea'
    },
    isFileInput() {
      return this.type === 'file'
    },
    isEmail() {
      return this.type === 'email'
    },
  },
}
</script>

<style lang="scss">
.BaseInput {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 0 0;

  &__inputContainer {
    @include addSpecificity {
      border-width: 1px;
    }

    &::before {
      margin: -1px;
      background: $gradientForm;
    }

    &--fileInput {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }

  &__label {
    @include fontSize(16px);
    position: absolute;
    top: -12px;
    left: 22px;
    padding: 0 8px;
    color: $blue;
    line-height: 1;
    font-weight: 700;
    z-index: 1;

    @include respondTo(md) {
      @include fontSize(20px);
    }
  }

  &__labelBG {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $white;
    height: 4px;
    width: 100%;
    z-index: -1;
    box-shadow: $inputBoxShadow;
    transform-origin: center;
    transform: translateY(10px);
    transition: transform 200ms ease-in-out;

    input:focus + * > &,
    textarea:focus + * > & {
      transform: translateY(12px) scaleY(6);
    }
  }

  &__required {
    @include fontSize(24px);
    color: $red;
  }

  &__input {
    @include fontSize(16px);
    padding: 0 22px;
    height: 60px;
    width: 100%;
    font-weight: 500;
    border: none;

    &--textarea {
      display: block;
      resize: none;
      padding: 22px;
      height: 240px;
    }
  }

  &__message {
    padding: 2px 12px 0;
    color: $red;
    @include fontSize(14px);
  }
}
</style>
