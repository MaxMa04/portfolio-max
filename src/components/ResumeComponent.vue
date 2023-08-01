<script>
import ResumeParagraphComponent from "./ResumeParagraphComponent.vue";
import SkillComponent from "./SkillComponent.vue";
import paragraphs from "../data/paragraphs.js";
import skills from "../data/skills.js";
export default {
  name: "ResumeComponent",
  components: { ResumeParagraphComponent, SkillComponent },
  data: () => {
    return {
      paragraphs,
      skills,
    };
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<template>
  <h1 class="text-center text-uppercase display-3 mb-5">
    My <mark class="color3 rounded-5">Resume</mark>
  </h1>
  <div class="container mt-5">
    <div class="row">
      <!-- Linke Seite mit der Überschrift -->
      <div class="col-md-4 text-center">
        <h1 class="display-6">&#8722;Education&#8722;</h1>
        <hr />
      </div>

      <!-- Rechte Seite mit dem Grid (eine Column) -->
      <div class="col-md-8">
        <resume-paragraph-component
          v-for="paragraph in paragraphs.filter(
            (p) => p.graduationGrade != null
          )"
          :key="paragraph.id"
          :paragraph="paragraph"
        >
        </resume-paragraph-component>
      </div>
    </div>

    <div class="row mt-4">
      <!-- Linke Seite mit der Überschrift -->
      <div class="col-md-4 text-center">
        <h1 class="display-6">&#8722;Experience&#8722;</h1>
        <hr />
      </div>

      <div class="col-md-8">
        <resume-paragraph-component
          v-for="paragraph in paragraphs.filter(
            (p) => p.graduationGrade == null
          )"
          :key="paragraph.id"
          :paragraph="paragraph"
        >
        </resume-paragraph-component>
      </div>

      <!-- Rechte Seite mit dem Grid (eine Column) -->
    </div>
  </div>
  <div class="row mt-4 mb-5">
    <!-- Linke Seite mit der Überschrift -->
    <div class="col-md-4 text-center">
      <h1 class="display-6">&#8722;Skills&#8722;</h1>
      <hr />
    </div>

    <div class="col-md-8 ">
      <div class="container">
        <div class="row">
          <skill-component
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          >
          </skill-component>
        </div>
      </div>
    </div>

    <!-- Rechte Seite mit dem Grid (eine Column) -->
  </div>

  <hr/>
</template>
<style></style>
