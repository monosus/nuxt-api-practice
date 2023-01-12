<template>
  <div class="c-wrapper-member">
    <div class="c-box-login">
      <div class="c-box-login__box">
        <img
          src="@/assets/image/member/common/logo_login.svg"
          class="c-box-login__logo"
          decoding="async"
          width="166"
          height="140"
          alt="NOMURA WORK-LIFE PLUS"
        />
        <FormGroup label="メールアドレス">
          <InputText placeholder="email@exsample.com" isLarge />
        </FormGroup>

        <FormGroup label="パスワード" class="_mt-24">
          <InputText type="password" placeholder="パスワードを入力" isLarge />
        </FormGroup>

        <ButtonText
          class="_mt-40"
          text="ログイン"
          width="100%"
          styles="purple"
          size="lg"
        />
        <ButtonText
          class="_mt-16"
          text="新規会員登録はこちら"
          width="100%"
          styles="outline-purple"
          size="lg"
        />
        <div class="_mt-20 _ta-center">
          <LinkItem href="#" text="パスワードを忘れた方はこちら" />
        </div>
      </div>
    </div>
  </div>
</template>
