<template>
  <div class="c-nav-global">
    <figure class="c-nav-global__logo">
      <img
        src="@/assets/image/common/logo.png"
        alt="WORK-LIFE PLUS MANAGEMENT TOOLS"
        width="184"
        height="117"
        decoding="async"
      />
    </figure>
    <nav class="c-nav-global__container">
      <ul class="c-nav-global__list-main">
        <li>
          <a
            href="#"
            class="c-nav-global__link"
            :class="{ '-active': current === 1 }"
          >
            <i class="c-nav-global__icon"
              ><img
                src="@/assets/image/common/ico_alarm.svg"
                width="24"
                height="24"
                decoding="async"
                alt="お知らせ管理"
            /></i>
            <span>お知らせ管理</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="c-nav-global__link"
            :class="{ '-active': current === 2 }"
          >
            <i class="c-nav-global__icon"
              ><img
                src="@/assets/image/common/ico_building.svg"
                width="24"
                height="24"
                decoding="async"
                alt="ビル申請管理"
            /></i>
            <span>ビル申請管理</span>
          </a>
        </li>
        <li>
          <p
            class="c-nav-global__link -arrow"
            :class="{ '-open': isOpen }"
            @click="toggleSubMenu"
          >
            <i class="c-nav-global__icon"
              ><img
                src="@/assets/image/common/ico_user.svg"
                width="24"
                height="24"
                decoding="async"
                alt="ユーザー管理"
            /></i>
            <span>ユーザー管理</span>
          </p>
          <div
            ref="userMenuRef"
            class="c-nav-global__sub-menu"
            :class="{ '-open': isUserMenuOpen }"
          >
            <ul class="c-nav-global__list-sub">
              <li>
                <a
                  class="c-nav-global__link-sub"
                  :class="{ '-active': current === 3 }"
                  href="#"
                  >WL+ユーザー</a
                >
              </li>
              <li>
                <a
                  class="c-nav-global__link-sub"
                  :class="{ '-active': current === 4 }"
                  href="#"
                  >特権管理者</a
                >
              </li>
              <li>
                <a
                  class="c-nav-global__link-sub"
                  :class="{ '-active': current === 5 }"
                  href="#"
                  >WL+運営担当者</a
                >
              </li>
              <li>
                <a
                  class="c-nav-global__link-sub"
                  :class="{ '-active': current === 6 }"
                  href="#"
                  >ビル運営担当者</a
                >
              </li>
              <li>
                <a
                  class="c-nav-global__link-sub"
                  :class="{ '-active': current === 7 }"
                  href="#"
                  >ビル管理会社管理者</a
                >
              </li>
              <li>
                <a
                  class="c-nav-global__link-sub"
                  :class="{ '-active': current === 8 }"
                  href="#"
                  >テナント管理者</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            class="c-nav-global__link"
            :class="{ '-active': current === 9 }"
          >
            <i class="c-nav-global__icon"
              ><img
                src="@/assets/image/common/ico_document.svg"
                width="24"
                height="24"
                decoding="async"
                alt="管理マニュアル"
            /></i>
            <span>管理マニュアル</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="c-nav-global__profile">
      <p class="c-nav-global__profile-name">山田 太郎</p>
      <p class="c-nav-global__profile-text">株式会社電通国際情報サービス</p>
      <p class="c-nav-global__profile-text">企業コード：123456789</p>
      <a href="#" class="c-nav-global__logout">
        <i class="c-nav-global__logout-icon"></i>
        <span>ログアウト</span>
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'NavGlobal',
  props: {
    current: {
      type: Number,
      default: null,
    },
    isUserMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const userMenuRef = ref(null)
    const isOpen = ref(false)

    const setSubMenuHeight = () => {
      userMenuRef.value.style.maxHeight = isOpen.value
        ? `${userMenuRef.value.scrollHeight}px`
        : 0
    }

    const toggleSubMenu = () => {
      isOpen.value = !isOpen.value
      setSubMenuHeight()
    }

    onMounted(() => {
      isOpen.value = props.isUserMenuOpen
      setSubMenuHeight()
    })

    return {
      props,
      userMenuRef,
      isOpen,
      toggleSubMenu,
    }
  },
}
</script>
