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
      <div class="col-md-4 border">
        <div v-if="project.client != null" class="row mb-2">
          <!-- Zweite Zeile -->
          <div class="col">
            <h2>Client</h2>
            <a :href="project.client">{{ project.client }}</a>
          </div>
        </div>
        <div class="row">
          <!-- Zweite Zeile -->
          <div class="col">
            <h2>Objective</h2>
            <p>{{ project.objective }}</p>
          </div>
        </div>
        <div class="row">
          <!-- Erste Zeile -->
          <div class="col">
            <h2>Learnings</h2>
            <ul>
              <li v-for="(learning, index) in project.learnings" :key="index">{{ learning }}</li>
              
            </ul>
          </div>
        </div>
        
        <div class="row">
          <!-- Dritte Zeile -->
          <div class="col">
            <h2>Tools & Technologies</h2>
            <p>{{ project.stack }}</p>
          </div>
        </div>
        <div v-if="project.privacy != null" class="row">
          <!-- Vierte Zeile -->
          <div class="col">
            <h2>Privacy</h2>
            <router-link class="btn btn-success" :to="`/${project.id}/privacy`">Review the privacy policy</router-link>
            
          </div>
        </div>
      </div>

      <!-- Rechte Spalte (8 Spalten von 3 für insgesamt 12) -->
      <div class="col-md-8">
        <div class="row">
          <!-- Einzige Zeile der rechten Spalte -->
          <div class="col">
            <h2>Challenge</h2>
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
<style></style>
