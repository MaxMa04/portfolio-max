<script>
import projects from "../data/projects.js";
import ProjectComponent from "./ProjectComponent.vue";
export default {
  name: "ProjectsGridComponent",
  
  components: {
    ProjectComponent,
  },
  data: () => {
    return {
      projects,
      showFlag: false,
      projectSM : [],
    };
  },
  mounted() {
    this.projectSM = this.projects.slice(0,2);
    
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  updated() {},
  methods: {
    handleResize() {
      if (window.innerWidth <= 768) {
        this.showFlag = false;
      } else {
        this.showFlag = true;
      }
    },
  },
};
</script>
<template>
  <h1 class="text-center text-uppercase display-3 mb-5">
    My <mark class="color3 rounded-5">Projects</mark>
  </h1>

  <div
    class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4"
    v-show="!showFlag"
  >
    <project-component
      v-for="project in projectSM"
      :key="project.id"
      :project="project"
    >
    </project-component>
    <p class="btn my-0" @click="showFlag = true">Show More</p>
  </div>

  <div
    class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4"
    v-show="showFlag"
  >
    <project-component
      v-for="project in projects"
      :key="project.id"
      :project="project"
    >
    </project-component>
    <p class="btn d-md-none my-0" @click="showFlag = false">Show Less</p>
  </div>

  <hr />
</template>
