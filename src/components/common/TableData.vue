<template>
  <div id="table_data" v-if="Object.keys(table_data).length !== 0">
    <table class="table">
      <!-- 表格标题 -->
      <tr>
        <th v-for="(item, index) in table_data.title_list" :key="index">{{ item.titleName }}</th>
      </tr>
      <tr v-for="(item, index) in table_data.title_list[0].data1" :key="index">
        <td v-for="(item1, index1) in table_data.title_list" :key="index1">
          {{ item1.data1[index] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    table_data:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {


    };
  },
};
</script>

<style scoped>
#table_data {
  width: 100%;
}

.table {
  width: 100%;
  text-align: center;
}

th,
td {
  height: 56px;
  box-shadow: inset 0px -1px 0px #F0F0F0;
}

th {
  background-color: #fafafa;
}
</style>