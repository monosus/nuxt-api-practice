<template>
  <div class="c-image-upload">
    <ListThumbnail
      v-if="uploadImages.length > 0"
      class="_mb-8"
      :imgUploads="uploadImages"
      @delete="handleDeleteImage"
    />
    <input
      ref="inputRef"
      class="c-image-upload__input"
      type="file"
      accept="image/png, image/gif, image/jpeg"
      :multiple="isMultiple || null"
      @change="handleFileChange"
    />
    <ButtonText
      type="button"
      styles="purple"
      size="sm"
      radius="radius-22"
      text="ファイルを選択する"
      :isDisabled="
        (!isMultiple && uploadImages.length > 0) ||
        (isMultiple && uploadImages.length >= maxFile)
      "
      @action="openFileUpload"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ImageUpload',
  props: {
    isMultiple: {
      type: Boolean,
      default: false,
    },
    maxFile: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const inputRef = ref(null)
    const uploadImages = ref([])

    const openFileUpload = () => {
      inputRef.value.click()
    }

    const handleFileChange = () => {
      if (props.isMultiple) {
        Array.from(inputRef.value.files).forEach((file) => {
          if (uploadImages.value.length >= props.maxFile) return
          uploadImages.value.push({
            src: URL.createObjectURL(file),
            hasIcon: true,
          })
        })
      } else {
        uploadImages.value = [
          {
            src: URL.createObjectURL(inputRef.value.files[0]),
            hasIcon: true,
          },
        ]
      }
    }

    const handleDeleteImage = (index) => {
      URL.revokeObjectURL(uploadImages.value[index].src)
      uploadImages.value.splice(index, 1)
    }

    return {
      props,
      inputRef,
      uploadImages,
      openFileUpload,
      handleFileChange,
      handleDeleteImage,
    }
  },
}
</script>
