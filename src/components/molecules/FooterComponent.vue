<template>
  <div class="footer">
    <p>
      © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics,
      and every attributes) of 21Cineplex or 21Cineplex.com website are
      copyrights and trademarks of PT Nusantara Sejahtera Raya. Any commercial
      usage of the materials and contents is forbidden without prior permission
      from PT Nusantara Sejahtera Raya. There is no other institutions/agencies
      outside PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com
      (21Cineplex website) without prior permission from PT Nusantara Sejahtera
      Raya
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 228px;

  background: #c0222e;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

p {
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  background: #c0222e;
  width: 897px;
  height: 108px;
  left: 271px;
  top: 1230px;
}
</style>