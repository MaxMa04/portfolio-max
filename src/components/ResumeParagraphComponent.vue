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
    };
  },
  created() {},
  mounted() {
    this.text = this.paragraph.description;
    this.smText = truncateTextToXWords(this.text, 20);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  updated() {},
  methods: {
    handleResize() {
      if (window.innerWidth <= 768) {
        this.showFlag = false;
      } else {
        this.showFlag = true;
      }
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col">
      <div class="card mb-2">
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
