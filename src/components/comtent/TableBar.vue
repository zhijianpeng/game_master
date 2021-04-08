<template>
  <div id="table_bar">
    <!-- 标题 -->
    <div>
      <table-title v-bind="$attrs">
        <template v-slot:data_stat>
          <slot name="data_stat"></slot>
        </template>
      </table-title>
    </div>

    <!-- 表格数据 -->
    <div>
      <table-data v-bind="$attrs"></table-data>
    </div>

    <!-- 页数选择器 -->
    <div>
      <page-select></page-select>
    </div>
  </div>
</template>

<script>
import TableTitle from "@/components/common/TableTitle.vue";
import TableData from "@/components/common/TableData.vue";
import PageSelect from "@/components/common/PageSelect.vue";

export default {
  components: {
    TableTitle,
    TableData,
    PageSelect,
  },
};
</script>

<style>
#table_bar {
  position: relative;
  width: calc(100% - 36px);
  min-width: 1408px;
  margin: 18px;
  background-color: #ffffff;
}
</style>