<script>
import { truncateTextToXWords } from "@/helpers/helpers.js";
export default {
  name: "ResumeParagraphComponent",
  props: ["paragraph"],
  components: {},
  data: () => {
    return {
      showFlag: false,
      text: "",
      smText: "",
      prevWidth: null,
    };
  },
  created() {
    if(window.innerWidth > 768){
      this.showFlag = true;
    }
  },
  mounted() {
    this.text = this.paragraph.description;
    this.smText = truncateTextToXWords(this.text, 20);
    this.prevWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  updated() {},
  methods: {
    handleResize() {
      if (window.innerWidth != this.prevWidth) {
        if (window.innerWidth <= 768) {
          this.showFlag = false;
        } else {
          this.showFlag = true;
        }
      } else {
        return;
      }
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col">
      <div class="card mb-3">
        <h3 class="card-header color3">{{ paragraph.title }}</h3>
        <ul class="list-group list-group-flush">
          <li v-if="paragraph.graduationGrade != null" class="list-group-item">
            Graduation Grade: {{ paragraph.graduationGrade }}
          </li>
          <li class="list-group-item">
            <i class="bi bi-clock-history"></i> {{ paragraph.time }}
          </li>
          <li class="list-group-item">
            <i class="bi bi-geo-alt"></i> {{ paragraph.location }}
          </li>
        </ul>
        <div>
          <div class="card-body color2" v-show="!showFlag">
            <p class="card-text mb-0">{{ smText }}</p>
            <p class="btn mb-0" @click="showFlag = true">Show More</p>
          </div>

          <div class="card-body color2" v-show="showFlag">
            <p class="card-text mb-0">{{ text }}</p>
            <p class="btn d-md-none mb-0" @click="showFlag = false">Show Less</p>
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