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
  <div class="card mx-auto mb-3" style="width: 19.5rem;">
    <div class="image-container">
      <img v-bind:src="project.img" class="card-img-top" @click="navigateToDetail(project.id)" />
      <div class="text-overlay rounded-2" @click="navigateToDetail(project.id)">Click for more details...</div>
    </div>
      
    <div class="card-body color2">
      <h5 class="card-title" @click="navigateToDetail(project.id)">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ project.type }}</li>
      <li class="list-group-item">{{ project.stack }}</li>
      <li class="list-group-item">{{ project.time }}</li>
    </ul>
  </div>
</div>
</template>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  padding: 20px;
}
.image-container:hover .text-overlay {
  display: flex;
  cursor: pointer;
}
.card {
  transition: .8s;
}
.card:hover {
  transform: rotateY(0deg) scale(1.05);
  z-index: 1;
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
}


</style>
