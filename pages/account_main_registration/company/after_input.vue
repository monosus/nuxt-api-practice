<template>
  <LayoutRegister>
    <TitleSubLine
      title="企業コードを入力してください"
      sub="所属する企業から受け取った企業コードを入力してください。"
    />
    <div class="c-form-account-register">
      <form action="#" method="post">
        <FormGroup label="企業コード">
          <InputText
            v-model="inputValue"
            placeholder="企業コードを入力"
            isLarge
          />
        </FormGroup>
        <ButtonText
          class="_mt-40"
          text="入力完了"
          size="lg"
          width="100%"
          styles="purple"
          :isDisabled="!inputValue"
        />
      </form>
    </div>
  </LayoutRegister>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputValue = ref('123456')
    return { inputValue }
  },
}
</script>
