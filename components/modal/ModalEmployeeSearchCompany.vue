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
            <div class="c-modal-employee__navigation">
              <LinkItem
                iconName="arrow_left"
                text="従業員検索画面へ戻る"
                hasNoUnderline
                href="#"
              />
            </div>
            <div class="c-modal-employee__title">
              <TextDefault tag="h2" fontSize="20" isBold>企業検索</TextDefault>
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
                      <FormColumn size="3b">
                        <FormGroup label="企業">
                          <InputText placeholder="株式会社テナントオフィス" />
                        </FormGroup>
                      </FormColumn>
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
                </form>

                <TitleTable
                  :total="employee.total"
                  :page="employee.page"
                  class="_mt-48"
                />
                <div class="c-table-default">
                  <table class="c-table-default__table">
                    <colgroup>
                      <col style="width: 52px" />
                      <col style="width: 332px" />
                      <col style="width: 552px" />
                      <col style="width: 248px" />
                    </colgroup>
                    <thead class="c-table-default__thead">
                      <tr class="c-table-default__tr">
                        <th class="c-table-default__th -sticky">
                          <InputCheckbox
                            :isChecked="isCheckedAll"
                            @action="handleCheckedAll"
                          />
                        </th>
                        <th class="c-table-default__th"><span>企業</span></th>
                        <th class="c-table-default__th"><span>住所</span></th>
                        <th class="c-table-default__th">
                          <span>入居ビル</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="c-table-default__tbody">
                      <tr
                        v-for="(item, index) in employee.companyData"
                        :key="index"
                        class="c-table-default__tr"
                      >
                        <td class="c-table-default__td -sticky">
                          <InputCheckbox
                            :value="item.company"
                            :isChecked="selectedData.indexOf(item.id) > -1"
                            @action="handleChecked($event, item.id)"
                          />
                        </td>
                        <td class="c-table-default__td">
                          {{ item.company }}
                        </td>
                        <td class="c-table-default__td">
                          {{ item.address }}
                        </td>
                        <td class="c-table-default__td">
                          {{ item.building }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="c-modal-employee__side">
              <div class="select-employee">
                <div class="select-employee__title">
                  <TextDefault fontSize="20" isBold>選択中の企業</TextDefault>
                </div>
                <div class="c-list-result -column _mt-24">
                  <div class="c-list-result__list">
                    <div
                      v-for="(item, index) in employee.listCompany"
                      :key="index"
                      class="c-list-result__item"
                    >
                      <ButtonResult
                        :text="item"
                        @delete="
                          handleDeleteResult(employee.listCompany, index)
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
  name: 'ModalEmployeeSearchCompany',
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
      listCompany: [
        '株式会社テナントオフィス',
        '株式会社電通国際情報サービス東…',
        '公益財団法人あいうえお',
      ],
      total: '3',
      page: '1-3',
      companyData: [
        {
          id: '1',
          company: '株式会社電通国際情報サービス',
          address: '愛知県名古屋市中区栄4-2-29 JRE名古屋広小路プレイス内',
          building: 'PMO EX 日本橋茅場町',
        },
        {
          id: '2',
          company: '株式会社電通国際情報サービス',
          address: '愛知県名古屋市中区栄4-2-29 JRE名古屋広小路プレイス内',
          building: 'PMO EX 日本橋茅場町',
        },
        {
          id: '3',
          company: '株式会社電通国際情報サービス',
          address: '愛知県名古屋市中区栄4-2-29 JRE名古屋広小路プレイス内',
          building: 'PMO EX 日本橋茅場町',
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
        selectedData.value.length === employee.companyData.length
    }

    const handleCheckedAll = () => {
      isCheckedAll.value = !isCheckedAll.value

      if (isCheckedAll.value) {
        selectedData.value = employee.companyData.map((user) => user.id)
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
