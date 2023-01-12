<template>
  <div class="c-attach-upload">
    <BoxAttach
      v-if="uploadFiles.length > 0"
      class="_mb-8"
      :listFile="uploadFiles"
      @delete="handleDeleteFile"
    />
    <input
      ref="inputRef"
      class="c-attach-upload__input"
      type="file"
      multiple
      @change="handleFileChange"
    />
    <ButtonText
      type="button"
      styles="purple"
      size="sm"
      radius="radius-22"
      text="ファイルを選択する"
      :isDisabled="uploadFiles.length >= maxFile"
      @action="openFileUpload"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AttachUpload',
  props: {
    maxFile: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const inputRef = ref(null)
    const uploadFiles = ref([])

    const openFileUpload = () => {
      inputRef.value.click()
    }

    const handleFileChange = () => {
      Array.from(inputRef.value.files).forEach((file) => {
        if (uploadFiles.value.length >= props.maxFile) return
        uploadFiles.value.push({
          text: file.name,
          hasIcon: true,
        })
      })
    }

    const handleDeleteFile = (index) => {
      uploadFiles.value.splice(index, 1)
    }

    return {
      props,
      inputRef,
      uploadFiles,
      openFileUpload,
      handleDeleteFile,
      handleFileChange,
    }
  },
}
</script>
