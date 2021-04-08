<template>
  <div id="bottom-bar">
      {{info}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            info:"Copyright © 2015深圳传趣网络技术有限公司旗下小游戏平台 版权所有"
        }
    },
};
</script>

<style>
#bottom-bar {
  line-height: 68px;
  position: relative;
  width: 100%;
  min-width: 1440px;
  bottom: 0px;
  text-align: center;
  background-color: #FFFFFF;
  /* box-shadow: inset 0px 1px 0px #f0f0f0; */
}
</style>