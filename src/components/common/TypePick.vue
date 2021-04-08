<template>
  <div id="type_pick" v-if="Object.keys(select_data).length !== 0">
    <!-- 第一个下拉框 -->
    <div class="type_item">
      <span>{{ select_data.select_list[0].select_name }}</span>
      <form action="">
        <select
          :name="select_data.select_list[0].select_name"
          id=""
          ref="select0"
          @change="select_changed()"
        >
          <option
            :value="item"
            v-for="(item, index) in select_data.select_list[0].choose_list"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </form>
    </div>

    <!-- 第二个下拉框 -->
    <div class="type_item">
      <span>{{ select_data.select_list[1].select_name }}</span>
      <form action="">
        <select
          :name="select_data.select_list[1].select_name"
          id=""
          ref="select1"
          @change="select_changed()"
        >
          <option
            :value="item"
            v-for="(item, index) in select_data.select_list[1].choose_list"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </form>
    </div>

    <!-- 可能有的搜索框 -->
    <div class="type_item search_item" v-if="select_data.hasInput === true">
      <span class="long_span">搜索推广活动:</span>
      <form action="">
        <input type="search" placeholder="输入搜索内容" class="search" />
      </form>
    </div>

    <!-- 可能有的第3个下拉框 -->
    <div class="type_item" v-if="select_data.select_list.length > 2">
      <span>{{ select_data.select_list[2].select_name }}</span>
      <form action="">
        <select
          :name="select_data.select_list[2].select_name"
          id=""
          ref="select2"
          @change="select_changed()"
        >
          <option
            :value="item"
            v-for="(item, index) in select_data.select_list[2].choose_list"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </form>
    </div>

    <!-- 可能有的第四个下拉框 -->
    <div class="type_item" v-if="select_data.select_list.length > 3">
      <span>{{ select_data.select_list[3].select_name }}</span>
      <form action="">
        <select
          :name="select_data.select_list[3].select_name"
          id=""
          ref="select3"
          @change="select_changed()"
        >
          <option
            :value="item"
            v-for="(item, index) in select_data.select_list[3].choose_list"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    select_data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      select_list: [],
    };
  },
  computed: {
    // 获取每一个下拉框数据，返回给select_list
    get_select_data() {
      if (this.$refs.select0) {
        this.select_list[0] =
          this.$refs.select0.name + ":" + this.$refs.select0.value;
      }
      if (this.$refs.select1) {
        this.select_list[1] =
          this.$refs.select1.name + ":" + this.$refs.select1.value;
      }
      if (this.$refs.select2) {
        this.select_list[2] =
          this.$refs.select2.name + ":" + this.$refs.select2.value;
      }
      if (this.$refs.select3) {
        this.select_list[3] =
          this.$refs.select3.name + ":" + this.$refs.select3.value;
      }
      return this.select_list;
    },
  },
  mounted() {},
  methods: {
    send_message() {
      console.log(this.select_list);
    },
    select_changed() {
      this.get_select_data1();
    },
    get_select_data1() {
      if (this.$refs.select0) {
        this.select_list[0] =
          this.$refs.select0.name + ":" + this.$refs.select0.value;
      }
      if (this.$refs.select1) {
        this.select_list[1] =
          this.$refs.select1.name + ":" + this.$refs.select1.value;
      }
      if (this.$refs.select2) {
        this.select_list[2] =
          this.$refs.select2.name + ":" + this.$refs.select2.value;
      }
      if (this.$refs.select3) {
        this.select_list[3] =
          this.$refs.select3.name + ":" + this.$refs.select3.value;
      }
      return this.select_list;
    },
  },
};
</script>

<style scoped>
#type_pick {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
}

.type_item {
  display: flex;
  justify-content: left;
  width: 350px;
  line-height: 36px;
  margin-left: 16px;
}

select {
  height: 36px;

  width: 253px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 2px;
}
span {
  width: 60px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #8c8c8c;
  margin-right: 10px;
}

.search {
  height: 36px;
  width: 253px;
  line-height: 36px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 2px;
}
.search::placeholder {
  background: url("../../assets/img/search.svg") no-repeat;
  background-position: right;
}

.long_span {
  width: 150px;
}
.search_item {
  width: 370px;
  margin-right: 30px;
}
</style>