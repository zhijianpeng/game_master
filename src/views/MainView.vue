<template>
  <div class="app">
    <!-- 顶部栏 -->
    <top-bar>
      <!-- <template v-slot:left>
                <div>
                    分类栏
                </div>
            </template> -->
    </top-bar>

    <!-- 下面这些每个页面都不一样 -->
    <!-- 顶部导航栏 -->
    <!-- <top-nav-bar></top-nav-bar> -->

    <!-- 中间时间选项栏 -->
    <!-- <time-change-bar></time-change-bar> -->

    <!-- 中下侧数据表格栏 -->
    <!-- <table-bar></table-bar> -->

    <!-- 提示 -->
    <!-- 有的有，有的没有 -->
    <!-- <div>
      <explain-bar></explain-bar>
    </div> -->

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 左侧选项栏 -->
    <left-bar :left_datas="left_datas"></left-bar>

    <!-- 底部栏 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from "@/components/comtent/TopBar.vue";
import TopNavBar from "@/components/comtent/TopNavBar.vue";
import TimeChangeBar from "@/components/comtent/TimeChangeBar.vue";
import TableBar from "@/components/comtent/TableBar.vue";
import LeftBar from "@/components/comtent/LeftBar.vue";
import ExplainBar from "@/components/common/ExplainBar.vue";
import BottomBar from "@/components/comtent/BottomBar.vue";

import { getLeftBar } from "@/network/leftBar.js";

export default {
  components: {
    TopBar,
    TopNavBar,
    TimeChangeBar,
    TableBar,
    LeftBar,
    ExplainBar,
    BottomBar,
  },
  data() {
    return {
      left_datas: [],
    };
  },
  methods: {
    getLeft() {
      getLeftBar().then((res) => {
        this.left_datas = res.data;
      });
    },
  },
  created() {
    this.getLeft();
  },
};
</script>

<style>
</style>