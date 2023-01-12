<template>
  <LayoutMember :current="6">
    <div class="l-section-member">
      <div class="l-section-member__in">
        <LabelTag text="WORK" styles="gradient-blue" isRadiusSm />
        <LabelTag text="LIFE" styles="gradient-orange" isRadiusSm />
        <LabelTag text="TEXT" styles="black" isWide isRadiusSm />

        <LabelText text="利用無料" />
        <LabelText text="利用無料" isLarge />

        <div class="_mt-40">
          <TextDefault fontSize="18" isBold
            >Link icon left & target blank</TextDefault
          >
          <LinkItem
            href="#"
            iconName="download"
            text="作業届.xlxs"
            isTargetBlank
          />
        </div>

        <div class="_mt-40">
          <TextDefault fontSize="18" isBold>Link icon right</TextDefault>
          <LinkItem
            href="#"
            iconName="arrow_next_purple"
            position="right"
            text="申請一覧へ"
            isTargetBlank
          />
        </div>

        <div class="_mt-40">
          <TextDefault fontSize="18" isBold>Link target blank</TextDefault>
          <LinkItem href="#" text="パスワードを変更する" isTargetBlank />
        </div>

        <div class="_mt-40">
          <div class="c-title-with-link">
            <TitleBorder>申請・届出状況</TitleBorder>
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="申請一覧へ"
              isTargetBlank
            />
          </div>
        </div>

        <div class="_mt-40 _mb-40">
          <div class="c-title-with-link">
            <TitleSub title="動画コンテンツ" subtitle="Video Contents" />
            <LinkItem
              href="#"
              iconName="arrow_next_purple"
              position="right"
              text="動画一覧"
              isTargetBlank
            />
          </div>
        </div>

        <div class="c-form-default">
          <div class="c-form-default__row">
            <div class="c-form-column-member">
              <FormGroup label="氏（漢字）">
                <InputText placeholder="山田" value="河田" isLarge />
              </FormGroup>
              <FormGroup label="名（漢字）">
                <InputText placeholder="太郎" value="川之介" isLarge />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="入居ビル">
                <SelectBox
                  placeholder="選択してください"
                  :options="[
                    'PMO EX 日本橋茅場町',
                    'PMO EX 日本橋茅場町2',
                    'PMO EX 日本橋茅場町3',
                  ]"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup
                label="各種通知受信用メールアドレス"
                suggestText="ログイン用のメールアドレスとは別のメールアドレスで<br class='_d-sm-none'>WL+からの各種連絡を受け取りたい方は入力してください。"
                isOptional
              >
                <InputText
                  placeholder="email@exsample.com"
                  value="k.kawada@gmail.com"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member">
              <FormGroup
                label="連絡用電話番号"
                suggestText="ヘルプテキストが入ります"
                isOptional
              >
                <InputText
                  placeholder="09012345678"
                  value="09012349876"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="生年月日" isOptional>
                <div class="c-form-column-member__col3">
                  <div class="c-form-column-member__col3-in">
                    <SelectBox
                      placeholder="年"
                      :options="
                        Array.from(Array(102).fill(1920), (x, i) => x + i)
                      "
                      isLarge
                    />
                  </div>
                  <div class="c-form-column-member__col3-in">
                    <SelectBox
                      placeholder="月"
                      :options="
                        Array.from(Array(12).fill(1), (x, i) =>
                          String(x + i).padStart(2, '0')
                        )
                      "
                      isLarge
                    />
                  </div>
                  <div class="c-form-column-member__col3-in">
                    <SelectBox
                      placeholder="日"
                      :options="
                        Array.from(Array(31).fill(1), (x, i) =>
                          String(x + i).padStart(2, '0')
                        )
                      "
                      isLarge
                    />
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row _mt-64">
            <div class="c-form-column-member -w488 -width-1b">
              <FormGroup label="興味関心のある事項" isOptional>
                <TextDefault fontSize="14" lineHeight="1.429" color="gray">
                  以下の情報を登録いただきますと、興味関心に沿ったイベントなどのご案内を差し上げることがございます。
                </TextDefault>
                <div class="c-list-input -column-wide _mt-32">
                  <InputCheckbox
                    text="選択肢A選択肢A選択肢A選択肢A選択肢A"
                    isLarge
                  />
                  <InputCheckbox
                    text="選択肢A選択肢A選択肢A選択肢A選択肢A"
                    isLarge
                  />
                  <InputCheckbox
                    text="選択肢A選択肢A選択肢A選択肢A選択肢A"
                    isLarge
                  />
                  <InputCheckbox
                    text="選択肢A選択肢A選択肢A選択肢A選択肢A"
                    isLarge
                  />
                  <div class="c-list-input__box-detail">
                    <div class="c-list-input__left">
                      <InputCheckbox text="その他" isLarge />
                    </div>
                    <div class="c-list-input__right">
                      <InputText placeholder="内容を記入してください" isLarge />
                    </div>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row _mt-74">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="メール通知受け取り設定">
                <TextDefault fontSize="14" lineHeight="1.429" color="gray">
                  当社が重要と判断した通知においては、こちらの設定に関わらずメール通知をお送りするケースがございます。
                </TextDefault>
                <div class="c-list-input -column-wide _mt-24">
                  <InputRadio
                    label="release"
                    name="receive"
                    value="メール通知を受け取る"
                    text="メール通知を受け取る"
                    isChecked
                    isLarge
                  />
                  <InputRadio
                    label="private"
                    name="receive"
                    value="メール通知を受け取らない"
                    text="メール通知を受け取らない"
                    isLarge
                  />
                </div>
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -full -width-1b">
              <FormGroup label="お問い合わせ内容">
                <TextArea
                  placeholder="お問い合わせ内容を入力。最大0000文字まで入力できます。"
                  size="lg"
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div class="_mt-40">
          <div class="c-box-terms">
            <div class="c-box-terms__box-text">
              <div class="c-box-terms__box">
                <TextDefault fontSize="18" isBold>利用規約</TextDefault>
                <TextDefault fontSize="14" lineHeight="1.715"
                  >この規約（以下「本規約」といいます）は、株式会社XXXXX（以下「当社」といいます）が提供する、サービス「XXXXXX」（以下「本サービス」といいます）の利用に関する条件を定めるものであり、本サービスを利用するすべてのお客様に適用されます。お客様は、本サービスを利用する前に、本規約をよくお読みください。</TextDefault
                >
              </div>
              <div class="c-box-terms__box">
                <TextDefault fontSize="18" isBold>
                  第1条　本規約への同意
                </TextDefault>
                <ol class="c-list-number">
                  <li class="c-list-number__item">
                    お客様は、本規約に従って本サービスを利用するものとし、本規約に同意しない限り本サービスを利用できません。本サービスあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたり
                  </li>
                  <li class="c-list-number__item">
                    お客様は、本規約に従って本サービスを利用するものとし、本規約に同意しない限り本サービスを利用できません。本サービスあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたりあたり
                  </li>
                </ol>
              </div>
            </div>
            <div class="c-box-terms__agree">
              <InputCheckbox text="上記の利用規約に同意します。" isLarge />
            </div>
          </div>
        </div>

        <TextDefault tag="h2" fontSize="20" isBold class="_mt-40"
          >Table</TextDefault
        >
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
                  <LabelTag text="承認待ち" styles="red" isRadiusSm />
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
                  <LabelTag text="承認待ち" styles="red" isRadiusSm />
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
                  <LabelTag text="承認待ち" styles="purple" isRadiusSm />
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
                  <LabelTag text="承認待ち" styles="purple" isRadiusSm />
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

        <TextDefault tag="h2" fontSize="20" isBold class="_mt-40"
          >Card Post</TextDefault
        >
        <CardPost v-bind="cardList[0]" />
      </div>
      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
