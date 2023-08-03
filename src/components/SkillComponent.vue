<script>
export default {
  name: "ResumeComponent",
  components: {},
  props: ["skill"],
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
  <div class="col-lg-6 mt-md-4 mb-4 mb-md-0">
    <!-- Inhalt für die linke Spalte -->

    <h5>{{ skill.name }}</h5>
    <!-- Fortschrittsbalken für die linke Spalte -->
    <div class="progress color2" style="height: 20px">
      <div
        class="progress-bar color3"
        role="progressbar"
        :style="{ width: skill.percentage + '%' }"
        :aria-valuenow="skill.percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ skill.percentage }}%
      </div>
    </div>
  </div>
</template>
<style scoped>
.progress{
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
 
}
</style>
