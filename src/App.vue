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
<style>
#app{
  background-color: #686E6F !important;
  
  color: #F6E8EA;
}
.color1{
  background-color: #434747;
}
.color2{
  background-color: #BBBBBF;
}
li{
  background-color: #BBBBBF!important;
}
.color3{
  background-color: #A3F7FF;
}
.progress-bar{
  color: black;
}
</style>