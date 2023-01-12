<template>
  <LayoutMember :current="6">
    <TitleGrid titleEn="Tools & Documents of Office Buildings" titleJp="ビル関連" />
    <div class="l-section-member">
      <div class="l-section-member__in _pt-sm-58">
        <div class="c-list-link _d-md-none _pb-sm-70">
          <div class="c-list-link__item">
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="システム・ツール"
            />
          </div>
          <div class="c-list-link__item">
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="申請・届出状況"
            />
          </div>
          <div class="c-list-link__item">
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="各種申請・届出"
            />
          </div>
          <div class="c-list-link__item">
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="ドキュメントのダウンロード"
            />
          </div>
        </div>

        <div class="l-section-member__building-related">
          <TitleBorder>ビル名</TitleBorder>
          <TextDefault class="_mt-24">新宿野村ビル</TextDefault>
        </div>

        <div class="l-section-member__building-related">
          <TitleBorder>システム・ツール</TitleBorder>
          <div class="c-list-button -col2 _mt-24">
            <div v-for="(item, index) in member.listSystemTools" :key="index">
              <ButtonIcon
                :href="item.href"
                :text="item.text"
                styles="outline-purple"
                :isTargetBlank="item.isTargetBlank"
              />
            </div>
          </div>
        </div>

        <div class="l-section-member__building-related">
          <div class="c-title-with-link">
            <TitleBorder>申請・届出状況</TitleBorder>
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="申請一覧へ"
            />
          </div>
          <div class="c-table-default -member _mt-24 _d-sm-none">
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
                  <td class="c-table-default__td">2022/12/31</td>
                  <td class="c-table-default__td">A-1000002</td>
                  <td class="c-table-default__td">作業届</td>
                  <td class="c-table-default__td"></td>
                </tr>
                <tr class="c-table-default__tr">
                  <td class="c-table-default__td">
                    <LabelTag text="承認待ち" styles="black" isRadiusSm />
                  </td>
                  <td class="c-table-default__td">2022/12/31</td>
                  <td class="c-table-default__td">A-1000002</td>
                  <td class="c-table-default__td">危険物使用（持込）許可願</td>
                  <td class="c-table-default__td">
                    <LinkItem href="#" text="A-1000001" isFontSm />
                  </td>
                </tr>
                <tr class="c-table-default__tr">
                  <td class="c-table-default__td">
                    <LabelTag text="承認待ち" styles="purple" isRadiusSm />
                  </td>
                  <td class="c-table-default__td">2022/12/31</td>
                  <td class="c-table-default__td">A-1000002</td>
                  <td class="c-table-default__td">危険物使用（持込）許可願</td>
                  <td class="c-table-default__td">
                    <LinkItem href="#" text="A-1000001" isFontSm />
                  </td>
                </tr>
                <tr class="c-table-default__tr">
                  <td class="c-table-default__td">
                    <LabelTag text="承認待ち" styles="purple" isRadiusSm />
                  </td>
                  <td class="c-table-default__td">2022/12/31</td>
                  <td class="c-table-default__td">A-1000002</td>
                  <td class="c-table-default__td">危険物使用（持込）許可願</td>
                  <td class="c-table-default__td">
                    <LinkItem href="#" text="A-1000001" isFontSm />
                  </td>
                </tr>
                <tr class="c-table-default__tr">
                  <td class="c-table-default__td">
                    <LabelTag text="削除済" styles="gray" isRadiusSm />
                  </td>
                  <td class="c-table-default__td">2022/12/31</td>
                  <td class="c-table-default__td">A-1000002</td>
                  <td class="c-table-default__td">危険物使用（持込）許可願</td>
                  <td class="c-table-default__td">
                    <LinkItem href="#" text="A-1000001" isFontSm />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul class="c-table-status">
            <li class="c-table-status__item">
              <div class="c-card-status">
                <a class="c-card-status__upper" href="#dummy">
                  <div class="c-card-status__head">
                    <LabelTag text="差し戻し" styles="red" isRadiusSm />
                    <span class="c-card-status__head-number">A-1000002</span>
                  </div>
                  <p class="c-card-status__title">作業届</p>
                  <p class="c-card-status__date">2022/12/31</p>
                </a>
                <a class="c-card-status__under" href="#dummy">
                  <p class="c-card-status__owner">親申請</p>
                  <p class="c-card-status__number">A-1000001</p>
                </a>
              </div>
            </li>
            <li class="c-table-status__item">
              <div class="c-card-status">
                <a class="c-card-status__upper" href="#dummy">
                  <div class="c-card-status__head">
                    <LabelTag text="承認待ち" styles="black" isRadiusSm />
                    <span class="c-card-status__head-number">A-1000002</span>
                  </div>
                  <p class="c-card-status__title">作業届</p>
                  <p class="c-card-status__date">2022/12/31</p>
                </a>
              </div>
            </li>
            <li class="c-table-status__item">
              <div class="c-card-status">
                <a class="c-card-status__upper" href="#dummy">
                  <div class="c-card-status__head">
                    <LabelTag text="承認済み" styles="purple" isRadiusSm />
                    <span class="c-card-status__head-number">A-1000002</span>
                  </div>
                  <p class="c-card-status__title">作業届</p>
                  <p class="c-card-status__date">2022/12/31</p>
                </a>
                <a class="c-card-status__under" href="#dummy">
                  <p class="c-card-status__owner">親申請</p>
                  <p class="c-card-status__number">A-1000001</p>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="l-section-member__building-related">
          <TitleBorder>各種申請・届出</TitleBorder>
          <div class="c-list-button -col2-text _mt-24 _d-sm-none">
            <div
              v-for="(item, index) in member.listApplication"
              :key="index"
              class="c-list-button__item"
            >
              <ButtonIcon :href="item.href" :text="item.text" />
              <TextDefault lineHeight="1.625">{{ item.detail }}</TextDefault>
            </div>
          </div>
          <TextDefault
            fontSize="14"
            lineHeight="1.715"
            color="red"
            class="_mt-20 _d-md-none"
            >スマートフォンからは申請できません。PCから申請してください。</TextDefault
          >
        </div>

        <div class="l-section-member__building-related">
          <TitleBorder>ドキュメントのダウンロード</TitleBorder>
          <div class="c-list-button -col3 _mt-md-39 _mt-sm-24">
            <div v-for="(item, index) in member.listDownload" :key="index">
              <ButtonIcon
                :href="item.href"
                :text="item.text"
                styles="outline-purple"
                :iconName="item.iconName"
                :isTargetBlank="item.isTargetBlank"
              />
            </div>
          </div>
        </div>
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    useHead({ title: '' })
    const member = reactive({
      listSystemTools: [
        {
          href: '#',
          text: '会議室予約',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '会議室予約',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '会議室予約',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '会議室予約',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '会議室予約',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '会議室予約',
          isTargetBlank: true,
        },
      ],
      listApplication: [
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
        {
          href: '#',
          text: '作業届',
          detail:
            '説明文がここに入ります。作業願いとはこういうものです。説明文がここに入ります。作業願いとはこういうものです。',
        },
      ],
      listDownload: [
        {
          href: '#',
          text: '丸々ビル利用規約',
          iconName: 'download',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '防災ハンドブック',
          iconName: 'download',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '丸々ビル利用規約',
          iconName: 'download',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '丸々ビル利用規約',
          iconName: 'download',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '丸々ビル利用規約',
          iconName: 'download',
          isTargetBlank: true,
        },
        {
          href: '#',
          text: '丸々ビル利用規約',
          iconName: 'download',
          isTargetBlank: true,
        },
      ],
    })

    return {
      member,
    }
  },
}
</script>
