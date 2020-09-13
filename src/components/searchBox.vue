<template>
  <div class="search-input">
    <input type="text" placeholder="搜索职位、公司或地点" v-model="val" />
    <span @click="handleSearchOffice">搜索</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: this.$route.params.keyword || '',
    };
  },
  methods: {
    handleSearchOffice() {
      this.$router.push("/search/" + this.val);
    },
  },
  watch: {
    $route(to) {
      this.val = to.params.keyword || '';
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  font-size: 18px;
  display: flex;
  input {
    width: 794px;
    height: 46px;
    outline: none;
    border: 0;
    font-size: 16px;
    padding: 0 195px 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    &:focus {
      border: 1px solid #00b38a;
    }
  }
  span {
    width: 142px;
    height: 46px;
    cursor: pointer;
    font-weight: bolder;
    line-height: 46px;
    text-align: center;
    display: block;
    color: #fff;
    background-color: #00b38a;
    &:hover {
      background-color: #00a57f;
    }
  }
}
</style>