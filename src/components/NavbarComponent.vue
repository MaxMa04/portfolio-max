<script>
import VueScrollTo from "vue-scrollto";
export default {
  name: "NavbarComponent",
  data: () => {
    return {};
  },
  created() {},
  mounted() {},
  directives: {
    ScrollTo: VueScrollTo,
  },
  updated() {},
  methods: {},
};
</script>
<template>
  <nav class="navbar navbar-expand-sm color1 py-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Max Mannstein</router-link>
      <button v-if="$route.name === 'home'"
      
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span  class="navbar-toggler-icon"></span>
      </button>
      <div v-if="$route.name === 'home'" class="collapse navbar-collapse" id="navbarNav">
        <ul  class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="{ el: '#home' }">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="{ el: '#projects' }">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="{ el: '#resume' }">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="{ el: '#contact' }">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
li{
  background-color: transparent !important;
  
}
.nav-link{
  color:  #fff9fa !important ;
}
.nav-link:hover{
  color: #98FF98 !important;
}
.navbar-brand{
  color:  #fff9fa !important;
}

.navbar-brand:hover {
  color: #98FF98 !important;
}
</style>
