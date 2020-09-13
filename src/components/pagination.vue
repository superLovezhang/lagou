<template>
  <div class="pagination-wrap" v-if="totalPages > 1">
    <div
      :class="currentPage === 1 ? 'pagination-pre disable': 'pagination-pre'"
      @click="handleChangeCurrentPage(currentPage - 1)"
    >上一页</div>
    <div class="pagination-num" v-show="currentPage - 2 > 1" @click="handleChangeCurrentPage(1)">1</div>
    <div class="omit l" v-show="currentPage - 3 > 1">...</div>
    <div
      :class="item === currentPage ? 'pagination-num active': 'pagination-num'"
      v-for="item in totalPages"
      :key="item"
      v-show="item >= currentPage - 2 && item <= currentPage + 2"
      @click="handleChangeCurrentPage(item)"
    >{{ item }}</div>
    <div class="omit l" v-show="totalPages > currentPage + 3">...</div>
    <div
      class="pagination-num"
      v-show="totalPages > currentPage + 2"
      @click="handleChangeCurrentPage(totalPages)"
    >{{ totalPages }}</div>
    <div
      :class="currentPage === totalPages ? 'pagination-next disable' : 'pagination-next'"
      @click="handleChangeCurrentPage(currentPage + 1)"
    >下一页</div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    handleChangeCurrentPage(page) {
      // 对传进的值进行过滤
      if (page < 1 || page > this.totalPages) return
      this.currentPage = page
      this.$emit("handleParentMethod", page)
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-wrap {
  min-width: 185px;
  height: 30px;
  margin-top: 50px;
  color: #555555;
  position: relative;
  transform: translateX(30%);
  .pagination-pre,
  .pagination-next {
    width: 62px;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ededed;
    &:not(.disable):hover {
      color: #fff;
      background-color: #00b38a;
    }
    &.disable {
      color: #c0c0c0;
      cursor: no-drop;
    }
  }
  .omit {
    width: 10px;
    margin-left: 5px;
    margin-top: 5px;
  }
  .pagination-next {
    margin-left: 10px;
  }
  .pagination-num {
    width: 30px;
    height: 30px;
    float: left;
    cursor: pointer;
    margin-left: 10px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ededed;
    &:hover {
      color: #fff;
      background-color: #00b38a;
    }
    &.active {
      color: #fff;
      background-color: #00b38a;
    }
  }
}
</style>