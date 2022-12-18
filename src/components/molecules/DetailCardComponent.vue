<template>
  <div class="container">
    <p>{{ filmById.Title }}</p>
    <div class="wrap-content">
      <img :src="filmById.Poster" alt="" class="image" />
      <div class="text-content">
        <div>
          <p>Release Date: {{ filmById.Released }}</p>
          <p>Language: {{ filmById.Language }}</p>
          <p>Genre: {{ filmById.Genre }}</p>
          <p>Cast & Crew: {{ filmById.Actors }}</p>
          <p>Director: {{ filmById.Director }}</p>
          <p>Length: {{ filmById.Runtime }}</p>
        </div>
        <div class="wrap-sinopsis">
          <p class="heading">SINOPSIS</p>
          <p>{{ filmById.Plot }}</p>
          <div class="wrap-button">
            <div class="button">Buy Ticket</div>
            <div class="button">Watch Trailer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCardComponent",
  props: ["filmById"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -30px;
}

.wrap-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.wrap-sinopsis {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 40px;
}

.image {
  width: 287px;
  height: 404px;
  border-radius: 15px;
  box-shadow: 5px 5px 3px rgb(53, 51, 51);
}

p {
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
}

.heading {
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;

  color: #ffffff;
}

.wrap-button {
  display: flex;
  gap: 20px;
}
.button {
  width: 138px;
  height: 50px;
  left: 603px;
  top: 530px;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  background: #c0222e;
  border-radius: 15px;
}

@media screen and (max-width: 1024px) {
  .wrap-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
@media screen and (max-width: 768px) {
  .wrap-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
@media screen and (max-width: 450px) {
  .wrap-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>