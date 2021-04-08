<template>
  <div id="top_nav_bar" v-if="nav_data.length>0">
    <div class="left">
      <div v-for="(item, i) in nav_data" :key="i" class="nav_text_box">
        <!-- 如果有多项要加 / -->
        <i v-if="i !== 0" class="line">/</i>
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    nav_data:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
#top_nav_bar {
  margin-top: 64px;
  height: 48px;
  width: 100%;
  min-width: 1440px;
  background-color: #FFFFFF;
}

.nav_text_box {
  display: inline-block;
  width: 120px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}

.left {
    margin-left: 32px;
}

.line {
  margin-right: 10px;
}

.left :nth-child(1){
  color: #8C8C8C;
}
</style>