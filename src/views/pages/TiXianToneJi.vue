<template>
  <div>
    <top-nav-bar :nav_data="nav_data"></top-nav-bar>

    <time-change-bar :select_data="select_data"></time-change-bar>

    <table-bar :table_data="table_data">
      <template v-slot:data_stat>
          <!-- 需要修改 -->
          <!-- 数字写在span里，文字写在外面 -->
        <div>总共 <span>{{table_data.info_num_list[0]}}</span> 人</div>
      </template>
    </table-bar>
  </div>
</template>

<script>
// 不同页面需要修改
import { get_tixiantongji } from "@/network/pages.js";

import TopNavBar from "@/components/comtent/TopNavBar.vue";
import TimeChangeBar from "@/components/comtent/TimeChangeBar.vue";
import TableBar from "@/components/comtent/TableBar.vue";
export default {
  components: {
    TopNavBar,
    TimeChangeBar,
    TableBar,
  },
  data() {
    return {
      tixiantongji_data: {},
      nav_data: [],
      select_data: {},
      table_data: {},
    };
  },
  methods: {
    // 不同页面需要修改
    getTixiantongji() {
      get_tixiantongji().then((res) => {
        console.log(res);
        this.tixiantongji_data = res.data;
        this.nav_data = res.data.top_title_list;
        this.select_data = res.data.select_data;
        this.table_data = res.data.table_data;
        console.log(this.table_data.title_list);
      });
    },
  },
  created() {
    // 不同页面需要修改
    this.getTixiantongji();
  },
};
</script>

<style>
</style>