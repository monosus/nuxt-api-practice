<template>
  <LayoutDefault pageTitle="従業員管理" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="新規登録" styles="purple" />
      <ButtonText href="#" text="新規登録（CSV）" styles="purple" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in _pt-3">
        <div class="c-text-info">
          <p class="c-text-info__text">
            CSV登録用のテンプレートは<LinkItem
              text="こちら"
              href="#"
              isFontSm
            />からダウンロードしてお使いください。
          </p>
        </div>

        <TextDefault class="_mt-15" tag="h2" color="gray" isBold>
          従業員検索
        </TextDefault>

        <div class="l-section-gray _mt-15 _pb-15">
          <form method="post" action="#">
            <div class="c-form-default">
              <div class="c-form-default__row">
                <FormColumn>
                  <FormGroup label="メールアドレス">
                    <InputText placeholder="yamataro.yamada@wlplus.co.jp" />
                  </FormGroup>
                  <FormGroup label="氏名">
                    <InputText placeholder="山田 太郎" />
                  </FormGroup>
                  <FormGroup label="氏名（カナ）">
                    <InputText placeholder="ヤマダ タロウ" />
                  </FormGroup>
                </FormColumn>
              </div>
            </div>

            <Transition
              :duration="200"
              @enter="onAnimateEnter"
              @after-enter="afterAnimateEnter"
              @before-leave="beforeAnimateLeave"
              @leave="onAnimateLeave"
            >
              <div
                v-show="isAccordionOpen"
                ref="accordionRef"
                class="c-form-accordion"
              >
                <div class="c-form-accordion__in">
                  <div class="c-form-default">
                    <div class="c-form-default__row">
                      <FormGroup label="企業" space="md">
                        <div class="c-list-result">
                          <div
                            v-if="state.listCompany.length > 0"
                            class="c-list-result__list"
                          >
                            <div
                              v-for="(item, index) in state.listCompany"
                              :key="index"
                              class="c-list-result__item"
                            >
                              <ButtonResult
                                :text="item.text"
                                @delete="handleDeleteCompany(index)"
                              />
                            </div>
                          </div>
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
                      <FormGroup label="入居ビル" space="md">
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
                    <div class="c-form-default__row">
                      <FormColumn>
                        <FormGroup label="ステータス">
                          <SelectBox
                            v-model="statusValue"
                            :options="['すべて', '選択肢', '選択肢', '選択肢']"
                          />
                        </FormGroup>
                        <FormGroup label="登録ルート">
                          <SelectBox
                            v-model="routeValue"
                            :options="['すべて', '選択肢', '選択肢', '選択肢']"
                          />
                        </FormGroup>
                        <FormGroup label="在籍確認">
                          <SelectBox
                            v-model="confirmValue"
                            :options="['すべて', '選択肢', '選択肢', '選択肢']"
                          />
                        </FormGroup>
                      </FormColumn>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>

            <div class="c-form-accordion-control">
              <div
                class="c-form-accordion-control__accordion"
                :class="{ '-open': isAccordionOpen }"
                @click="toggleAdvanceSearch"
              >
                <span v-if="!isAccordionOpen">詳細な検索条件を表示する</span>
                <span v-else>詳細な検索条件を隠す</span>
              </div>
              <div class="c-list-button">
                <ButtonText
                  text="条件をクリア"
                  styles="outline-purple"
                  type="reset"
                  @action="handleFormReset"
                />
                <ButtonText text="上記の条件で検索" styles="purple" />
              </div>
            </div>
          </form>
        </div>

        <div class="l-section-table">
          <div class="l-section-table__head">
            <TitleTable class="_mb-0" total="9,999" page="1-50" />
            <ButtonText text="ダウンロード" styles="outline-purple" />
          </div>

          <div class="c-table-default">
            <table class="c-table-default__table">
              <colgroup>
                <col style="width: 52px" />
                <col style="width: 112px" />
                <col style="width: 104px" />
                <col style="width: 132px" />
                <col style="width: 248px" />
                <col style="width: 272px" />
                <col style="width: 232px" />
                <col style="width: 140px" />
                <col style="width: 160px" />
              </colgroup>
              <thead class="c-table-default__thead">
                <tr class="c-table-default__tr">
                  <th class="c-table-default__th -sticky">
                    <InputCheckbox
                      :isChecked="isCheckedAll"
                      @action="handleCheckedAll"
                    />
                  </th>
                  <th class="c-table-default__th"><span>ステータス</span></th>
                  <th class="c-table-default__th"><span>在籍確認</span></th>
                  <th class="c-table-default__th -descending">
                    <span>氏名（漢字）</span>
                  </th>
                  <th class="c-table-default__th">
                    <span>メールアドレス</span>
                  </th>
                  <th class="c-table-default__th"><span>企業</span></th>
                  <th class="c-table-default__th"><span>入居ビル</span></th>
                  <th class="c-table-default__th"><span>登録ルート</span></th>
                  <th class="c-table-default__th">
                    <span>最終ログイン時間</span>
                  </th>
                </tr>
              </thead>
              <tbody class="c-table-default__tbody">
                <tr
                  v-for="(user, index) in state.listUser"
                  :key="index"
                  class="c-table-default__tr"
                  @click="handleTableLink('#dummy', $event)"
                >
                  <td class="c-table-default__td -sticky">
                    <InputCheckbox
                      :isChecked="selectedUser.indexOf(user.id) > -1"
                      @action="handleChecked($event, user.id)"
                    />
                  </td>
                  <td class="c-table-default__td">
                    <LabelTag
                      :text="user.status ? '本登録' : '仮登録'"
                      :styles="user.status ? 'purple' : 'black'"
                    />
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text">{{ user.confirm }}</p>
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text">{{ user.name }}</p>
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text" :title="user.email">
                      {{ user.email }}
                    </p>
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text">{{ user.company }}</p>
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text">{{ user.building }}</p>
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text">{{ user.route }}</p>
                  </td>
                  <td class="c-table-default__td">
                    <p class="c-table-default__text">{{ user.time }}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <TextDefault
            v-if="state.listUser.length === 0"
            class="_mt-15"
            color="gray"
          >
            検索結果がありません
          </TextDefault>
          <PaginationArea v-if="state.listUser.length > 0" />
        </div>
      </div>
    </div>

    <BottomBar
      v-if="selectedUser.length > 0"
      :text="`このページ内の${selectedUser.length}件の従業員を選択しています。`"
    >
      <ButtonText text="削除" styles="red" />
      <ButtonText text="在籍確認" styles="black" />
    </BottomBar>

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
import { ref, reactive, onMounted } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_検索・一覧' })
    const statusValue = ref('すべて')
    const routeValue = ref('すべて')
    const confirmValue = ref('すべて')
    const isSearchBuildingModalOpen = ref(false)
    const isSearchCompanyModalOpen = ref(false)
    const isAccordionOpen = ref(true)
    const accordionRef = ref(null)
    const isCheckedAll = ref(false)
    const selectedUser = ref([])
    const state = reactive({
      listCompany: [],
      listBuilding: [{ text: 'PMO EX 日本橋茅場町' }],
      listUser: [
        {
          id: '1',
          status: 0,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '2',
          status: 1,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '3',
          status: 0,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '4',
          status: 0,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '5',
          status: 0,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '6',
          status: 0,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '7',
          status: 1,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '8',
          status: 1,
          confirm: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
      ],
    })

    const handleDeleteCompany = (index) => {
      state.listCompany.splice(index, 1)
    }

    const handleDeleteBuilding = (index) => {
      state.listBuilding.splice(index, 1)
    }

    const handleChecked = ($event, id) => {
      const index = selectedUser.value.indexOf(id)

      if (index > -1) {
        selectedUser.value.splice(index, 1)
      } else {
        selectedUser.value.push(id)
      }

      isCheckedAll.value = selectedUser.value.length === state.listUser.length
    }

    const handleCheckedAll = () => {
      isCheckedAll.value = !isCheckedAll.value

      if (isCheckedAll.value) {
        selectedUser.value = state.listUser.map((user) => user.id)
      } else {
        selectedUser.value = []
      }
    }

    const handleFormReset = () => {
      statusValue.value = 'すべて'
      routeValue.value = 'すべて'
      confirmValue.value = 'すべて'
      state.listBuilding = []
    }

    const toggleAdvanceSearch = () => {
      isAccordionOpen.value = !isAccordionOpen.value
    }

    const onAnimateEnter = () => {
      accordionRef.value.style.maxHeight = `${accordionRef.value.scrollHeight}px`
    }

    const afterAnimateEnter = () => {
      accordionRef.value.classList.add('-open')
    }

    const beforeAnimateLeave = () => {
      accordionRef.value.classList.remove('-open')
    }

    const onAnimateLeave = () => {
      accordionRef.value.style.maxHeight = 0
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

    onMounted(() => {
      if (isAccordionOpen.value) {
        onAnimateEnter()
        afterAnimateEnter()
      }
    })

    return {
      statusValue,
      routeValue,
      confirmValue,
      isSearchBuildingModalOpen,
      isSearchCompanyModalOpen,
      isAccordionOpen,
      accordionRef,
      state,
      isCheckedAll,
      selectedUser,
      handleDeleteCompany,
      handleDeleteBuilding,
      handleChecked,
      handleCheckedAll,
      handleFormReset,
      toggleAdvanceSearch,
      onAnimateEnter,
      afterAnimateEnter,
      beforeAnimateLeave,
      onAnimateLeave,
      openSearchBuildingModal,
      openSearchCompanyModal,
      handleTableLink,
    }
  },
}
</script>
