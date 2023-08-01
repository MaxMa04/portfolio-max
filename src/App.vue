<template>
  <navbar-component></navbar-component>
  <router-view/>
  <scroll-top-button-component></scroll-top-button-component>
  <footer-component></footer-component>
</template>
<script>

import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import ScrollTopButtonComponent from './components/ScrollTopButtonComponent.vue';

export default {
  
  components: {
    FooterComponent,
    NavbarComponent,
    ScrollTopButtonComponent,
  
  }
}
</script>
