<template>
  <div id="time_change_bar">
    <!-- 选择时间 -->
    <div class="time_select">
      <!-- 日历式日期选择 -->
      <div class="data_pick">
        <data-pick ref="calendar_date"></data-pick>
      </div>

      <!-- 按钮式时间选择 -->
      <div>
        <data-btns ref="date_btns"></data-btns>
      </div>
    </div>

    <!-- 选择种类 -->
    <div class="type_select">
      <type-pick ref="select" v-bind="$attrs"></type-pick>
    </div>

    <!-- 查询按钮 -->
    <button class="query_btn" @click="btnClick">查询</button>
  </div>
</template>

<script>
import DataPick from "@/components/common/DataPick.vue";
import DataBtns from "@/components/common/DataBtns.vue";
import TypePick from "@/components/common/TypePick.vue";
export default {
  data() {
    return {
      select_list: [],
    };
  },
  components: {
    DataPick,
    DataBtns,
    TypePick,
  },
  methods: {
    btnClick() {
      console.log(this.$refs.select.get_select_data);
      console.log(this.$refs.date_btns.get_data);
      if (this.$refs.calendar_date.get_time.length > 1) {
        console.log(this.$refs.calendar_date.get_time);
      }
    },
  },
};
</script>

<style scoped>
#time_change_bar {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 36px);
  min-width: 1408px;
  height: 226px;
  margin: 18px;
  background-color: #ffffff;
}

.time_select {
  display: flex;
  justify-content: left;
  padding-left: 16px;
}

.type_select {
  height: 36px;
  width: 100%;
}

.query_btn {
  width: 436px;
  height: 42px;
  margin: 0 auto;
  background: #ff8533;
  border: 0px;
  box-shadow: inset 0px -1px 0px #f0f0f0;
  border-radius: 6px;
  color: #f0f0f0;
  font-size: 18px;
}
</style>