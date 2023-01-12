<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink :to="link">{{ link }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const links = [
      '/employee/search',
      '/employee/search_nodata',
      '/employee/register',
      '/employee/register_entered',
      '/employee/register_error',
      '/employee/register_confirm',
      '/employee/register_complete',
      '/employee/csv_select',
      '/employee/csv_check',
      '/employee/employee_detail',
      '/employee/employee_edit',
      '/employee/employee_edit_confirm',
      '/employee/employee_edit_complete',
      '/employee/employee_delete_confirm',
      '/employee/employee_delete_complete',
      '/employee/employee_enrollment',
      '/employee/search_employee',
      '/employee/search_employee_building',
      '/employee/search_employee_business',
      '/information/search',
      '/information/search_nodata',
      '/information/register',
      '/information/register_confirm',
      '/information/register_complete',
      '/information/register_private_complete',
      '/information/detail',
      '/building/search',
      '/building/search_nodata',
      '/building/detail',
      '/building/detail_child',
      '/building/detail_parent',
      '/building/approval',
      '/building/send_back',
      '/building/withdrawal',
      '/building/parent_application',
      '/building/parent_application_error',
      '/login',
      '/terms',
      '/account_main_registration/company/before_input',
      '/account_main_registration/company/after_input',
      '/account_main_registration/personal/before_input',
      '/account_main_registration/personal/after_input',
      '/account_main_registration/personal/error',
      '/account_main_registration/personal/before_term',
      '/account_main_registration/personal/after_term',
      '/account_main_registration/company/complete',
      '/top/none_notice',
      '/top/notice',
      '/notices/list',
      '/notices/detail',
      '/video_contents/list',
      '/video_contents/detail',
      '/services/list_work',
      '/services/list_life',
      '/services/detail',
      '/service_application/entered',
      '/service_application/confirm',
      '/service_application/complete',
      '/building_related/no_application',
      '/building_related/application',
      '/bill_application/list',
      '/bill_application/detail',
      'bill_application/index8-6',
      'bill_application/index8-8',
      'bill_application/index8-9',
      'bill_application/index8-10',
      'bill_application/index8-11',
      'bill_application/index8-13',
      'bill_application/index8-14',
      'bill_application/index8-15',
      'bill_application/index8-4',
      '/my_page',
      '/my_page/edit',
      '/faq',
    ]

    return { links }
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding: 20px 0;
  margin-left: 40px;
  list-style-type: disc;

  > li:not(:first-child) {
    margin-top: 5px;
  }
}
</style>
