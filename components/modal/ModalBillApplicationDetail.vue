<template>
  <Transition name="modal-application">
    <div
      v-if="isShow"
      class="c-modal-application"
      @click="handleModalBackdropClose"
    >
      <div ref="modalRef" class="c-modal-application__wrapper">
        <div class="c-modal-application__container">
          <div class="c-modal-application__header">
            <div class="c-modal-application__title">
              <TextDefault tag="h2" fontSize="20" isBold
                >子申請として作成する届出を選択してください</TextDefault
              >
            </div>
            <div class="c-modal-application__close">
              <LinkItem
                iconName="close_gray"
                text="閉じる"
                hasNoUnderline
                color="gray"
                href="#"
                @click="$emit('close')"
              />
            </div>
          </div>
          <div class="c-modal-application__body">
            <div class="list-application">
              <div>
                <ButtonIcon text="作業届" styles="purple" />
                <TextDefault class="_mt-16" lineHeight="1.625">
                  説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。
                </TextDefault>
              </div>
              <div>
                <ButtonIcon text="火器使用届" styles="purple" />
                <TextDefault class="_mt-16" lineHeight="1.625">
                  説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。
                </TextDefault>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'
export default {
  name: 'ModalBillApplicationDetail',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const modalRef = ref(null)
    const isCheckedAll = ref(false)
    const selectedData = ref([])
    const employee = reactive({
      listBuilding: [
        'PMO EX 日本橋茅場町',
        'PMO日本橋大伝馬町',
        'PMO 新日本橋',
      ],
      total: '4',
      page: '1-4',
      buildingData: [
        { id: '1', building: 'PMO EX 日本橋茅場町' },
        { id: '2', building: 'PMO日本橋大伝馬町' },
        { id: '3', building: 'PMO 新日本橋' },
        { id: '4', building: 'PMO 新日本橋新日本橋新日本橋新日本橋' },
      ],
    })

    const handleModalBackdropClose = (e) => {
      if (e.target.className === modalRef.value?.className) {
        emit('close')
      }
    }

    const handleChecked = ($event, id) => {
      const index = selectedData.value.indexOf(id)

      if (index > -1) {
        selectedData.value.splice(index, 1)
      } else {
        selectedData.value.push(id)
      }

      isCheckedAll.value =
        selectedData.value.length === employee.buildingData.length
    }

    const handleCheckedAll = () => {
      isCheckedAll.value = !isCheckedAll.value

      if (isCheckedAll.value) {
        selectedData.value = employee.buildingData.map((user) => user.id)
      } else {
        selectedData.value = []
      }
    }

    onMounted(() => {
      if (props.isShow) {
        document.body.classList.add('body-fixed')
      }
    })

    const handleDeleteResult = (list, index) => {
      list.splice(index, 1)
    }

    return {
      props,
      modalRef,
      isCheckedAll,
      selectedData,
      employee,
      handleModalBackdropClose,
      handleDeleteResult,
      handleChecked,
      handleCheckedAll,
    }
  },
  watch: {
    isShow() {
      document.body.classList.toggle('body-fixed')
    },
  },
}
</script>
