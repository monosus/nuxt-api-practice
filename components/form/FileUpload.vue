<template>
  <div class="c-file-upload">
    <div
      class="c-file-upload__area"
      @dragover.stop.prevent
      @drop.stop.prevent="handleDrop"
    >
      <div class="c-file-upload__area-in">
        <img
          class="c-file-upload__icon"
          src="@/assets/image/common/ico_upload.svg"
          width="64"
          height="64"
          decoding="async"
          alt=""
        />
        <TextDefault tag="p" fontSize="16" isBold>
          このエリアにファイルをドロップ
        </TextDefault>
        <TextDefault class="_mt-15" tag="p" fontSize="14" isBold>
          または
        </TextDefault>
        <ButtonText
          class="_mt-18"
          size="lg"
          text="ファイルを選択する"
          :styles="selectedFile.length >= 3 ? 'black' : 'outline-purple'"
          :isDisabled="selectedFile.length >= 3"
          @action="openFileUpload"
        />
        <p class="c-file-upload__max">
          1度に最大3ファイル、計{{ maxSize }}MBまで選択できます。<br />
          3ファイルを超える場合は圧縮ファイルにまとめてアップロードください。
        </p>
        <input
          ref="inputRef"
          class="c-file-upload__input"
          type="file"
          multiple
          @change="handleFileChange"
        />
      </div>
    </div>

    <div class="c-file-upload__info" :class="isError && '-is-error'">
      <div class="c-file-upload__info-in">
        <p class="c-file-upload__info-title">選択中のファイル</p>
        <div class="c-file-upload__file">
          <ul v-if="selectedFile?.length > 0" class="c-file-upload__list">
            <li
              v-for="(file, index) in selectedFile"
              :key="index"
              class="c-file-upload__item"
            >
              <p class="c-file-upload__inner">
                {{ file.name }}
                <i
                  class="c-file-upload__delete"
                  @click="handleDeleteFile(index)"
                />
              </p>
            </li>
          </ul>
          <p v-else class="c-file-upload__before">
            選択中のファイルはまだありません
          </p>
        </div>
      </div>
    </div>
    <TextDefault v-if="isError" fontSize="14" color="red" class="_mt-4">
      エラーメッセージが入ります
    </TextDefault>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FileUpload',
  props: {
    maxSize: {
      type: [String, Number],
      default: '0000',
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const inputRef = ref(null)
    const selectedFile = ref([])

    const openFileUpload = () => {
      inputRef.value.click()
    }

    const handleFileChange = () => {
      Array.from(inputRef.value.files).forEach((file) => {
        if (selectedFile.value.length >= 3) return
        selectedFile.value.push(file)
      })
      inputRef.value.value = null
      emit('select', selectedFile.value)
    }

    const handleDrop = (e) => {
      inputRef.value.files = e.dataTransfer.files
      handleFileChange()
    }

    const handleDeleteFile = (index) => {
      selectedFile.value.splice(index, 1)
      emit('select', selectedFile.value)
    }

    return {
      props,
      inputRef,
      selectedFile,
      openFileUpload,
      handleDrop,
      handleFileChange,
      handleDeleteFile,
    }
  },
}
</script>
