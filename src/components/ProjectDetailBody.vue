<script>
export default {
  name: "ProjectDetailBody",
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
  <div class="container py-5">
    <div class="row">
      <!-- Linke Spalte-->
      <div class="col-md-4 border border-3 rounded-4 color2 mb-4 my-md-2 overview-section">
        <div v-if="project.client != null" class="row mb-2">
          <!-- Zweite Zeile -->
          <div class="col">
            <h2 class="display-6">Client</h2>
            <a :href="project.client">{{ project.client }}</a>
            <hr>
          </div>
        </div>
        <div class="row">
          <!-- Zweite Zeile -->
          <div class="col">
            <h2 class="display-6">Objective</h2>
            <p>{{ project.objective }}</p>
            <hr>
          </div>
        </div>
        <div class="row">
          <!-- Erste Zeile -->
          <div class="col">
            <h2 class="display-6">Learnings</h2>
            <ul>
              <li v-for="(learning, index) in project.learnings" :key="index">{{ learning }}</li>
              
            </ul>
            <hr>
          </div>
        </div>
        
        <div class="row">
          <!-- Dritte Zeile -->
          <div class="col">
            <h2 class="display-6">Tools & Technologies</h2>
            <p>{{ project.stack }}</p>
            <hr v-if="project.privacy != null">
          </div>
          
        </div>
        <div v-if="project.privacy != null" class="row">
          <!-- Vierte Zeile -->
          <div class="col">
            <h2 class="display-6">Privacy</h2>
            <router-link class="btn color3 my-2 rounded-3" :to="`/${project.id}/privacy`">Review the privacy policy</router-link>
            
          </div>
        </div>
      </div>

      <!-- Rechte Spalte (8 Spalten von 3 für insgesamt 12) -->
      <div class="col-md-8">
        <div class="row">
          <!-- Einzige Zeile der rechten Spalte -->
          <div class="col">
            <h2 class="tcolor3 display-4">Challenge</h2>
            <h4>Issues</h4>
            <p>{{ project.challenge[0] }}</p>
            <h4>Solution</h4>
            <p>{{ project.challenge[1] }}</p>
            <h4>Outcome</h4>
            <p>{{ project.challenge[2] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
li{
    background-color: transparent !important;
}
.overview-section{
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
 
}
</style>