export default {
  setup() {
    useHead({ title: '' })
    const cardList = [
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_1.jpg`,
          import.meta.url
        ),
        tags: [
          { style: 'red', text: '重要' },
          { style: 'black', text: 'ビル' },
        ],
        text: '年末年始の営業時間について【H¹T＆提携店含む全店舗】',
        date: '2022.12.31',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_2.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'クーポン' }],
        text: '【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店',
        date: '2022.12.30',
      },
      {
        link: '#',
        src: '',
        tags: [
          { style: 'red', text: 'システム' },
          { style: 'black', text: 'クーポン' },
        ],
        text: 'システムメンテナンスのお知らせ',
        date: '2022.12.28',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_4.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'イベント・セミナー' }],
        text: 'THE MODEL 最強の「営業チーム」構築術',
        date: '2022.12.27',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_5.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使える',
        date: '2022.12.26',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_6.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました',
        date: '2022.12.25',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_7.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'イベント・セミナー' }],
        text: 'メータバースやAI・ロボティクスで切り拓くビジネスの未来',
        date: '2022.12.24',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_8.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'クーポン' }],
        text: '【10%OFF】YUITO 銀座しゃぶ通 好の笹  日本橋店',
        date: '2022.12.23',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_1.jpg`,
          import.meta.url
        ),
        tags: [
          { style: 'red', text: '重要' },
          { style: 'black', text: 'ビル' },
        ],
        text: 'エレベーター点検の実施',
        date: '2022.12.22',
      },
      {
        link: '#',
        src: new URL(
          `@/assets/image/member/common/img_card_post_sp_10.jpg`,
          import.meta.url
        ),
        tags: [{ style: 'black', text: 'お知らせ' }],
        text: '新しくXXXXXXXのサービスが使えるようになりました',
        date: '2022.12.21',
      },
    ]

    return {
      cardList,
    }
  },
}
</script>
