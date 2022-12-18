
<template>
  <vue-awesome-paginate
    :total-items="100"
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>

<script>
import { ref } from "vue";
export default {
  name: "PaginationComponent",
  data: () => ({
    currentPage: ref(1),
  }),
  methods: {
    onClickHandler(page) {
      console.log(page);
    },
  },
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: rgb(216, 67, 67);
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>