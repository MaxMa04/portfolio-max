<script>
import "jquery";
import "popper.js";
import "bootstrap";

export default {
  name: "ImprintView",
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
  <div class="container px-5">
    <h1 class="my-4 display-1" style="color: rgb(236, 86, 86);">Ich liebe dich, Amelie!!!</h1>
    <p>Du bist es! Du bist das wichtigste auf der Welt für mich! Solltest du jemals wieder daran zweifeln, ist das der Ort, den du besuchen musst. 
      Hier habe ich die besten Erinnerungen an unsere gemeinsame Zeit in den letzten 2 Jahren gesammelt!</p>
    <h1 class="my-5 display-3">2021</h1>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/liebe/2021/2021_1.png" width="100%" alt="" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/liebe/2021/2021_2.png" width="100%" alt="" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/liebe/2021/2021_3.png" width="100%" alt="" />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h1 class="my-5 display-3">2022</h1>
    <div id="mygCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/liebe/2022/2022_1.png" width="100%" alt="" />
        </div>
        <div class="carousel-item ">
          <img src="@/assets/liebe/2022/2022_2.png" width="100%" alt="" />
        </div>
        <div class="carousel-item ">
          <img src="@/assets/liebe/2022/2022_3.png" width="100%" alt="" />
        </div>
        
      
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#mygCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#mygCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <h1 class="my-5 display-3">2023</h1>
    <div id="myhCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myhCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myhCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/liebe/2023/2023_1.png" width="100%" alt="" />
        </div>
        <div class="carousel-item ">
          <img src="@/assets/liebe/2023/2023_2.png" width="100%" alt="" />
        </div>
        <div class="carousel-item ">
          <img src="@/assets/liebe/2023/2023_3.png" width="100%" alt="" />
        </div>
        
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myhCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myhCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
</style>