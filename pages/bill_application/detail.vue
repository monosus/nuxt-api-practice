<template>
  <LayoutMember :current="6">
    <HeaderBarStatic
      text="A-1000002 / 工事承諾許可願い"
      textSp="A-1000002 / 作業届"
      labelText="承認済み"
      labelStyle="purple"
    />

    <div class="l-section-member">
      <div class="l-section-member__in _pt-15">
        <LinkItem
          href="#"
          text="ビル申請一覧へ戻る"
          iconName="arrow_prev_purple"
          hasNoUnderline
        />
        <section class="_mt-40 _mt-sm-32">
          <TitleBorder tag="h2">申請概要</TitleBorder>
          <dl class="c-form-confirm -member _mt-15">
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">ステータス</dt>
              <dd class="c-form-confirm__data">承認済み</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請日</dt>
              <dd class="c-form-confirm__data">2022/12/20</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請No.</dt>
              <dd class="c-form-confirm__data">A-1000002</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請名</dt>
              <dd class="c-form-confirm__data">工事承諾許可願い</dd>
            </div>
            <div class="c-form-confirm__row">
              <dt class="c-form-confirm__title">申請ファイル</dt>
              <dd class="c-form-confirm__data">
                <ul class="c-list-download">
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="作業届.xlxs"
                      isTargetBlank
                    />
                  </li>
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="添付ファイル1.xlxs"
                      isTargetBlank
                    />
                  </li>
                  <li class="c-list-download__item">
                    <LinkItem
                      href="#"
                      iconName="document_purple"
                      text="添付ファイル2.xlxs"
                      isTargetBlank
                    />
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>

        <section class="_mt-97">
          <div class="c-text-with-button">
            <TitleBorder tag="h2">関連申請</TitleBorder>
            <ButtonText
              class="_pl-16 _pr-16 _ml-40"
              text="子申請を作成"
              size="sm"
              styles="outline-purple"
            />
          </div>
          <TextDefault fontSize="14" lineHeight="1.7" color="red" class="_mt-8 _d-md-none"
            >スマートフォンやタブレット端末からは関連申請の登録はできません。PCから申請を登録してください。
          </TextDefault>
          <TextDefault lineHeight="1.429" color="gray" class="_mt-20"
            >関連申請はありません。
          </TextDefault>
        </section>

        <section class="_mt-90">
          <TitleBorder tag="h2">コメント履歴</TitleBorder>
          <ListComment :comments="comments" />
        </section>
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
export default {
  setup() {
    useHead({ title: '' })
    const comments = [
      {
        text: '申請内容を確認し、承認しました。危険物に該当する物品の使用予定がありそうですので、続いて子申請として「火器使用届」の申請もお願いします。',
        date: '2022/12/21',
        author: 'ビル管理会社',
      },
      {
        text: '申請内容のご確認のほど宜しくお願い申し上げます。',
        date: '2022/12/20',
        author: '申請者：山田 山太郎',
      },
    ]

    return {
      comments,
    }
  },
}
</script>
