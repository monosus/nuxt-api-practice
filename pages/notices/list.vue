<template>
  <LayoutMember :current="5">
    <TitleGrid titleEn="News" titleJp="お知らせ" />
    <div class="l-section-member">
      <div class="l-section-member__in">
        <div class="c-form-default__row">
          <div class="c-form-default__select-category">
            <FormGroup label="カテゴリ">
              <SelectBox
                placeholder="すべて"
                :options="['すべて1', 'すべて2', 'すべて3']"
                isLarge
              />
            </FormGroup>
          </div>
        </div>

        <ul class="c-list-card-post _mt-32">
          <li v-for="(item, index) in newsList" :key="index">
            <CardPost v-bind="item" />
          </li>
        </ul>
        <PaginationArea />
      </div>

      <NavFooter />
    </div>
  </LayoutMember>
</template>

<script>
export default {
  async setup() {
    const { data: newsList } = await useFetch('/api/news', {
      params: { qty: 5 },
    })

    return {
      newsList,
    }
  },
}
</script>
