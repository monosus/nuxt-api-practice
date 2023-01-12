<template>
  <LayoutMember :current="2" spHide>
    <HeaderBarSticky text="オフィスコンシェルジュ申込画面" textSp="申込画面">
      <ButtonText
        class="_d-sm-none"
        text="申込を中止する"
        styles="outline-red"
        size="lg"
      />
      <ButtonText
        class="_d-md-none"
        text="中止"
        styles="outline-red"
        size="sm"
      />
    </HeaderBarSticky>

    <div class="l-section-member">
      <div class="l-section-member__in _pb-160 _pb-sm-124 _pt-56 _pt-sm-32">
        <TextDefault fontSize="14" class="_mb-40 _d-sm-none"
          >オフィスコンシェルジュ申し込み内容を入力してください。</TextDefault
        >
        <TextDefault
          fontSize="16"
          isBold
          class="_mb-48 _d-md-none"
          lineHeight="calc(26/16)"
          >オフィスコンシェルジュ申し込み内容を入力してください。</TextDefault
        >
        <form method="post" action="#">
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
              <div class="c-form-column-member">
                <FormGroup label="氏（カナ）">
                  <InputText placeholder="ヤマダ" value="カワダ" isLarge />
                </FormGroup>
                <FormGroup label="名（カナ）">
                  <InputText placeholder="タロウ" value="カワノスケ" isLarge />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -width-1b">
                <FormGroup label="企業名">
                  <InputText
                    placeholder="入力してください"
                    value="株式会社テナントオフィス"
                    isLarge
                    isDisabled
                  />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -width-1b">
                <FormGroup label="部署名" isOptional>
                  <InputText placeholder="総務部" value="" isLarge />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -width-1b">
                <FormGroup label="住所" errorText="エラーメッセージが入ります">
                  <InputText
                    placeholder="東京都港区港南2-17-1"
                    value=""
                    isLarge
                    hasError
                  />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -width-1b">
                <FormGroup label="入居ビル">
                  <SelectBox
                    v-model="buildingValue"
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
                <FormGroup label="メールアドレス">
                  <InputText
                    placeholder="email@exsample.com"
                    value="kawanosuke.kawada@isid.co.jp"
                    isLarge
                    isDisabled
                  />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -width-1b">
                <FormGroup
                  label="電話番号"
                  errorText="エラーメッセージが入ります"
                >
                  <InputText
                    placeholder="0012349876"
                    value=""
                    isLarge
                    hasError
                  />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -width-1b">
                <FormGroup label="FAX番号" isOptional>
                  <InputText placeholder="0012349876" value="" isLarge />
                </FormGroup>
              </div>
            </div>

            <div class="c-form-default__row">
              <div class="c-form-column-member -full -width-1b">
                <FormGroup
                  label="お問い合わせ内容"
                  errorText="エラーメッセージが入ります"
                >
                  <TextArea
                    placeholder="お問い合わせ内容を入力。最大0000文字まで入力できます。"
                    value=""
                    size="lg"
                    class="-sm-lg"
                    hasError
                  />
                </FormGroup>
              </div>
            </div>

            <BottomBar isResponsive isStaticSp class="_mt-64">
              <ButtonText text="申込内容を確認する" />
            </BottomBar>
          </div>
        </form>
      </div>
    </div>
  </LayoutMember>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    useHead({ title: '' })
    const buildingValue = ref('PMO EX 日本橋茅場町')

    return {
      buildingValue,
    }
  },
}
</script>
