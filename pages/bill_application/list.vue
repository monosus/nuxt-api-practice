<template>
  <LayoutMember :current="6">
    <HeaderBarStatic text="ビル申請" noSticky />

    <div class="l-section-member">
      <div class="l-section-member__in _pt-15">
        <LinkItem
          href="#"
          text="ビル関連へ戻る"
          iconName="arrow_prev_purple"
          hasNoUnderline
        />
        <div class="l-section-table">
          <TitleTable total="9,999" page="1-20" />
        </div>
        <div class="c-table-default -member">
          <table class="c-table-default__table">
            <colgroup>
              <col class="col-w01" />
              <col class="col-w02" />
              <col class="col-w03" />
              <col class="col-w04" />
              <col class="col-w05" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th"><span>ステータス</span></th>
                <th class="c-table-default__th">
                  <span>申請日</span>
                </th>
                <th class="c-table-default__th"><span>申請No.</span></th>
                <th class="c-table-default__th">
                  <span>申請名</span>
                </th>
                <th class="c-table-default__th"><span>親申請No.</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="差し戻し" styles="red" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/22</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">作業届</td>
                <td class="c-table-default__td"></td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="差し戻し" styles="red" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/20</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">作業届</td>
                <td class="c-table-default__td"></td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認待ち" styles="black" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認待ち" styles="black" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" isRadiusSm />
                </td>
                <td class="c-table-default__td">2022/12/21</td>
                <td class="c-table-default__td">A-1000002</td>
                <td class="c-table-default__td">危険物使用（持込）許可願</td>
                <td class="c-table-default__td">
                  <LinkItem href="#" text="A-1000001" isFontSm />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <PaginationArea class="_mt-md-80 _mt-sm-48" />
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
import PaginationArea from '~/components/navigation/PaginationArea.vue'
export default {
  components: { PaginationArea },
  setup() {
    useHead({ title: '' })
  },
}
</script>
