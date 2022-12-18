<template>
  <div class="container">
    <NavbarComponentVue @clickSearch="getSearch" />
    <div class="content">
      <SidebarComponnentVue />
      <div class="detail-card">
        <DetailCardComponentVue :filmById="detailFilm" />
        <p class="text-now-playing">Now Playing</p>
        <div class="isi-content">
          <div v-for="(filed, index) in fields" :key="index" class="div-cards">
            <CardComponentVue :items="filed" />
          </div>
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
import DetailCardComponentVue from "@/components/molecules/DetailCardComponent.vue";

const filmService = new BaseService("");
export default {
  name: "DetailVue",
  components: {
    NavbarComponentVue,
    SidebarComponnentVue,
    FooterComponentVue,
    CardComponentVue,
    DetailCardComponentVue,
  },
  data: () => ({
    fields: [],
    detailFilm: [],
  }),
  async created() {
    await this.getFilm();
    await this.getFilmById();
  },
  methods: {
    async getFilm() {
      try {
        const res = await filmService.get("naruto", 1);
        this.fields = res.Search;
      } catch {
        console.log("error");
      }
    },
    async getFilmById() {
      try {
        const res = await filmService.getOne(this.$route.params.id);
        console.log(res);
        this.detailFilm = res;
      } catch {
        console.log("error");
      }
    },
    async getSearch(search) {
      try {
        this.$router.push({ name: "sendData", params: { search } });
      } catch {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
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

.detail-card {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 150px;
}

.isi-content {
  display: grid;
  grid-template-columns: repeat(3, 287px);
  margin-top: 38px;
  gap: 30px;
}

.text-now-playing {
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: start;
  margin-top: 58px;

  color: #ffffff;
}

@media screen and (max-width: 1024px) {
  .isi-content {
    display: grid;
    grid-template-columns: repeat(2, 287px);
    margin-top: 150px;
    gap: 30px;
  }
  .content {
    display: grid;
    grid-template-columns: auto;
  }
}
@media screen and (max-width: 768px) {
  .isi-content {
    display: grid;
    grid-template-columns: repeat(2, 287px);
    margin-top: 150px;
    margin-left: 50%;
    gap: 30px;
  }
  .content {
    display: grid;
    grid-template-columns: auto;
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
  .content {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>