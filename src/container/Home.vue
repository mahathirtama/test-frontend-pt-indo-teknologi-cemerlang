<template>
  <div class="container">
    <NavbarComponentVue @clickSearch="getSearch" />
    <div class="content">
      <SidebarComponnentVue />
      <div class="paginate">
        <div class="isi-content">
          <div v-for="(field, index) in fields" :key="index" class="div-cards">
            <router-link :to="{ name: 'detail', params: { id: field.imdbID } }"
              ><CardComponentVue :items="field"
            /></router-link>
          </div>
        </div>
        <div class="paginate-component">
          <MyPaginationVue
            :totalPages="totalPage"
            :perPage="10"
            :currentPage="currentPage"
            @pagechanged="onPageChange"
          />
        </div>
      </div>
    </div>
    <FooterComponentVue />
  </div>
</template>

<script>
import BaseService from "@/service/Api";
import CardComponentVue from "../components/molecules/CardComponent.vue";
import FooterComponentVue from "../components/molecules/FooterComponent.vue";
import NavbarComponentVue from "../components/molecules/NavbarComponent.vue";
import SidebarComponnentVue from "../components/molecules/SidebarComponent.vue";
import MyPaginationVue from "@/components/molecules/MyPagination.vue";

const filmService = new BaseService("");

export default {
  name: "HomeVue",
  components: {
    NavbarComponentVue,
    SidebarComponnentVue,
    FooterComponentVue,
    CardComponentVue,
    MyPaginationVue,
  },
  data: () => ({
    fields: [],
    currentPage: 1,
    totalPage: 10,
    defaultSearch: "naruto",
  }),
  async created() {
    await this.getFilm();
  },
  methods: {
    async getFilm() {
      try {
        if (this.$route.params.search) {
          const res = await filmService.get(
            this.$route.params.search,
            this.currentPage
          );
          this.fields = res.Search;
        } else {
          const res = await filmService.get(
            this.defaultSearch,
            this.currentPage
          );
          this.fields = res.Search;
        }
      } catch {
        console.log("error");
      }
    },
    async getSearch(search) {
      try {
        this.defaultSearch = search;
        const res = await filmService.get(this.defaultSearch, this.currentPage);
        this.fields = res.Search;
        this.currentPage = 1;
      } catch {
        console.log("error");
      }
    },
    async onPageChange(page) {
      this.currentPage = page;
      const res = await filmService.get(this.defaultSearch, this.currentPage);
      this.fields = res.Search;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background: #232c32;
}

.container {
  display: flex;
  flex-direction: column;
}

.content {
  display: grid;
  grid-template-columns: auto auto;
}

.isi-content {
  display: grid;
  grid-template-columns: repeat(3, 287px);
  margin-top: 150px;
  gap: 30px;
}

.paginate {
  display: flex;
  flex-direction: column;
}

.paginate-component {
  align-self: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

@media screen and (max-width: 1024px) {
  .isi-content {
    display: grid;
    grid-template-columns: repeat(2, 287px);
    margin-top: 150px;
    gap: 30px;
  }
}
@media screen and (max-width: 768px) {
  .isi-content {
    display: grid;
    grid-template-columns: repeat(2, 287px);
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    gap: 30px;
  }
}
@media screen and (max-width: 450px) {
  .isi-content {
    display: grid;
    grid-template-columns: repeat(1, 287px);
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    gap: 30px;
  }
}
</style>
