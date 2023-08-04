<script>
export default {
  name: "ProjectDetailHeader",
  props: ["project"],
  components: {},
  data: () => {
    return {};
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {
    gotoWebsite(link) {
      // Change the website URL to the desired destination
      window.location.href = link;
    }
  },
};
</script>
<template>
  <div class="container">
    <h1 class="pt-4 display-2">{{ project.title }}</h1>
    <div class="d-flex flex-row">
      <div class="ps-1 pe-4 py-2">
        <i class="bi bi-clock-history"></i> {{ project.time }}
      </div>
      <div class="py-2"><i class="bi bi-tag"></i> {{ project.type }}</div>
    </div>
    
      <img v-if="project.appstore != null" src="@/assets/appstore.png" @click="gotoWebsite(project.appstore)" alt="">
      <img v-if="project.playstore != null" src="@/assets/playstore.png" @click="gotoWebsite(project.playstore)" alt="">

    
    
  </div>
</template>
<style scoped>
img{
  width: 200px;
  height: 200px;
  margin-right: 30px;
  margin-top: -60px;
  margin-bottom: -60px;
}
</style>
