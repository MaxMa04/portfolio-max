<script setup>
import {useRoute} from 'vue-router';
import {ref, onBeforeMount} from 'vue';
import projects from '../data/projects.js'
import ProjectDetailHeader from '@/components/ProjectDetailHeader.vue';
import ProjectDetailGalleryVue from '@/components/ProjectDetailGallery.vue';
import ProjectDetailBody from '@/components/ProjectDetailBody.vue';

const route = useRoute();
const {id} = route.params;
const project = ref(null)
onBeforeMount(() =>{
    project.value = projects.find(p => p.id === parseInt(id));
})

</script>
<template>
    <div class="container px-5">
        <project-detail-header :project="project"></project-detail-header>
        <project-detail-gallery-vue :project="project"></project-detail-gallery-vue>
        <project-detail-body :project="project"></project-detail-body>
    </div>
    
</template>
