<template>
  <LayoutDefault pageTitle="お知らせ管理" :current="1">
    <template #headerButton>
      <ButtonText href="#" text="お知らせ新規作成" styles="purple" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in _pt-20">
        <TextDefault class="_mt-15" tag="h2" color="gray" isBold>
          お知らせ検索
        </TextDefault>

        <div class="l-section-gray _mt-15">
          <form method="post" action="#">
            <div class="c-form-default">
              <div class="c-form-default__row">
                <FormColumn size="2b">
                  <FormGroup label="タイトル">
                    <InputText placeholder="サービス" />
                  </FormGroup>
                </FormColumn>
              </div>
              <div class="c-form-default__row">
                <FormColumn size="3b">
                  <FormGroup label="お知らせカテゴリ" space="lg">
                    <div class="c-list-input">
                      <InputCheckbox text="一般" />
                      <InputCheckbox text="イベント・セミナー" />
                      <InputCheckbox text="クーポン" />
                      <InputCheckbox text="ビル" />
                      <InputCheckbox text="システム" />
                    </div>
                  </FormGroup>
                </FormColumn>
              </div>
              <div class="c-form-default__row">
                <div class="c-form-calendar-column">
                  <div class="c-form-calendar-group">
                    <p class="c-form-group__label">期間</p>
                    <div class="c-form-group">
                      <ClientOnly>
                        <DatePicker
                          v-model="startDate"
                          locale="ja-JP"
                          mode="date"
                          :masks="{ L: 'YYYY/MM/DD' }"
                          :popover="{ visibility: 'focus' }"
                        >
                          <template #default="{ inputValue, inputEvents }">
                            <input
                              class="c-input-text -calendar"
                              :value="inputValue"
                              placeholder="日付を選択"
                              v-on="inputEvents"
                            />
                          </template>
                        </DatePicker>
                      </ClientOnly>
                      <span class="c-input-text__icon-calendar" />
                    </div>
                  </div>
                  <div class="c-form-calendar-group -has-tilde">
                    <div class="c-form-group">
                      <ClientOnly>
                        <DatePicker
                          v-model="endDate"
                          locale="ja-JP"
                          mode="date"
                          :masks="{ L: 'YYYY/MM/DD' }"
                          :popover="{ visibility: 'focus' }"
                        >
                          <template #default="{ inputValue, inputEvents }">
                            <input
                              class="c-input-text -calendar"
                              :value="inputValue"
                              placeholder="日付を選択"
                              v-on="inputEvents"
                            />
                          </template>
                        </DatePicker>
                      </ClientOnly>
                      <span class="c-input-text__icon-calendar" />
                    </div>
                  </div>
                  <div class="c-form-calendar-group">
                    <FormGroup label="公開区分">
                      <SelectBox
                        v-model="categoryValue"
                        :options="['すべて', '選択肢', '選択肢', '選択肢']"
                      />
                    </FormGroup>
                  </div>
                  <div class="c-form-calendar-group">
                    <FormGroup label="トップページでの掲載">
                      <SelectBox
                        v-model="showTopValue"
                        :options="['すべて', '選択肢', '選択肢', '選択肢']"
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <div class="c-form-default__row">
                <FormGroup label="ビル" space="md">
                  <div class="c-list-result">
                    <div
                      v-if="state.listBuilding.length > 0"
                      class="c-list-result__list"
                    >
                      <div
                        v-for="(item, index) in state.listBuilding"
                        :key="index"
                        class="c-list-result__item"
                      >
                        <ButtonResult
                          :text="item.text"
                          @delete="handleDeleteBuilding(index)"
                        />
                      </div>
                    </div>
                    <ButtonText
                      type="button"
                      text="選択する"
                      styles="purple"
                      radius="radius-22"
                      size="sm"
                      @action="openSearchBuildingModal"
                    />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div class="c-list-button -right _mt-40">
              <ButtonText
                text="条件をクリア"
                styles="outline-purple"
                type="reset"
                @action="handleFormReset"
              />
              <ButtonText text="上記の条件で検索" styles="purple" />
            </div>
          </form>
        </div>

        <div class="l-section-table">
          <TitleTable total="0" page="0" />
        </div>

        <div class="c-table-default -two-line">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 52px" />
              <col style="width: 336px" />
              <col style="width: 175px" />
              <col style="width: 108px" />
              <col style="width: 112px" />
              <col style="width: 194px" />
              <col style="width: 210px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th -sticky">
                  <InputCheckbox
                    :isChecked="isCheckedAll"
                    @action="handleCheckedAll"
                  />
                </th>
                <th class="c-table-default__th -descending">
                  <span>タイトル</span>
                </th>
                <th class="c-table-default__th"><span>カテゴリ</span></th>
                <th class="c-table-default__th"><span>公開日</span></th>
                <th class="c-table-default__th"><span>公開区分</span></th>
                <th class="c-table-default__th">
                  <span>トップページへの掲載</span>
                </th>
                <th class="c-table-default__th"><span>ビル</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr
                v-for="(employee, index) in state.listEmployee"
                :key="index"
                class="c-table-default__tr"
                @click="handleTableLink('#dummy', $event)"
              >
                <td class="c-table-default__td -sticky">
                  <InputCheckbox
                    :isChecked="selectedData.indexOf(employee.id) > -1"
                    @action="handleChecked($event, employee.id)"
                  />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">{{ employee.title }}</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    {{ employee.category }}
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">{{ employee.date }}</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">{{ employee.public }}</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    {{ employee.showTopPage }}
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    {{ employee.building }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault
          v-if="state.listEmployee.length === 0"
          class="_mt-15"
          color="gray"
        >
          検索結果がありません
        </TextDefault>
      </div>
    </div>

    <ModalEmployeeSearchBuilding
      :isShow="isModalOpen"
      @close="isModalOpen = false"
    />
  </LayoutDefault>
</template>

<script>
import { ref, reactive } from 'vue'
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

export default {
  components: {
    DatePicker,
  },
  setup() {
    useHead({ title: 'おしらせ管理_検索・一覧' })
    const categoryValue = ref('すべて')
    const showTopValue = ref('すべて')
    const isModalOpen = ref(false)
    const isCheckedAll = ref(false)
    const selectedData = ref([])
    const startDate = ref('')
    const endDate = ref('')
    const state = reactive({
      listBuilding: [],
      listEmployee: [],
    })

    const handleChecked = ($event, id) => {
      const index = selectedData.value.indexOf(id)

      if (index > -1) {
        selectedData.value.splice(index, 1)
      } else {
        selectedData.value.push(id)
      }

      isCheckedAll.value =
        selectedData.value.length === state.listEmployee.length
    }

    const handleCheckedAll = () => {
      isCheckedAll.value = !isCheckedAll.value

      if (isCheckedAll.value) {
        selectedData.value = state.listEmployee.map((user) => user.id)
      } else {
        selectedData.value = []
      }
    }

    const handleDeleteBuilding = (index) => {
      state.listBuilding.splice(index, 1)
    }

    const handleFormReset = () => {
      categoryValue.value = 'すべて'
      showTopValue.value = 'すべて'
      startDate.value = ''
      endDate.value = ''
      state.listBuilding = []
    }

    const openSearchBuildingModal = () => {
      isModalOpen.value = true
    }

    const handleTableLink = (url, event) => {
      if (!event.target.closest('a, label')) {
        window.location.href = url
      }
    }

    return {
      categoryValue,
      showTopValue,
      isModalOpen,
      isCheckedAll,
      selectedData,
      startDate,
      endDate,
      state,
      handleChecked,
      handleCheckedAll,
      handleDeleteBuilding,
      handleFormReset,
      openSearchBuildingModal,
      handleTableLink,
    }
  },
}
</script>
