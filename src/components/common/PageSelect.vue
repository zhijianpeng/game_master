<template>
  <div id="page_select">
    <div class="pages">
      <!-- 按钮选择页数 -->
      <div class="btn_page_select">
        <button class="left_btn">
          <img src="../../assets/img/rightarrow.svg" alt="" />
        </button>
        <div>1</div>
        <button class="right_btn">
          <img src="../../assets/img/rightarrow.svg" alt="" />
        </button>
      </div>

      <!-- 输入选择页数 -->
      <div class="input_page">
        <span>到第</span>
        <input class="search" type="text" :value="1"/>
        <span>页</span>
        <button>确定</button>
      </div>

      <!-- 搜索到信息数量 -->
      <div class="info_num">共{{ 1 }}条</div>

      <!-- 下拉框输入页数 -->
      <div>
        <select name="page_select" id="" class="select_page" >
          <option value="1">{{ 1 }}条/页</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#page_select {
  position: relative;
  width: 100%;
  height: 70px;
  line-height: 70px;
  color: #8c8c8c;
  font-size: 14px;
  margin-bottom: 10px;
}

.pages {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  line-height: 70px;
  width: 480px;
}

.btn_page_select {
  display: flex;
  justify-content: space-between;
  width: 104px;
  margin: auto 0;
}
.btn_page_select button,
.btn_page_select div {
  width: 32px;
  height: 32px;
  line-height: 32px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
}

.left_btn {
  transform: rotate(180deg);
}

.input_page {
  display: flex;
  justify-content: space-between;
  width: 190px;
  margin: 0 auto;
  color: #8c8c8c;
}

.search {
  width: 48px;
  height: 32px;
  margin: auto 0;
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 2px;
}

.input_page button {
  width: 48px;
  height: 32px;
  margin: auto 0;
  border: 0px;
  color: white;
  border-radius: 2px;
  text-align: center;
  background-color: #bdbdbd;
  font-size: 14px;
}

.select_page {
  width: 95px;
  height: 32px;
  margin-right: 16px;
  padding-left: 5px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
}

.info_num {
    margin-right: 15px;
}
</style>