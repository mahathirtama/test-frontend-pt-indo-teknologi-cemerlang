<template>
  <div class="card">
    <img :src="items.Poster" alt="" class="image" />
    <div class="code">
      <p>{{ items.Title }}</p>
      <p>(17+)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["items"],
};
</script>

<style scoped>
p {
  color: white;
}
.image {
  width: 287px;
  height: 404px;
  border-radius: 15px;
  box-shadow: 5px 5px 3px rgb(53, 51, 51);
}

.code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>