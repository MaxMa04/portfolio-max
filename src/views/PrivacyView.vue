<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import projects from "../data/projects.js";

const route = useRoute();
const { id } = route.params;
const project = ref(null);
onBeforeMount(() => {
  project.value = projects.find((p) => p.id === parseInt(id));
});
</script>
<template>
  <div class="container my-5" style="height: 70vh;">
    <h1 class="display-3 my-5 text-center tcolor2 text-uppercase"> <mark class="color3 rounded-5 ">Privacy</mark> </h1>
    <div class="row">
      <div class="col-md-5 mx-auto mb-5">
        <div class="card color2 rounded-4 border border-3">
          <div class="card-body">
            <h5 class="card-title">Privacy Policy {{ project.title }}</h5>
            <p class="card-text">
              <b>Accountable Person:</b> <br />
              Max Mannstein <br />
              Zwickauer Straße 35 <br />
              09366 Stollberg <br />
              Germany <br /> <br>

              <b>E-Mail:</b> max.mannstein@gmail.com <br /> <br>

              <b>Processed Data:</b> <br />
              {{ project.privacy }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card{
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
 
}
</style>
