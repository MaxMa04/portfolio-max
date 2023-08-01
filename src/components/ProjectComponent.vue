<script>
export default {
  
  props: ["project"],
  methods: {
    navigateToDetail(id){
      this.$router.push({ path: `${id}`})
    }
  },
};
</script>
<template>
  <div class="col">
    <div class="card mx-auto border-success mb-3" style="width: 19.5rem" >
      <img v-bind:src="project.img" class="card-img-top" @click="navigateToDetail(project.id)"/>
      <div class="card-body">
        <h5 class="card-title" @click="navigateToDetail(project.id)">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ project.type }}</li>
        <li class="list-group-item">{{ project.stack }}</li>
        <li class="list-group-item">{{ project.time }}</li>
      </ul>
    </div>
  </div>
</template>

<style></style>
