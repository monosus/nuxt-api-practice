<template>
  <LayoutDefault pageTitle="お知らせ新規作成" :current="1">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <form method="post" action="#" enctype="multipart/form-data">
        <div class="l-section-default__in">
          <div class="c-form-default -wide">
            <TitleBorder tag="h2">基本設定</TitleBorder>
            <div class="c-form-default__row">
              <div class="c-form-default__select">
                <FormGroup label="お知らせのカテゴリ">
                  <SelectBox
                    v-model="categoryValue"
                    :options="category"
                    placeholder="選択してください"
                  />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <FormGroup label="公開区分" space="lg">
                <div class="c-list-input">
                  <InputRadio
                    label="release"
                    name="category"
                    value="公開"
                    text="公開"
                    isChecked
                  />
                  <InputRadio
                    label="private"
                    name="category"
                    value="非公開"
                    text="非公開"
                  />
                </div>
              </FormGroup>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-default__select">
                <FormGroup label="公開／通知メール送信範囲">
                  <SelectBox
                    v-model="mailValue"
                    :options="mail"
                    placeholder="選択してください"
                  />
                </FormGroup>
              </div>
            </div>

            <div
              v-if="
                categoryValue !== category[2] && categoryValue !== category[3]
              "
              class="c-form-default__row"
            >
              <FormGroup
                label="サムネイル画像（縦：0000px、横：0000px）"
                space="md"
              >
                <ImageUpload />
              </FormGroup>
            </div>

            <div
              v-if="mailValue === mail[1]"
              class="c-form-default__row"
            >
              <FormGroup label="ビル" space="md">
                <div class="c-list-result">
                  <div
                    v-if="information.listBuilding.length > 0"
                    class="c-list-result__list"
                  >
                    <div
                      v-for="(item, index) in information.listBuilding"
                      :key="index"
                      class="c-list-result__item"
                    >
                      <ButtonResult
                        :text="item.text"
                        @delete="handleDeleteResult(index)"
                      />
                    </div>
                  </div>
                  <ButtonText
                    styles="purple"
                    size="sm"
                    radius="radius-22"
                    text="選択する"
                  />
                </div>
              </FormGroup>
            </div>

            <div
              v-if="!category.includes(categoryValue)"
              class="c-form-default__row"
            >
              <div class="c-list-input -column">
                <InputCheckbox
                  value="このお知らせをWL+のトップページに表示する"
                  text="このお知らせをWL+のトップページに表示する"
                />
              </div>
            </div>

            <div
              v-if="category.includes(categoryValue)"
              class="c-form-default__row"
            >
              <FormGroup label="トップページへの表示" space="lg">
                <div class="c-list-input -column">
                  <InputCheckbox
                    v-if="categoryValue === category[0]"
                    key="1"
                    value="このお知らせをトップページに表示する"
                    text="このお知らせをトップページに表示する"
                  />

                  <template v-if="categoryValue === category[1]">
                    <InputCheckbox
                      key="2"
                      value="トップページの「お知らせエリア」に表示する"
                      text="トップページの「お知らせエリア」に表示する"
                    />
                    <InputCheckbox
                      key="3"
                      value="「おすすめのクーポンエリア」に表示する"
                      text="「おすすめのクーポンエリア」に表示する"
                    />
                  </template>

                  <InputCheckbox
                    v-if="
                      categoryValue === category[2] ||
                      categoryValue === category[3]
                    "
                    key="4"
                    value="重要なお知らせとしてトップページに表示する"
                    text="重要なお知らせとしてトップページに表示する"
                  />
                </div>
              </FormGroup>
            </div>
          </div>
        </div>

        <div class="l-section-default__in">
          <div class="c-form-default -wide">
            <TitleBorder tag="h2">お知らせ</TitleBorder>
            <div class="c-form-default__row">
              <FormGroup label="タイトル" sub="（最大000000文字まで）">
                <InputText placeholder="お知らせのタイトルを入力してください" />
              </FormGroup>
            </div>

            <div class="c-form-default__row">
              <FormGroup label="本文" sub="（最大000000文字まで）">
                <TextArea placeholder="お知らせの本文を入力してください" />
              </FormGroup>
            </div>

            <div class="c-form-default__row -full">
              <FormGroup
                label="添付画像"
                sub="（最大3枚まで選択できます）"
                space="md"
              >
                <ImageUpload isMultiple :maxFile="3" />
              </FormGroup>
            </div>

            <div class="c-form-default__row -full">
              <FormGroup
                label="添付ファイル"
                sub="（最大3ファイル、計000MBまで選択できます）"
                space="md"
              >
                <AttachUpload :maxFile="3" />
              </FormGroup>
            </div>
          </div>
        </div>

        <div class="l-section-default__in">
          <div class="c-form-default -wide">
            <TitleBorder tag="h2">通知メール設定</TitleBorder>
            <div class="c-form-default__row">
              <FormGroup
                label="おしらせ通知メールの送信"
                caution="※初回公開時のみ"
                space="lg"
              >
                <div class="c-list-input">
                  <InputRadio
                    label="yes"
                    name="sending"
                    value="送信する"
                    text="送信する"
                    isChecked
                  />
                  <InputRadio
                    label="ืน"
                    name="sending"
                    value="強制送信する"
                    text="強制送信する"
                  />
                  <InputRadio
                    label="no"
                    name="sending"
                    value="送信しない"
                    text="送信しない"
                  />
                </div>
              </FormGroup>
            </div>

            <div class="c-form-default__row">
              <FormGroup label="メール冒頭文">
                <TextArea
                  :value="`WORK-LIFE PLUS ユーザーのみなさま\r\nいつも WORK-LIFE PLUSをご利用いただき、誠にありがとうございます。`"
                />
              </FormGroup>
            </div>

            <div class="c-form-default__row">
              <FormGroup label="メール本文">
                <TextArea
                  ref="textAreaRef"
                  placeholder="通知メールで送りたい文章を入力してください"
                  size="lg"
                />
              </FormGroup>
              <p class="c-text-copy" @click.prevent="handleCopyText">
                お知らせ本文の内容をコピーする
              </p>
            </div>

            <div class="c-form-default__row">
              <FormGroup label="メール署名">
                <TextArea
                  :value="`送信元:WORK-LIFE PLUS運営事務局\r\n==============================================(c）2022 XXXXXXXX Company.All Rights Reserved. https://www.XXXXXXXX.co.jp/`"
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </form>
    </div>

    <BottomBar>
      <ButtonText text="プレビュー" styles="outline-purple" />
      <ButtonText text="登録内容確画面へ" isDisabled />
    </BottomBar>
  </LayoutDefault>
</template>

<script>
import { ref, reactive } from 'vue'
import copyToClipboard from 'copy-to-clipboard'

export default {
  setup() {
    useHead({ title: 'おしらせ管理_新規作成' })
    const category = ['一般', 'クーポン', 'システム', 'ビル']
    const categoryValue = ref(null)
    const mail = ['全体', 'ビル']
    const mailValue = ref(null)
    const textAreaRef = ref(null)
    const information = reactive({
      listBuilding: [{ text: 'PMO EX 日本橋茅場町' }],
    })

    const handleCopyText = () => {
      if (textAreaRef.value.$el.value) {
        copyToClipboard(textAreaRef.value.$el.value)
      }
    }

    const handleDeleteResult = (index) => {
      information.listBuilding.splice(index, 1)
    }

    return {
      category,
      categoryValue,
      mail,
      mailValue,
      textAreaRef,
      information,
      handleCopyText,
      handleDeleteResult,
    }
  },
}
</script>
