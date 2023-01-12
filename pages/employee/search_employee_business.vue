<template>
  <LayoutDefault pageTitle="従業員管理" isUserMenuOpen :current="3">
    <ModalEmployeeSearchCompany
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
    <div class="l-section-default">
      <div class="l-section-default__in _pt-3">
        <ButtonText text="Toggle Modal" @click="isModalOpen = true" />
      </div>
    </div>
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
  head: { title: 'テナント従業員管理_検索・一覧' },
}
</script>
