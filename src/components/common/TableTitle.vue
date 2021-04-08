<template>
  <div id="table_title" v-if="Object.keys(table_data).length !== 0">
    <!-- 左侧文字内容 -->
    <div class="title_left">
      <!-- 最左侧的标题名 -->
      <div class="title_name">{{ table_data.table_title }}</div>
      <!-- 标题旁的数据统计信息 -->
      <!-- 有的没有 -->
      <div class="num_info" v-if="table_data.info_num_list.length>0">
        <slot name="data_stat"></slot>
      </div>
    </div>

    <!-- 最右侧的刷新和设置按钮 -->
    <div class="option">
      <div>
        <img src="../../assets/img/refrash.svg" alt="" />
      </div>

      <div>
        <img src="../../assets/img/setting.svg" alt="" />
      </div>
    </div>
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
#table_title {
  position: relative;
  width: 100%;
  height: 64px;
  line-height: 64px;
}

.title_left{
  position: relative;
  left: 7px;
  top: 0;
  display: flex;
  justify-content: left;
  width: 50%;
}
.title_name {
  top: 0px;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 64px;
}

.option {
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  justify-content: space-around;
}

.num_info {
  font-size: 16px;
  font-weight: normal;
  color: #8C8C8C;
}

.num_info span {
  font-size: 24px;
  color: #262626;
  font-weight: bold;
}
</style>