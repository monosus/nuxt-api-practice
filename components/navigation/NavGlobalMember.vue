<template>
  <div class="c-nav-global-member">
    <div
      class="c-nav-global-member__menu"
      :class="{ '-open': isMenuOpen }"
      @click="toggleMenu"
    >
      <span />
      <span />
      <span />
      <span />
    </div>

    <figure v-if="!pageTitle" class="c-nav-global-member__logo-sm">
      <img
        src="@/assets/image/member/common/logo_member_sm.svg"
        alt="NOMURA WORK-LIFE PLUS"
        width="30"
        height="21"
        decoding="async"
      />
    </figure>

    <p v-if="pageTitle" class="c-nav-global-member__page-title">
      {{ pageTitle }}
    </p>

    <div class="c-nav-global-member__in" :class="{ '-open': isMenuOpen }">
      <figure class="c-nav-global-member__logo">
        <img
          src="@/assets/image/member/common/logo_member.svg"
          alt="NOMURA WORK-LIFE PLUS"
          width="177"
          height="28"
          decoding="async"
        />
      </figure>
      <nav class="c-nav-global-member__container">
        <ul
          class="c-nav-global-member__list-main"
          :class="{ '-popup-open': !!currentPopup }"
        >
          <li>
            <a
              href="#"
              class="c-nav-global-member__link"
              :class="{ '-active': current === 1 }"
            >
              <i class="c-nav-global-member__icon">
                <img
                  src="@/assets/image/member/common/ico_home.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="ホーム"
                />
              </i>
              <span>ホーム</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="c-nav-global-member__link -arrow -purple"
              :class="{
                '-active': currentPopup === 'work' || current === 2,
                '-open': isAccordionOpen.work,
              }"
              @click.prevent="toggleAccordion('work')"
              @mouseenter="popupOpen('work')"
              @mouseleave="popupClose('work')"
            >
              <i class="c-nav-global-member__icon">
                <img
                  v-if="!isAccordionOpen.work"
                  src="@/assets/image/member/common/ico_work.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="WORK"
                />
                <img
                  v-if="isAccordionOpen.work"
                  src="@/assets/image/member/common/ico_work_white.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="WORK"
                />
              </i>
              <span>WORK</span>
            </a>

            <div ref="accordionWorkRef" class="c-nav-global-member__accordion">
              <div class="c-nav-global-member__accordion-main">
                <a href="#" class="c-nav-global-member__accordion-main-link">
                  <img
                    class="c-nav-global-member__accordion-image"
                    src="@/assets/image/member/common/img_gnav_work.jpg"
                    width="256"
                    height="120"
                    decoding="async"
                    alt="WORKコンシェルジュ"
                  />
                  <LinkItem
                    tag="p"
                    iconName="arrow_next_purple"
                    position="right"
                    text="WORKコンシェルジュ"
                    hasNoUnderline
                  />
                  <TextDefault class="_mt-8" fontSize="14" lineHeight="1.4">
                    「働く」に関して何でもご相談ください
                  </TextDefault>
                </a>
              </div>

              <ul class="c-nav-global-member__accordion-nav">
                <li>
                  <a href="#" class="c-nav-global-member__accordion-link">
                    さまざまな場所で働く
                  </a>
                </li>
                <li>
                  <a href="#" class="c-nav-global-member__accordion-link">
                    専門家に相談する
                  </a>
                </li>
                <li>
                  <a href="#" class="c-nav-global-member__accordion-link">
                    会議室・備品予約
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="c-nav-global-member__link -arrow -yellow"
              :class="{
                '-active': currentPopup === 'life' || current === 3,
                '-open': isAccordionOpen.life,
              }"
              @click.prevent="toggleAccordion('life')"
              @mouseenter="popupOpen('life')"
              @mouseleave="popupClose('life')"
            >
              <i class="c-nav-global-member__icon">
                <img
                  v-if="!isAccordionOpen.life"
                  src="@/assets/image/member/common/ico_life.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="LIFE"
                />
                <img
                  v-if="isAccordionOpen.life"
                  src="@/assets/image/member/common/ico_life_white.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="LIFE"
                />
              </i>
              <span>LIFE</span>
            </a>

            <div ref="accordionLifeRef" class="c-nav-global-member__accordion">
              <div class="c-nav-global-member__accordion-main">
                <a href="#" class="c-nav-global-member__accordion-main-link">
                  <img
                    src="@/assets/image/member/common/img_gnav_life.jpg"
                    class="c-nav-global-member__accordion-image"
                    width="256"
                    height="120"
                    decoding="async"
                    alt="LIFEコンシェルジュ"
                  />
                  <LinkItem
                    tag="p"
                    iconName="arrow_next_purple"
                    position="right"
                    text="LIFEコンシェルジュ"
                    hasNoUnderline
                  />
                  <TextDefault class="_mt-8" fontSize="14" lineHeight="1.4">
                    「暮らし」に関する何でもお気軽に
                  </TextDefault>
                </a>
              </div>

              <ul class="c-nav-global-member__accordion-nav">
                <li>
                  <a href="#" class="c-nav-global-member__accordion-link">
                    おトクに使う
                  </a>
                </li>
                <li>
                  <a href="#" class="c-nav-global-member__accordion-link">
                    フィットネス
                  </a>
                </li>
                <li>
                  <a href="#" class="c-nav-global-member__accordion-link">
                    専門家に相談する
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="c-nav-global-member__link"
              :class="{ '-active': current === 4 }"
            >
              <i class="c-nav-global-member__icon">
                <img
                  src="@/assets/image/member/common/ico_video.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="動画コンテンツ"
                />
              </i>
              <span>動画コンテンツ</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="c-nav-global-member__link"
              :class="{ '-active': current === 5 }"
            >
              <i class="c-nav-global-member__icon">
                <img
                  src="@/assets/image/member/common/ico_alert.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="お知らせ"
                />
              </i>
              <span>お知らせ</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="c-nav-global-member__link"
              :class="{ '-active': current === 6 }"
            >
              <i class="c-nav-global-member__icon">
                <img
                  src="@/assets/image/member/common/ico_building.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="ビル関連"
                />
              </i>
              <span>ビル関連</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="c-nav-global-member__link"
              :class="{ '-active': current === 7 }"
            >
              <i class="c-nav-global-member__icon">
                <img
                  src="@/assets/image/member/common/ico_user.svg"
                  width="24"
                  height="24"
                  decoding="async"
                  alt="マイページ"
                />
              </i>
              <span>マイページ</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="c-nav-global-member__profile">
        <p class="c-nav-global-member__profile-name">山田 太郎</p>
        <p class="c-nav-global-member__profile-text">
          株式会社電通国際情報サービス
        </p>
        <div class="c-nav-global-member__admin">
          <a href="#" class="c-nav-global-member__admin-button">
            <img
              class="c-nav-global-member__admin-icon"
              src="@/assets/image/common/ico_blank_purple.svg"
              width="24"
              height="24"
              decoding="async"
              alt=""
            />
            <span>管理者ページ</span>
          </a>
        </div>
        <a href="#" class="c-nav-global-member__logout">
          <i class="c-nav-global-member__logout-icon" />
          <span>ログアウト</span>
        </a>
      </div>
    </div>

    <div v-if="$slots.spButton" class="c-nav-global-member__button-sp">
      <slot name="spButton" />
    </div>

    <Transition name="popup">
      <NavGlobalPopup
        v-show="currentPopup === 'work'"
        v-bind="navPopup.work"
        class="c-nav-global-member__popup"
        @mouseenter="clearPopupTimeout"
        @mouseleave="popupClose('work')"
      />
    </Transition>

    <Transition name="popup">
      <NavGlobalPopup
        v-show="currentPopup === 'life'"
        v-bind="navPopup.life"
        class="c-nav-global-member__popup"
        @mouseenter="clearPopupTimeout"
        @mouseleave="popupClose('life')"
      />
    </Transition>

    <Teleport to="body">
      <Transition name="overlay">
        <div
          v-if="isShowOverlay"
          class="c-nav-global-member__overlay"
          @click="handleOverlayClick"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from 'vue'

