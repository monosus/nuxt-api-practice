<template>
  <div class="c-box-memo">
    <div class="c-box-memo__in">
      <div class="c-box-memo__form">
        <TextArea
          class="c-box-memo__form-textarea"
          placeholder="管理者メモを記入"
          size="sm"
          hasNoResize
        />
        <div class="c-box-memo__form-lower">
          <ButtonText
            class="c-box-memo__form-button"
            text="メモを追加"
            size="sm"
            styles="purple"
          />
        </div>
      </div>
      <div class="c-box-memo__detail">
        <div class="c-box-memo__detail-in">
          <TextDefault fontSize="18" isBold color="gray"
            >管理者メモ</TextDefault
          >
          <ul v-if="memoList?.length > 0" class="c-box-memo__list">
            <li
              v-for="(item, index) in memoList"
              :key="index"
              class="c-box-memo__item"
            >
              <BoxMemoItem
                :date="item.date"
                :name="item.name"
                :info="item.info"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxMemo',
  setup() {
    const memoList = [
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
      {
        date: '2022/12/27',
        name: '関理 正子',
        info: '申請者様からお電話にて追加確認事項を頂くことになっています。',
      },
    ]

    return { memoList }
  },
}
</script>
