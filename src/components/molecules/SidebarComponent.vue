<template>
  <div class="sidebar">
    <div class="text-wrap">
      <div class="active"><p class="text-sidebar">Now Playing</p></div>
      <div class="non-active"><p>Coming Soon</p></div>
      <div class="non-active"><p>Theatre</p></div>
      <div class="non-active"><p>Promotions</p></div>
      <div class="non-active"><p>Information</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
.sidebar {
  left: 0%;
  width: 273px;
  height: 100%;

  background: #191c1f;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);
}

.text-wrap {
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  background: #191c1f;
}

.active {
  width: 273px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  background: #232c32;
  cursor: pointer;
}

.non-active {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  background: #191c1f;
  cursor: pointer;
}

.text-sidebar {
  background: #232c32;
}

p {
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-left: 40px;

  color: #ffffff;
  background: #191c1f;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>