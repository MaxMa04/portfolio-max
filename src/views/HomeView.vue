<template>
  <div class="container">
    <section id="home">
      <home-component></home-component>
    </section>
    <section id="projects">
      <projects-grid-component></projects-grid-component>
    </section>
    <section id="resume">
      <resume-component></resume-component>
    </section>
    <section id="contact">
      <contact-component></contact-component>
    </section>
  </div>
  
</template>

<script>

import HomeComponent from "../components/HomeComponent.vue";
import ProjectsGridComponent from "../components/ProjectsGridComponent.vue";
import ResumeComponent from "../components/ResumeComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";


export default {
  name: 'HomeView',
  components: {
    
    ResumeComponent,
    ProjectsGridComponent,
    
    HomeComponent,
    ContactComponent,

  
  }
}
</script>
