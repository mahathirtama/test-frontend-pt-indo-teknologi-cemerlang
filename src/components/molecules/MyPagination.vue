<template>
  <ul class="pagination">
    <!-- <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        First
      </button>
    </li> -->

    <li class="paginationCondition">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        :class="{ activeText: isTextActivePrev() }"
      >
        Sebelumnya
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li
      v-for="(page, index) in pages"
      class="pagination-item flex-spacing"
      :key="index"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="paginationCondition">
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        :class="{ activeText: isTextActive() }"
      >
        Selanjutnya
      </button>
    </li>

    <!-- <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        Last
      </button>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "MyPagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    isTextActive() {
      return this.currentPage === this.totalPages;
    },
    isTextActivePrev() {
      return this.currentPage === 1;
    },
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
  },
};
</script>

<style>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #c0222e;
  margin: 10px;
}

.paginationCondition {
  display: inline-block;
  margin: 20px;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #c0222e;
}

.pagination-item .active {
  background-color: #c0222e;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: #ffffff;
  margin: -4px;
}
.paginationCondition .activeText {
  display: inline-block;
  margin: 20px;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
/* css animation */
</style>