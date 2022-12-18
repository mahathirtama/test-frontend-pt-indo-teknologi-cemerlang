<template>
  <div class="nav-wrap">
    <h1 class="cinemaText">CINEMAKUY</h1>
    <form action="" v-on:submit.prevent>
      <input
        type="text"
        placeholder="Search Title / Theatre Here"
        class="search"
        v-model="search"
      />
      <button type="submit" @click="submitSearch"></button>
    </form>
    <div class="img-wrap">
      <img src="../../assets/imax.png" alt="imax" class="imax-img" />
      <img src="../../assets/dolby.png" alt="dolby" class="dolby-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () => ({
    search: null,
  }),
  methods: {
    submitSearch() {
      this.$emit("clickSearch", this.search);
    },
  },
};
</script>

<style scoped>
.nav-wrap {
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 85.38%;
  display: flex;
  align-items: center;

  background: #c0222e;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);
}

.search {
  position: absolute;
  width: 500px;
  height: 50px;
  left: 293px;
  top: 20px;
  display: flex;
  align-items: center;

  background: #ffffff;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  border: #ffffff;
}
.search:focus {
  border-color: #ffffff;
  outline: none !important;
}

.cinemaText {
  width: 90px;
  color: #ffffff;
  background: #c0222e;
  transform: rotate(-5deg);
  letter-spacing: -2px;
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
}
.img-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-left: 72%;
  background: #c0222e;
}

.imax-img {
  width: 71px;
  height: 40px;
  background: #c0222e;
}

.dolby-img {
  width: 92.8px;
  height: 24px;
  background: #c0222e;
  margin-top: 5px;
}

.input-text {
  background: #ffffff;
}

@media screen and (max-width: 1024px) {
  .search {
    position: absolute;
    width: 300px;
    height: 50px;
    left: 293px;
    top: 20px;
    display: flex;
    align-items: center;

    background: #ffffff;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    border: #ffffff;
  }
  .img-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-left: 60%;
    background: #c0222e;
  }
}
@media screen and (max-width: 768px) {
  .search {
    display: none;
  }
  .img-wrap {
    display: none;
  }
}
</style>