export default {
  name: 'NavGlobalMember',
  props: {
    current: {
      type: Number,
      default: null,
    },
    pageTitle: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const navPopup = {
      work: {
        color: 'purple',
        main: {
          image: new URL(
            '@/assets/image/member/common/img_gnav_work.jpg',
            import.meta.url
          ),
          linkText: 'WORKコンシェルジュ',
          linkUrl: '#',
          text: '「働く」に関して何でもご相談ください',
        },
        sub: [
          {
            title: 'サービス',
            linkText: 'さまざまな場所で働く',
            linkUrl: '#',
            text: '概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入りま',
          },
          {
            title: 'サービス for バックオフィス',
            linkText: '専門家に相談する',
            linkUrl: '#',
            text: '概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入りま',
          },
          {
            title: 'オフィスツール',
            linkText: '会議室・備品予約',
            linkUrl: '#',
            text: '概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入りま',
          },
        ],
      },
      life: {
        color: 'yellow',
        main: {
          image: new URL(
            '@/assets/image/member/common/img_gnav_life.jpg',
            import.meta.url
          ),
          linkText: 'LIFEコンシェルジュ',
          linkUrl: '#',
          text: '「暮らし」に関する何でもお気軽に',
        },
        sub: [
          {
            title: 'サービス',
            linkText: 'おトクに使う',
            linkUrl: '#',
            text: '概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入りま',
          },
          {
            linkText: 'フィットネス',
            linkUrl: '#',
            text: '概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入りま',
          },
          {
            linkText: '専門家に相談する',
            linkUrl: '#',
            text: '概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入ります概要説明が入りま',
          },
        ],
      },
    }

    const isSP = ref(null)
    const isMenuOpen = ref(false)
    const isShowOverlay = ref(false)
    const currentPopup = ref('null')
    const accordionWorkRef = ref(null)
    const accordionLifeRef = ref(null)
    const timeoutId = ref(null)
    const isAccordionOpen = reactive({
      work: false,
      left: false,
    })

    const toggleMenu = () => {
      if (!isSP.value) return
      isMenuOpen.value = !isMenuOpen.value
      isShowOverlay.value = isMenuOpen.value
    }

    const toggleAccordion = (target) => {
      if (!isSP.value) return

      const accordion = {
        work: accordionWorkRef.value,
        life: accordionLifeRef.value,
      }
      isAccordionOpen[target] = !isAccordionOpen[target]
      accordion[target].style.maxHeight = isAccordionOpen[target]
        ? `${accordion[target].scrollHeight}px`
        : 0
    }

    const popupOpen = (target) => {
      if (isSP.value) return

      clearPopupTimeout()
      timeoutId.value = setTimeout(() => {
        currentPopup.value = target
        isShowOverlay.value = true
      }, 300)
    }

    const popupClose = () => {
      if (isSP.value) return

      clearPopupTimeout()
      timeoutId.value = setTimeout(() => {
        currentPopup.value = null
        isShowOverlay.value = false
      }, 300)
    }

    const clearPopupTimeout = () => {
      clearTimeout(timeoutId.value)
    }

    const checkMediaQuery = (event) => {
      isSP.value = event.matches
    }

    const handleOverlayClick = () => {
      if (!isSP.value) return
      isMenuOpen.value = false
      isShowOverlay.value = false
    }

    onMounted(() => {
      const mq = window.matchMedia('(max-width: 1279px)')
      mq.addEventListener('change', checkMediaQuery)
      isSP.value = mq.matches
    })

    watch(
      () => isSP.value,
      () => {
        if (isSP.value) {
          currentPopup.value = null
        } else {
          isMenuOpen.value = false
          isAccordionOpen.work = false
          isAccordionOpen.life = false
          accordionWorkRef.value.style.maxHeight = 0
          accordionLifeRef.value.style.maxHeight = 0
          isShowOverlay.value = false
        }
      }
    )

    return {
      props,
      navPopup,
      isMenuOpen,
      isShowOverlay,
      currentPopup,
      accordionWorkRef,
      accordionLifeRef,
      isAccordionOpen,
      toggleMenu,
      toggleAccordion,
      popupOpen,
      popupClose,
      clearPopupTimeout,
      handleOverlayClick,
    }
  },
}
</script>
