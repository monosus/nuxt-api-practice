<template>
  <LayoutRegister>
    <TitleSubLine title="個人情報登録" sub="登録情報を入力してください。" />

    <div class="c-form-account-register -personal">
      <form method="post" action="#">
        <div class="c-form-default">
          <div class="c-form-default__row">
            <div class="c-form-column-member">
              <FormGroup label="氏（漢字）">
                <InputText placeholder="山田" value="" isLarge />
              </FormGroup>
              <FormGroup label="名（漢字）">
                <InputText placeholder="太郎" value="" isLarge />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member">
              <FormGroup label="氏（カナ）">
                <InputText placeholder="ヤマダ" value="" isLarge />
              </FormGroup>
              <FormGroup label="名（カナ）">
                <InputText placeholder="タロウ" value="" isLarge />
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
              <FormGroup label="ログインID（メールアドレス）">
                <InputText
                  placeholder="kawanosuke.kawada@isid.co.jp"
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
                label="各種通知受信用メールアドレス"
                suggestText="ログイン用のメールアドレスとは別のメールアドレスで<br class='_d-sm-none'>WL+からの各種連絡を受け取りたい方は入力してください。"
                isOptional
              >
                <InputText placeholder="email@exsample.com" value="" isLarge />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -block">
              <FormGroup
                label="連絡用電話番号"
                suggestText="ヘルプテキストが入ります"
                isOptional
              >
                <InputText placeholder="09012345678" value="" isLarge />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="生年月日" isOptional>
                <div class="c-form-column-member__col3">
                  <div class="c-form-column-member__col3-in">
                    <SelectBox
                      v-model="birthYearValue"
                      placeholder="年"
                      :options="
                        Array.from(Array(102).fill(1920), (x, i) => x + i)
                      "
                      isLarge
                    />
                  </div>
                  <div class="c-form-column-member__col3-in">
                    <SelectBox
                      v-model="birthMonthValue"
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
                      v-model="birthDayValue"
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

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="性別" isOptional>
                <SelectBox
                  v-model="genderValue"
                  placeholder="選択してください"
                  :options="['男性', '男性2', '男性3']"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="担当業務" isOptional>
                <SelectBox
                  v-model="positionValue"
                  placeholder="選択してください"
                  :options="['営業', '営業2', '営業3']"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="職階" isOptional>
                <SelectBox
                  placeholder="選択してください"
                  :options="['option1', 'option2', 'option3']"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="居住地" isOptional>
                <SelectBox
                  placeholder="選択してください"
                  :options="['option1', 'option2', 'option3']"
                  isLarge
                />
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row _mt-64">
            <div class="c-form-column-member -width-1b -w488">
              <FormGroup label="興味関心のある事項" isOptional>
                <TextDefault fontSize="14" lineHeight="1.429" color="gray">
                  以下の情報を登録いただきますと、興味関心に沿ったイベント<br class="_d-sm-none">などのご案内を差し上げることがございます。
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
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <InputCheckbox text="選択肢A選択肢A選択肢A選択肢A" isLarge />
                  <div class="c-list-input__box-detail">
                    <div class="c-list-input__left">
                      <InputCheckbox text="その他" isLarge />
                    </div>
                    <div class="c-list-input__right">
                      <FormGroup>
                        <InputText
                          placeholder="内容を記入してください"
                          isLarge
                          isDisabled
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>

          <div class="c-form-default__row _mt-64">
            <div class="c-form-column-member -width-1b">
              <FormGroup label="メール通知受け取り設定">
                <TextDefault
                  fontSize="14"
                  lineHeight="1.429"
                  color="gray"
                  class="_d-sm-none"
                >
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

              <ButtonText
                text="登録内容確認画面へ"
                size="lg"
                radius="normal"
                type="submit"
                width="100%"
                class="_mt-48"
                isDisabled
              />
              <ButtonText
                text="キャンセル"
                size="lg"
                radius="normal"
                styles="outline-purple"
                type="button"
                width="100%"
                class="_mt-8 _d-md-none"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </LayoutRegister>
</template>

<script>
export default {
  setup() {
    useHead({ title: '' })

    return {}
  },
}
</script>
