<template>
  <Transition name="modal">
    <div
      v-if="isShow"
      class="c-modal-employee"
      @click="handleModalBackdropClose"
    >
      <div ref="modalRef" class="c-modal-employee__wrapper">
        <div class="c-modal-employee__container">
          <div class="c-modal-employee__header">
            <div class="c-modal-employee__title">
              <TextDefault tag="h2" fontSize="20" isBold
                >従業員検索</TextDefault
              >
            </div>
            <div class="c-modal-employee__close">
              <LinkItem
                iconName="close_gray"
                text="閉じる"
                hasNoUnderline
                href="#"
                color="gray"
                @click="$emit('close')"
              />
            </div>
          </div>
          <div class="c-modal-employee__body">
            <div class="c-modal-employee__main">
              <div class="c-modal-employee__inner">
                <form method="post" action="#">
                  <div class="c-form-default">
                    <div class="c-form-default__row">
                      <FormColumn>
                        <FormGroup label="氏名">
                          <InputText
                            placeholder="山田 太郎"
                            value="山田 太郎"
                          />
                        </FormGroup>
                        <FormGroup label="氏名（カナ）">
                          <InputText
                            placeholder="ヤマダ タロウ"
                            value="ヤマダ タロウ"
                          />
                        </FormGroup>
                        <FormGroup label="メールアドレス">
                          <InputText
                            placeholder="yamataro.yamada@wlplus.co.jp"
                            value="yamataro.yamada@wlplus.co.jp"
                          />
                        </FormGroup>
                      </FormColumn>
                    </div>

                    <div class="c-form-default__row">
                      <FormGroup label="企業" space="md">
                        <div class="c-list-result">
                          <div class="c-list-result__list">
                            <div
                              v-for="(item, index) in employee.listEnterprise"
                              :key="index"
                              class="c-list-result__item"
                            >
                              <ButtonResult
                                :text="item"
                                @delete="
                                  handleDeleteResult(
                                    employee.listEnterprise,
                                    index
                                  )
                                "
                              />
                            </div>
                            <div class="c-list-result__item">
                              <ButtonText
                                text="選択する"
                                styles="purple"
                                radius="radius-22"
                                size="sm"
                                type="button"
                              />
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </div>

                    <div class="c-form-default__row">
                      <FormGroup label="ビル" space="md">
                        <div class="c-list-result">
                          <div class="c-list-result__list">
                            <div
                              v-for="(item, index) in employee.listBuilding"
                              :key="index"
                              class="c-list-result__item"
                            >
                              <ButtonResult
                                :text="item"
                                @delete="
                                  handleDeleteResult(
                                    employee.listBuilding,
                                    index
                                  )
                                "
                              />
                            </div>
                            <div class="c-list-result__item">
                              <ButtonText
                                text="選択する"
                                styles="purple"
                                radius="radius-22"
                                size="sm"
                                type="button"
                              />
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </div>

                    <div class="c-form-default__row -footer">
                      <div class="c-list-button -right">
                        <ButtonText
                          text="条件をクリア"
                          styles="outline-purple"
                          type="reset"
                        />
                        <ButtonText text="上記の条件で検索" type="submit" />
                      </div>
                    </div>
                  </div>
                  <TitleTable
                    :total="employee.total"
                    :page="employee.page"
                    class="_mt-48"
                  />
                  <div class="c-table-default">
                    <table class="c-table-default__table">
                      <colgroup>
                        <col style="width: 52px" />
                        <col style="width: 104px" />
                        <col style="width: 148px" />
                        <col style="width: 232px" />
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
                          <th class="c-table-default__th">
                            <span>在籍確認</span>
                          </th>
                          <th class="c-table-default__th">
                            <span>氏名（漢字）</span>
                          </th>
                          <th class="c-table-default__th">
                            <span>メールアドレス</span>
                          </th>
                          <th class="c-table-default__th"><span>企業</span></th>
                          <th class="c-table-default__th">
                            <span>入居ビル</span>
                          </th>
                          <th class="c-table-default__th">
                            <span>登録ルート</span>
                          </th>
                          <th class="c-table-default__th">
                            <span>最終ログイン時間</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="c-table-default__tbody">
                        <tr
                          v-for="(item, index) in employee.searchData"
                          :key="index"
                          class="c-table-default__tr"
                        >
                          <td class="c-table-default__td -sticky">
                            <InputCheckbox
                              :value="item.name"
                              :isChecked="selectedData.indexOf(item.id) > -1"
                              @action="handleChecked($event, item.id)"
                            />
                          </td>
                          <td class="c-table-default__td">
                            <p class="c-table-default__text">
                              {{ item.status }}
                            </p>
                          </td>
                          <td class="c-table-default__td">
                            <p class="c-table-default__text">{{ item.name }}</p>
                          </td>
                          <td class="c-table-default__td">
                            <p
                              class="c-table-default__text"
                              :title="item.email"
                            >
                              {{ item.email }}
                            </p>
                          </td>
                          <td class="c-table-default__td">
                            <p class="c-table-default__text">
                              {{ item.company }}
                            </p>
                          </td>
                          <td class="c-table-default__td">
                            <p class="c-table-default__text">
                              {{ item.building }}
                            </p>
                          </td>
                          <td class="c-table-default__td">
                            <p class="c-table-default__text">
                              {{ item.route }}
                            </p>
                          </td>
                          <td class="c-table-default__td">
                            <p class="c-table-default__text">{{ item.time }}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <PaginationArea />
                </form>
              </div>
            </div>
            <div class="c-modal-employee__side">
              <div class="select-employee">
                <div class="select-employee__title">
                  <TextDefault fontSize="20" isBold>選択中の従業員</TextDefault>
                </div>
                <div class="c-list-result -column _mt-24">
                  <div class="c-list-result__list">
                    <div
                      v-for="(item, index) in employee.listEmployee"
                      :key="index"
                      class="c-list-result__item"
                    >
                      <ButtonResult
                        :text="item"
                        @delete="
                          handleDeleteResult(employee.listEmployee, index)
                        "
                      />
                    </div>
                  </div>
                </div>
                <div class="select-employee__button">
                  <ButtonText text="検索条件に追加" type="button" />
                </div>
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
  name: 'ModalEmployeeSearch',
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
      listEnterprise: [
        '株式会社電通国際情報サービス',
        '株式会社テナントオフィス',
        '株式会社WL+',
        '株式会社ワークワーク',
        '株式会社ライフプラ',
        '株式会社ABC',
      ],
      listBuilding: ['PMO EX 日本橋茅場町'],
      listEmployee: ['山田 山太郎', '河田 川ノ助'],
      total: '9,999',
      page: '1-50',
      searchData: [
        {
          id: '1',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '2',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '3',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '4',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '5',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '6',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '7',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '8',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
        {
          id: '9',
          status: '確認済み',
          name: '山田 山太郎',
          email: 'yamataro.yamada@worklifeplus.co.jp',
          company: '株式会社電通国際情報サービス',
          building: 'PMO EX 日本橋茅場町',
          route: '管理者登録',
          time: '2022/12/31/23:59',
        },
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
        selectedData.value.length === employee.searchData.length
    }

    const handleCheckedAll = () => {
      isCheckedAll.value = !isCheckedAll.value

      if (isCheckedAll.value) {
        selectedData.value = employee.searchData.map((user) => user.id)
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
