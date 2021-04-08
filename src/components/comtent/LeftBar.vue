<template>
  <div id="left-bar" ref="leftBar">
    <el-collapse>
      <!-- 最外层循环，一级菜单 -->
      <el-collapse-item v-for="(item, i) in left_datas" :key="i" class="center">
        <template slot="title">
          <!-- 一级菜单名 -->

          <!-- ???????????????????????????????????????????????????????????????????????????????? -->
          <img :src="item.bgurl" alt="" class="icon_img">
          <p class="collapse-name">{{ item.main_name }}</p>
        </template>
        <!-- 二次循环，二级菜单 -->
        <div v-for="(item2, j) in item.item_list" :key="j"  class="div2">
          <!-- 如果id为1进行3次循环 -->
          <el-collapse v-if="item2.id === 1">
            <el-collapse-item>
              <template slot="title">
                <img :src="item2.bgurl" alt="" class="icon_img">
                <p class="collapse2" >{{ item2.item_name }}</p>
              </template>
              <!-- 第三次循环 -->
              <div
                :class="{'collapse3':true,'be_active':isActive(item3.index)}"
                v-for="(item3, k) in item2.item_list"
                :key="k"
                @click="btnClick(item3.url,item3.index)"
                :ref="item3.index"
              >
                {{ item3.real_name }}
              </div>
            </el-collapse-item>
          </el-collapse>
          <!-- 否则进行二级循环 -->

          <div v-else :class="{'collapse4':true,'be_active':isActive(item2.index)}" @click="btnClick(item2.url,item2.index)" :ref="item2.index"><span>{{ item2.real_name }}</span></div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="rectangle" v-on:click="rectClick()">
      <img src="../../assets/img/leftBar/rectangle.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left_datas: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      is_active_char:''
      
    };
  },
  computed:{

  },
  methods: {
     isActive(char){
      return char===this.is_active_char;
    },
    handleChange(val) {
      console.log(val);
    },
    // 伸缩栏事件
    rectClick() {
      if (this.ishide) {
        this.$refs.leftBar.style.left = "0px";
        this.ishide = !this.ishide;
      } else {
        this.$refs.leftBar.style.left = "-240px";
        this.ishide = !this.ishide;
      }
      console.log(123);
    },

    // 选项点击事件
    btnClick(url,index) {
      console.log(url);
      console.log(index);
      console.log(this.$refs[index][0]);
      console.log(this.$refs.leftBar)
      // this.$refs[index][0].style.backgroundColor="red";  
      this.is_active_char=index;
      this.$router.replace({ path: url });
 
    }
  },
};
</script>

<style scoped>
#left-bar {
  position: fixed;
  width: 240px;
  height: calc(100% - 63px);
  z-index: 999;
  left: 0px;
  top: 63px;
  background: #ffffff;
  /* 内阴影/灰：上右下 */
  box-shadow: inset -1px 0px 0px #d9d9d9, inset 0px 1px 0px #d9d9d9,
    inset 0px -1px 0px #d9d9d9;
  transition: left 0.2s;
  color: #595959;
  font-size: 14px;
  font-weight: bold;
}
.rectangle {
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 79px;
}

.icon_img{
  width: 20px;
  height: 20px;
}

.collapse-name {
  position: absolute;
  left: 50px;
  /* transform: translateX(-50%); */
  color: #595959;
  font-size: 14px;
  font-weight: bold;
}

.collapse2 {
  position: relative;
  left: 40%;
  color: #595959;
  font-size: 14px;
  font-weight: bold;
}

.collapse3 {
  padding-left: 30%;
  line-height: 49px;
  position: relative;
  text-align: center;
  box-shadow: inset 0px 1px 0px #d9d9d9;
  color: #8C8C8C;;
  font-size: 14px;
  font-weight: bold;
}

.collapse4 {
  line-height: 49px;
  position: relative;
  text-align: left;
  box-shadow: inset 0px 1px 0px #d9d9d9;
  color: #8C8C8C;;
  font-size: 14px;
  font-weight: bold;
}
.collapse4 span {
  margin-left: 20%;
}

div /deep/ .el-collapse-item__content {
  position: relative;
  padding: 0;
}

div /deep/ .el-collapse-item__arrow {
  transform: rotate(-90deg);
}

div /deep/ .el-collapse {
  border-right: 1px solid #ebeef5;
}

div /deep/ .el-collapse-item__arrow.is-active {
  transform: rotate(90deg);
}

.be_active{
  background: rgba(255, 133, 51, 0.08);
  color: #FF8533;
  border-right:#FF8533 3px solid;
}
</style>