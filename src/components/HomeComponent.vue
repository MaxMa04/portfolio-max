<script>
import { truncateTextToXWords } from "@/helpers/helpers.js";
export default {
  components: {},
  name: "HomeComponent",
  data: () => {
    return {
      showFlag: false,
      text: `Welcome to my Portfolio Website! I'm Max Mannstein, a passionate programmer 
      born in Germany in 2004. Programming has become my greatest passion, and I have 
      accumulated significant experience, especially in C#. To further expand my skill 
      set, I recently developed this portfolio website using Vue.js. Through this 
      platform, I showcase my projects in an engaging and interactive manner, 
      enhancing my expertise. Throughout my journey, previous projects have honed my 
      technical abilities and problem-solving skills. I am committed to staying at the 
      forefront of technological advancements and contributing to the ever-evolving 
      field of software development. Thank you for visiting my portfolio website. I 
      invite you to explore my projects and witness my passion for programming and 
      development. Let's embark on this journey together! Feel free to contact me for 
      collaborations or inquiries; I eagerly look forward to connecting with you!`,
      smText: "",
    };
  },

  created() {},
  mounted() {
    this.smText = truncateTextToXWords(this.text, 50);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  directives: {},
  updated() {},

  methods: {
    handleResize() {
      if (window.innerWidth <= 768) {
        this.showFlag = false;
      } else {
        this.showFlag = true;
      }
      // Hier kannst du weitere Aktionen basierend auf der Bildschirmgröße ausführen
    },
    downloadCV(fileName, link) {
      var a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", link);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>

<template>
  <div class="row justify-content-center mb-5 pt-4">
    <div class="col-lg-5 p-0">
      <img
        src="../assets/homepicture.jpeg"
        class="large-image img-fluid rounded-circle shadow-4 mx-auto d-block me-lg-5 float-lg-end"
        alt="Responsive Image"
      />
    </div>
    <div class="col-lg-6 pt-4 px-0">
      <h1 class="text-center text-lg-start display-2 mb-2">
        &lt;Hi, I Am Max/&gt;
      </h1>
      <h2
        class="ms-0 ms-lg-4 text-muted text-center text-lg-start display-6 mb-3 mb-xl-4"
      >
        a Software Developer
      </h2>
      <div class="d-grid">
        <button
          class="btn btn-outline-success rounded-4 mx-auto ms-lg-4 btn-lg mt-1"
          type="button"
          @click.prevent="downloadCV('CV-Max.pdf', 'files/Lebenslauf.pdf')"
        >
          <img
            class="download-image"
            src="../assets/download.png"
            alt="Image"
          />
          <span>Download CV</span>
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="mb-2" v-show="!showFlag">
      <p class="mb-1 mb-0">{{ smText }}</p>
      <p class="btn mb-0" @click="showFlag = true">Show More</p>
    </div>

    <div class="mb-lg-5" v-show="showFlag">
      <p class="mb-0">{{ text }}</p>
      <p class="btn d-md-none mb-0" @click="showFlag = false">Show Less</p>
    </div>
  </div>

  <hr />
</template>

<style scoped>
.large-image {
  width: 55%;
  height: auto;
}
.download-image {
  width: 30px;
  height: auto;
  margin-right: 10px;
  margin-bottom: 4px;
}
</style>
