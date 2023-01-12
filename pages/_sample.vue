<template>
  <LayoutDefault pageTitle="登録内容確認画面" isUserMenuOpen :current="3">
    <template #headerButton>
      <ButtonText href="#" text="中止して一覧へ戻る" styles="outline-red" />
    </template>

    <div class="l-section-default">
      <div class="l-section-default__in">
        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Table 1</TextDefault
        >
        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 52px" />
              <col style="width: 336px" />
              <col style="width: 175px" />
              <col style="width: 108px" />
              <col style="width: 112px" />
              <col style="width: 194px" />
              <col style="width: 210px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th -sticky">
                  <InputCheckbox />
                </th>
                <th class="c-table-default__th -descending">
                  <span>タイトル</span>
                </th>
                <th class="c-table-default__th"><span>カテゴリ</span></th>
                <th class="c-table-default__th"><span>公開日</span></th>
                <th class="c-table-default__th"><span>公開区分</span></th>
                <th class="c-table-default__th">
                  <span>トップページへの掲載</span>
                </th>
                <th class="c-table-default__th"><span>ビル</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるように新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるように
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">一般</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">2022/12/31</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">公開</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">あり</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">全体公開</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    新サービス紹介イベント
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">イベント・セミナー</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">2022/12/31</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">非公開</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">あり</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    PMO EX 日本橋茅場町, 他10件
                  </p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">
                    新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるように新しくXXXXXXXのサービスが使えるようになりました新しくXXXXXXXのサービスが使えるように
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">一般</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">2022/12/31</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">公開</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">あり</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__two-line">全体公開</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Table 2</TextDefault
        >
        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 96px" />
              <col style="width: 148px" />
              <col style="width: 232px" />
              <col style="width: 148px" />
              <col style="width: 232px" />
              <col style="width: 148px" />
              <col style="width: 232px" />
              <col style="width: 208px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th"><span>ステータス</span></th>
                <th class="c-table-default__th -descending">
                  <span>申請日</span>
                </th>
                <th class="c-table-default__th"><span>申請No.</span></th>
                <th class="c-table-default__th -ascending">
                  <span>申請名</span>
                </th>
                <th class="c-table-default__th"><span>親申請No.</span></th>
                <th class="c-table-default__th"><span>企業</span></th>
                <th class="c-table-default__th"><span>申請者</span></th>
                <th class="c-table-default__th">
                  <span>申請者メールアドレス</span>
                </th>
                <th class="c-table-default__th"><span>ビル</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="未対応" styles="red" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">A-1000002</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">作業届</p>
                </td>
                <td class="c-table-default__td"></td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社テナントオフィスビ株式会社テナントオフィスビ
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="差し戻し中" styles="black" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">A-1000002</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">危険物使用（持込）許可願</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    <LinkItem href="#" text="A-1000001" isFontSm />
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社テナントオフィスビ株式会社テナントオフィスビ
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    勅使河原 八九十勅使河原 八九十
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td">
                  <LabelTag text="承認済み" styles="purple" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">A-1000002</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">危険物使用（持込）許可願</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    <LinkItem href="#" text="A-1000001" isFontSm />
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社テナントオフィスビ株式会社テナントオフィスビ
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Table 3</TextDefault
        >
        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 52px" />
              <col style="width: 112px" />
              <col style="width: 104px" />
              <col style="width: 132px" />
              <col style="width: 248px" />
              <col style="width: 272px" />
              <col style="width: 232px" />
              <col style="width: 140px" />
              <col style="width: 160px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th -sticky">
                  <InputCheckbox />
                </th>
                <th class="c-table-default__th"><span>ステータス</span></th>
                <th class="c-table-default__th"><span>在籍確認</span></th>
                <th class="c-table-default__th -descending">
                  <span>氏名（漢字）</span>
                </th>
                <th class="c-table-default__th"><span>メールアドレス</span></th>
                <th class="c-table-default__th"><span>企業</span></th>
                <th class="c-table-default__th"><span>入居ビル</span></th>
                <th class="c-table-default__th"><span>登録ルート</span></th>
                <th class="c-table-default__th">
                  <span>最終ログイン時間</span>
                </th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <LabelTag text="仮登録" styles="gray" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">確認済み</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社電通国際情報サービス
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">管理者登録</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31/23:59</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <LabelTag text="本登録" styles="purple" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">確認済み</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    勅使河原 八九十勅使河原 八九十
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社電通国際情報国際情報サー株式会社電通国際情報国際情報サー
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    PMO EX XYZ 123日本橋茅場PMO EX XYZ 123日本橋茅場
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">管理者登録</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31/23:59</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <LabelTag text="本登録" styles="purple" />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">確認済み</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社電通国際情報サービス
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">管理者登録</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31/23:59</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Table 4</TextDefault
        >
        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 52px" />
              <col style="width: 104px" />
              <col style="width: 148px" />
              <col style="width: 232px" />
              <col style="width: 272px" />
              <col style="width: 232px" />
              <col style="width: 140px" />
              <col style="width: 160px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th -sticky">
                  <InputCheckbox />
                </th>
                <th class="c-table-default__th"><span>在籍確認</span></th>
                <th class="c-table-default__th"><span>氏名（漢字）</span></th>
                <th class="c-table-default__th"><span>メールアドレス</span></th>
                <th class="c-table-default__th"><span>企業</span></th>
                <th class="c-table-default__th"><span>入居ビル</span></th>
                <th class="c-table-default__th"><span>登録ルート</span></th>
                <th class="c-table-default__th">
                  <span>最終ログイン時間</span>
                </th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">確認済み</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社電通国際情報サービス
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">管理者登録</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31/23:59</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">確認済み</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社電通国際情報サービス
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">管理者登録</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31/23:59</p>
                </td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">確認済み</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">山田 山太郎</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    yamataro.yamada@worklifeplus.co.jp
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">
                    株式会社電通国際情報サービス
                  </p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">PMO EX 日本橋茅場町</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">管理者登録</p>
                </td>
                <td class="c-table-default__td">
                  <p class="c-table-default__text">2022/12/31/23:59</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Table 5</TextDefault
        >
        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 52px" />
              <col style="width: 332px" />
              <col style="width: 552px" />
              <col style="width: 248px" />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th -sticky">
                  <InputCheckbox />
                </th>
                <th class="c-table-default__th"><span>企業</span></th>
                <th class="c-table-default__th"><span>住所</span></th>
                <th class="c-table-default__th"><span>入居ビル</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  株式会社電通国際情報サービス
                </td>
                <td class="c-table-default__td">
                  愛知県名古屋市中区栄4-2-29 JRE名古屋広小路プレイス内
                </td>
                <td class="c-table-default__td">PMO EX 日本橋茅場町</td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  株式会社電通国際情報サービス
                </td>
                <td class="c-table-default__td">
                  愛知県名古屋市中区栄4-2-29 JRE名古屋広小路プレイス内
                </td>
                <td class="c-table-default__td">PMO EX 日本橋茅場町</td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  株式会社電通国際情報サービス
                </td>
                <td class="c-table-default__td">
                  愛知県名古屋市中区栄4-2-29 JRE名古屋広小路プレイス内
                </td>
                <td class="c-table-default__td">PMO EX 日本橋茅場町</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Table 6</TextDefault
        >
        <div class="c-table-default">
          <table class="c-table-default__table">
            <colgroup>
              <col style="width: 52px" />
              <col />
            </colgroup>
            <thead class="c-table-default__thead">
              <tr class="c-table-default__tr">
                <th class="c-table-default__th -sticky">
                  <InputCheckbox />
                </th>
                <th class="c-table-default__th"><span>ビル</span></th>
              </tr>
            </thead>
            <tbody class="c-table-default__tbody">
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">PMO EX 日本橋茅場町</td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">PMO日本橋大伝馬町</td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">PMO 新日本橋</td>
              </tr>
              <tr class="c-table-default__tr">
                <td class="c-table-default__td -sticky">
                  <InputCheckbox />
                </td>
                <td class="c-table-default__td">
                  PMO 新日本橋新日本橋新日本橋新日本橋
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >.c-box-info</TextDefault
        >
        <div class="c-box-info">
          <div class="c-box-info__in">
            <p class="c-box-info__title">
              公開区分：<span class="c-box-info__category">公開</span>
            </p>
            <p class="c-box-info__text">
              現在の設定は<span class="c-box-info__bold">公開</span
              >のため、『保存する』のボタンを押すと、このお知らせはすぐに公開されます。下書き保存をしたい場合は、公開区分を『<span
                class="c-box-info__bold"
                >非公開</span
              >』に変更した後に『保存する』のボタンを押してください。
            </p>
          </div>
        </div>

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >BoxAttach</TextDefault
        >
        <BoxAttach :listFile="state.listFile" @delete="handleDeleteFile" />

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Attach upload</TextDefault
        >
        <AttachUpload :maxFile="3" />

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >ListThumbnail</TextDefault
        >
        <ListThumbnail
          :imgUploads="state.imgUploads"
          @delete="handleDeleteImage"
        />

        <TextDefault tag="h2" fontSize="20" lineHeight="1.6" isBold
          >Thumbnail Upload</TextDefault
        >
        <ImageUpload isMultiple :maxFile="3" />
      </div>
    </div>
  </LayoutDefault>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    useHead({ title: 'テナント従業員管理_新規追加（1件）_登録内容確認' })
    const state = reactive({
      listFile: [
        {
          text: 'サービス概要資料.pdf',
          hasIcon: true,
        },
        {
          text: 'サービス申し込みテンプレート.xlsx',
          hasIcon: true,
        },
        {
          text: '参考画像.jpg',
          hasIcon: true,
        },
      ],
      imgUploads: [
        {
          src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url),
          hasIcon: true,
        },
        {
          src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url),
          hasIcon: true,
        },
        {
          src: new URL(`@/assets/image/common/thumbnail.jpg`, import.meta.url),
          hasIcon: true,
        },
      ],
    })

    const handleDeleteFile = (index) => {
      state.listFile.splice(index, 1)
    }

    const handleDeleteImage = (index) => {
      state.imgUploads.splice(index, 1)
    }

    return {
      state,
      handleDeleteFile,
      handleDeleteImage,
    }
  },
}
</script>
