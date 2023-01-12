<template>
  <table class="c-table-show-csv">
    <thead class="c-table-show-csv__thead">
      <tr class="c-table-show-csv__tr">
        <th class="c-table-show-csv__th">行数</th>
        <th class="c-table-show-csv__th">氏名（漢字）</th>
        <th class="c-table-show-csv__th">メールアドレス</th>
        <th class="c-table-show-csv__th">登録できない理由</th>
      </tr>
    </thead>
    <tbody class="c-table-show-csv__tbody">
      <tr
        v-for="(item, index) in csvData"
        :key="index"
        class="c-table-show-csv__tr"
      >
        <td class="c-table-show-csv__td">{{ item.number }}</td>
        <td class="c-table-show-csv__td">{{ item.name }}</td>
        <td class="c-table-show-csv__td" :title="item.email">
          <p>{{ item.email }}</p>
        </td>
        <td class="c-table-show-csv__td">{{ item.reason }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableShowCsv',
  props: {
    csvData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>
