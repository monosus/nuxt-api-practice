<template>
  <LayoutDefault pageTitle="ビル申請管理" :current="2">
    <div class="l-section-default">
      <div class="l-section-default__in _pt-20">
        <TextDefault class="_mt-15" tag="h2" color="gray" isBold>
          ビル申請検索
        </TextDefault>

        <div class="l-section-gray _mt-15">
          <form method="post" action="#">
            <div class="c-form-default">
              <div class="c-form-default__row">
                <FormColumn size="3b">
                  <FormGroup label="ステータス" space="lg">
                    <div class="c-list-input">
                      <InputCheckbox text="未対応" />
                      <InputCheckbox text="差し戻し中" />
                      <InputCheckbox text="承認済" />
                      <InputCheckbox text="取消済" />
                    </div>
                  </FormGroup>
                </FormColumn>
              </div>
              <div class="c-form-default__row">
                <div class="c-form-calendar-column">
                  <div class="c-form-calendar-group">
                    <FormGroup label="申請No.">
                      <InputText placeholder="入力してください" />
                    </FormGroup>
                  </div>
                  <div class="c-form-calendar-group">
                    <FormGroup label="申請書名">
                      <SelectBox
                        v-model="appNameValue"
                        :options="['すべて', '選択肢', '選択肢', '選択肢']"
                      />
                    </FormGroup>
                  </div>
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
                </div>
              </div>
              <div class="c-form-default__row">
                <FormGroup label="企業" space="md">
                  <div class="c-list-result">
                    <ButtonText
                      type="button"
                      text="選択する"
                      styles="purple"
                      radius="radius-22"
                      size="sm"
                      @action="openSearchCompanyModal"
                    />
                  </div>
                </FormGroup>
              </div>
              <div class="c-form-default__row">
                <FormGroup label="申請者" space="md">
                  <div class="c-list-result">
                    <ButtonText
                      text="選択する"
                      styles="purple"
                      radius="radius-22"
                      size="sm"
                    />
                  </div>
                </FormGroup>
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
          <TitleTable total="9,999" page="1-50" />
        </div>

        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 96px" />
              <col style="width: 120px" />
              <col style="width: 232px" />
              <col style="width: 148px" />
              <col style="width: 232px" />
              <col style="width: 148px" />
              <col style="width: 232px" />
              <col style="width: 208px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th"><span>ステータス</span></th>
                <th class="c-table-default__th -descending">
                  <span>申請日</span>
                </th>
                <th class="c-table-default__th"><span>申請No.</span></th>
                <th class="c-table-default__th">
                  <span>申請名</span>
                </th>
                <th class="c-table-default__th"><span>親申請No.</span></th>
                <th class="c-table-default__th"><span>企業</span></th>
                <th class="c-table-default__th"><span>申請者</span></th>
                <th class="c-table-default__th">
                  <span>申請者メールアドレス</span>
                </th>
                <th class="c-table-default__th"><span>ビル</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr
                v-for="(item, index) in state.searchResult"
                :key="index"
                class="c-table-default__tr"
                @click="handleTableLink('#dummy', $event)"
              >
                <td class="c-table-default__td">
                  <LabelTag :text="item.status" styles="red" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">{{ item.date }}</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">{{ item.appNumber }}</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">{{ item.appName }}</p>
                </td>
                <td class="c-table-default__td">
                  <template v-if="item.parentApp">
                    <LinkItem
                      :href="item.parentApp.link"
                      :text="item.parentApp.id"
                      isFontSm
                    />
                  </template>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text" :title="item.company">
                    {{ item.company }}
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">{{ item.applicant }}</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text" :title="item.email">
                    {{ item.email }}
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">{{ item.building }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <PaginationArea />

        <TextDefault
          v-if="state.searchResult.length === 0"
          class="_mt-15"
          color="gray"
        >
          検索結果がありません
        </TextDefault>
      </div>
    </div>

    <ModalEmployeeSearchBuilding
      :isShow="isSearchBuildingModalOpen"
      @close="isSearchBuildingModalOpen = false"
    />

    <ModalEmployeeSearchCompany
      :isShow="isSearchCompanyModalOpen"
      @close="isSearchCompanyModalOpen = false"
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
    useHead({ title: 'ビル申請管理_検索・一覧' })
    const appNameValue = ref('すべて')
    const isSearchBuildingModalOpen = ref(false)
    const isSearchCompanyModalOpen = ref(false)
    const isCheckedAll = ref(false)
    const selectedData = ref([])
    const startDate = ref('')
    const endDate = ref('')
    const state = reactive({
      listBuilding: [{ text: 'PMO EX 日本橋茅場町' }],
      searchResult: [
        {
          id: '1',
          status: '未対応',
          date: '2022/12/31',
          appNumber: 'A-1000002',
          appName: '作業届',
          parentApp: null,
          company: ' 株式会社テナントオフィスビ株式会社テナントオフィスビ',
          applicant: '山田 山太郎',
          email: 'yamataro.yamada@worklifep…',
          building: 'PMO EX 日本橋茅場町',
        },
        {
          id: '2',
          status: '未対応',
          date: '2022/12/31',
          appNumber: 'A-1000002',
          appName: '危険物使用（持込）許可願',
          parentApp: {
            id: 'A-1000001',
            link: '#',
          },
          company: ' 株式会社テナントオフィスビ株式会社テナントオフィスビ',
          applicant: '山田 山太郎',
          email: 'yamataro.yamada@worklifep…',
          building: 'PMO EX 日本橋茅場町',
        },
        {
          id: '3',
          status: '未対応',
          date: '2022/12/31',
          appNumber: 'A-1000002',
          appName: '危険物使用（持込）許可願',
          parentApp: {
            id: 'A-1000001',
            link: '#',
          },
          company: ' 株式会社テナントオフィスビ株式会社テナントオフィスビ',
          applicant: '山田 山太郎',
          email: 'yamataro.yamada@worklifep…',
          building: 'PMO EX 日本橋茅場町',
        },
        {
          id: '4',
          status: '未対応',
          date: '2022/12/31',
          appNumber: 'A-1000002',
          appName: '危険物使用（持込）許可願',
          parentApp: {
            id: 'A-1000001',
            link: '#',
          },
          company: ' 株式会社テナントオフィスビ株式会社テナントオフィスビ',
          applicant: '山田 山太郎',
          email: 'yamataro.yamada@worklifep…',
          building: 'PMO EX 日本橋茅場町',
        },
        {
          id: '5',
          status: '未対応',
          date: '2022/12/31',
          appNumber: 'A-1000002',
          appName: '危険物使用（持込）許可願',
          parentApp: {
            id: 'A-1000001',
            link: '#',
          },
          company: ' 株式会社テナントオフィスビ株式会社テナントオフィスビ',
          applicant: '山田 山太郎',
          email: 'yamataro.yamada@worklifep…',
          building: 'PMO EX 日本橋茅場町',
        },
      ],
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
      appNameValue.value = 'すべて'
      startDate.value = ''
      endDate.value = ''
      state.listBuilding = []
    }

    const openSearchBuildingModal = () => {
      isSearchBuildingModalOpen.value = true
    }

    const openSearchCompanyModal = () => {
      isSearchCompanyModalOpen.value = true
    }

    const handleTableLink = (url, event) => {
      if (!event.target.closest('a, label')) {
        window.location.href = url
      }
    }

    return {
      appNameValue,
      isSearchBuildingModalOpen,
      isSearchCompanyModalOpen,
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
      openSearchCompanyModal,
      handleTableLink,
    }
  },
}
</script>
