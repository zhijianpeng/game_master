<template>
  <div id="top-bar">
    <!-- 左侧有两种，所以要用slot -->
    <div class="top-left">
      <slot name="left">小游戏统计分析后台</slot>
    </div>

    <!-- 右边的固定四样 -->
    <div class="top-right">
      <!-- 输入框 -->
      <input class="input" type="text" :placeholder="inputText"/>

        <!-- 提示 -->
        <div class="prompt">
            <i><img src="../../assets/img/lingdang.svg" alt=""></i>
            <div class="prompt-num">{{promptNum}}</div>
        </div>

        <!-- 问号 -->
        <i class="query"><img src="../../assets/img/wenhao.svg" alt=""></i>

        <!-- 用户名 -->
        <div class="user">
          {{userName}}
          <i>
              <img src="../../assets/img/downarrow.svg" alt="">
          </i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputText:"天天打弹珠",
            promptNum:10,
            userName:"pzj"
        }
    },
};
</script>

<style scope>
#top-bar {
  display: flex;
  position: fixed;
  z-index: 9999;
  width:100%;
  min-width: 1440px;
  height: 64px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #f0f0f0;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  line-height: 64px;
}

.top-left{
    margin-left: 20px;
}

.top-right{
    display: flex;
    width: 560px;
    justify-content: space-between;
}

.input {
  width: 320px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 4px;
  margin: auto 0;
}

.user {
    margin-right: 20px;
}

.prompt {
    position:relative;
    margin-top: 5px;
}

.prompt-num {
    width: 25px;
    height: 18px;
    border-radius: 10px;
    position:absolute;
    background-color: #FF4D4F;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    top: 10px;
    right:-15px;
    color: #FFFFFF;
}

.query {
    margin-top: 5px;
}
</style>