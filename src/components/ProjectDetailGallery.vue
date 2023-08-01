<script>
export default {
  name: "ProjectDetailGallery",
  props: ["project"],
  components: {},
  data: () => {
    return {};
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>
<template>
   <div class="row row-cols-1 row-cols-md-3 mt-4">
    <div class="col" v-for="(img, index) in project.detailImgs" :key="index">
      <img :src="img" alt="Bild 1" class="img-responsive gallery-image rounded-3">
    </div>

  </div>
</template>
<style>
.gallery-image{
    width: 100%;
}
</style>