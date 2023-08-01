<script>
export default {
  name: "FooterComponent",
  components: {},
  data: () => {
    return {
      year: new Date().getFullYear(),
    };
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>
<template>
  <footer class="text-center text-lg-start bg-success">
    <div class="container d-flex justify-content-center py-4">
      <a
        type="button"
        class="btn btn-primary btn-lg rounded-4 btn-floating mx-2"
        href="https://github.com/MaxMa04"
      >
        <i class="bi bi-github"></i>
      </a>
      <a
        type="button"
        class="btn btn-primary btn-lg rounded-4 btn-floating mx-2"
        href="https://www.linkedin.com/in/max-mannstein-04437025a/"
      >
        <i class="bi bi-linkedin"></i>
      </a>
      
      <router-link
        type="button"
        class="btn btn-primary btn-lg rounded-4 btn-floating mx-2"
        to="/imprint"
      >
        Imprint
      </router-link>
      
    </div>

    <!-- Copyright -->
    <div
      class="text-center text-white p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © {{ year }} Developed by:
      <a class="text-white" href="#home" v-if="$route.name === 'home'">Max Mannstein</a>
      <router-link class="text-white" to="/" v-else>Max Mannstein</router-link>
    </div>
    <!-- Copyright -->
  </footer>
</template>
