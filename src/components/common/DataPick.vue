<template>
  <div id="data_pick">
    <div class="block">
      <span class="demonstration">时 间：</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期至"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        format="yyyy-MM-dd"
        @change="chooseTimeRange"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "123",
      value2: "122",
      time:[]
    };
  },
  computed:{
    get_time(){
      return this.time
    }
  },
  methods: {
    chooseTimeRange(t) {
      this.time=t;
    },
  },
};
</script>

<style scoped>
#data_pick {
}

.demonstration {
  display: inline-block;
  width: 60px;
  font-size: 14px;
  color: #8c8c8c;
}

div /deep/ .el-input__inner {
  width: 253px;
  height: 36px;
  font-size: 14px;
  color: #262626;
}

div /deep/ .el-date-editor .el-range-input::-webkit-input-placeholder {
  font-size: 14px;
  color: #262626;
}

div /deep/ .el-range-separator {
  display: none;
}

/* 为了修改element的默认样式，把两边的字合并在一起 */
div /deep/ .el-input__inner :nth-child(2) {
  text-align: right;
}
div /deep/ .el-input__inner :nth-child(4) {
  text-align: left;
}
</style>