<template>
  <div id="data_btns">
    <div v-for="(item, index) in dates" :key="index" :class="{'text':true,'time_active':is_active(index)}" @click="time_click(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dates: ["今天", "昨天", "本周", "本月", "最近7天", "最近30天", "自定义"],
      active_index:0,
      nowData:"今天"
    };
  },
  computed:{
    get_data(){
      this.nowData=this.dates[this.active_index];
      return this.nowData;
    }
  },
  methods:{
    time_click(index){
      this.active_index=index;
    },
    is_active(index){
      return this.active_index===index;
    }
  }
};
</script>

<style scoped>
#data_btns {
  display: flex;
  flex: 1;
  width: 432px;
  height: 36px;
  margin-left: 24px;
  line-height: 36px;
  font-size: 14px;
  color: #8c8c8c;
  background: #f7f8fa;
  border-radius: 2px;
}
.text {
  flex-grow: 1;
  text-align: center;
}

.time_active {
  background: #FF8533;
  color: white;
}
</style>