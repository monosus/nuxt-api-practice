<template>
  <div class="c-csv-upload">
    <div
      class="c-csv-upload__area"
      @dragover.stop.prevent
      @drop.stop.prevent="handleDrop"
    >
      <div class="c-csv-upload__area-in">
        <img
          class="c-csv-upload__icon"
          src="@/assets/image/common/ico_upload.svg"
          width="64"
          height="64"
          decoding="async"
          alt=""
        />
        <TextDefault tag="p" fontSize="16" isBold>
          このエリアにCSVファイルをドロップ
        </TextDefault>
        <TextDefault class="_mt-15" tag="p" fontSize="14" isBold>
          または
        </TextDefault>
        <ButtonText
          class="_mt-15"
          text="CSVファイルを選択する"
          styles="outline-purple"
          @action="openFileUpload"
        />
        <p class="c-csv-upload__max">
          1度に1ファイルのみ、{{ maxSize }}MBまで選択できます。
        </p>
        <input
          ref="inputRef"
          class="c-csv-upload__input"
          type="file"
          accept=".csv"
          @change="handleFileChange"
        />
      </div>
    </div>

    <div
      class="c-csv-upload__info"
      :class="{ '-active': selectedFile?.length > 0 }"
    >
      <div class="c-csv-upload__info-in">
        <p>選択中のファイル</p>
        <div class="c-csv-upload__file">
          <span>{{
            selectedFile?.length > 0 ? selectedFile[0].name : '未選択'
          }}</span>
          <template v-if="selectedFile?.length > 0">
            <button class="c-csv-upload__close" @click="handleDeleteFile" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CsvUpload',
  props: {
    maxSize: {
      type: [String, Number],
      default: '0000',
    },
  },
  setup(props, { emit }) {
    const inputRef = ref(null)
    const selectedFile = ref(null)

    const openFileUpload = () => {
      inputRef.value.click()
    }

    const handleFileChange = () => {
      selectedFile.value =
        inputRef.value?.files?.length > 0 ? inputRef.value.files : null
      emit('select', selectedFile.value)
    }

    const handleDrop = (e) => {
      inputRef.value.files = e.dataTransfer.files
      handleFileChange()
    }

    const handleDeleteFile = () => {
      inputRef.value.value = null
      handleFileChange()
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
