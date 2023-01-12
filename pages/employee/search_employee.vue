<template>
  <LayoutDefault pageTitle="従業員管理" isUserMenuOpen :current="3">
    <ModalEmployeeSearch :isShow="isModalOpen" @close="isModalOpen = false" />
  </LayoutDefault>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_検索・一覧' })
    const isModalOpen = ref(true)
    return { isModalOpen }
  },
}
</script>
