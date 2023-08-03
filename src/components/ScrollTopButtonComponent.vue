<template>
  <div>
    <!-- Your other content goes here -->

    <a
      v-if="showButton"
      @click="scrollToTop"
      id="scrollToTopBtn"
      class="btn color3 rounded-5"
      ><i class="bi bi-caret-up icon"></i
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    checkScroll() {
      this.showButton = window.scrollY > 700;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
};
</script>

<style>
#scrollToTopBtn {
  position: fixed;
  opacity: 0.85;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.icon {
  font-size: 35px;
  margin-bottom: 4px;
}
</style>
