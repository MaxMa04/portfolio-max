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
  methods: {},
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
  </div>
</template>
