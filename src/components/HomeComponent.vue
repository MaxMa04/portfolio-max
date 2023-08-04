<script>
import { truncateTextToXWords } from "@/helpers/helpers.js";
export default {
  components: {},
  name: "HomeComponent",
  data: () => {
    return {
      words: [
        "Software Developer",
        "Student",
        "Mobile App Developer",
        "Freelancer",
        "Full-Stack Developer",
       
      ],
      part: "",
      i: 0,
      offset: 0,
      len: 0,
      forwards: true,
      skip_count: 0,
      skip_delay: 15,
      speed: 70,
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

  created() {
    this.len = this.words.length;
    this.wordflick();
  },
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
    wordflick() {
      setInterval(() => {
        if (this.forwards) {
          if (this.offset >= this.words[this.i].length) {
            this.skip_count++;
            if (this.skip_count === this.skip_delay) {
              this.forwards = false;
              this.skip_count = 0;
            }
          }
        } else {
          if (this.offset === 0) {
            this.forwards = true;
            this.i++;
            this.offset = 0;
            if (this.i >= this.len) {
              this.i = 0;
            }
          }
        }
        this.part = this.words[this.i].substr(0, this.offset);
        if (this.skip_count === 0) {
          if (this.forwards) {
            this.offset++;
          } else {
            this.offset--;
          }
        }
      }, this.speed);
    },
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
      <h1 class="text-center text-lg-start display-1 mb-2">
        &lt;Hi, I Am Max/&gt;
      </h1>
      <div
        class="d-flex align-items-center justify-content-center justify-content-lg-start"
      >
        <span class="word tcolor3 display-6 ms-lg-4">a {{ part }}</span>
      </div>

      <hr />
      <div class="d-grid">
        <button
          class="btn color3 rounded-4 mx-auto ms-lg-4 btn-lg mt-3 d-flex align-items-center"
          type="button"
          @click.prevent="downloadCV('CV-Max-Mannstein.pdf', 'files/CV.pdf')"
        >
          <i class="bi bi-download me-2" style="font-size: 25px"></i> Download
          CV
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
li {
  background-color: transparent !important;
}
.large-image {
  width: 55%;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
  height: auto;
}
.download-image {
  width: 30px;
  height: auto;
  margin-right: 10px;
  margin-bottom: 4px;
}
.word {
  text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
  
}
.display-1{
  white-space: nowrap;
}
</style>
