<template>
  <div :class="['BaseFileInput', { 'BaseFileInput--active': isDropping }]">
    <div v-if="files.length" class="BaseFileInput__list">
      <div v-for="file of files" :key="file.name" class="BaseFileInput__item">
        <span class="BaseFileInput__filename">
          {{ file.name }}
        </span>
        <button
          type="button"
          class="BaseFileInput__button"
          @click="removeFile(file)"
        >
          X
        </button>
      </div>
    </div>
    <label
      ref="dropArea"
      class="BaseFileInput__label"
      :for="id"
      @dragenter.prevent="handleDragEnter"
      @dragleave.prevent="handleDragLeave"
      @dragend.prevent="handleDragEnd"
      @drop.prevent="handleDrop"
      @dragover.prevent
    >
      <Icon name="upload" />
      <input
        :id="id"
        :name="name"
        multiple
        type="file"
        class="BaseFileInput__input"
        @change="handleFileChange"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseFileInput',
  model: {
    prop: 'files',
    event: 'update',
  },
  props: {
    id: { type: String, require: true },
    files: { type: Array, require: true },
    name: { type: String, require: true },
  },
  data() {
    return {
      isDropping: false,
    }
  },
  computed: {
    isTextarea() {
      return this.type === 'textarea'
    },
  },
  methods: {
    handleDragEnter() {
      this.isDropping = true
    },
    handleDragLeave(e) {
      const { dropArea } = this.$refs

      if (dropArea === e.target) this.isDropping = false
    },
    handleDragEnd() {
      this.isDropping = false
    },
    handleDrop(e) {
      const files = Array.from(e.dataTransfer.files)
      this.updateValue(files)
      this.isDropping = false
    },
    handleFileChange(e) {
      const files = Array.from(e.target.files)
      this.updateValue(files)
    },
    removeFile(fileToRemove) {
      const newFileList = this.files.filter(
        (file) =>
          file.name !== fileToRemove.name &&
          file.lastModified !== fileToRemove.lastModified
      )
      this.updateValue(newFileList)
    },
    updateValue(files) {
      this.$emit('update', files)
    },
  },
}
</script>

<style lang="scss">
.BaseFileInput {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  gap: 8px;
  border: 1px solid #8bc6e3;
  border-radius: 4px;
  border-style: dashed;

  &--active {
    background-color: rgba(#8bc6e3, 0.3);
  }

  &__list {
    flex: 100;
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    gap: 4px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    gap: 4px;
  }

  &__filename {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__button {
    border-radius: 4px;
    cursor: pointer;
  }

  &__label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
    cursor: pointer;

    & * {
      cursor: pointer;
    }
  }

  &__input {
    display: none !important;
  }
}
</style>
