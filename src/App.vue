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
//#A3F7FF blau
</script>
<style>
#app{
  background-color: #686E6F !important;
  
  color: #fff9fa;
}
.color1{
  background-color: #434747;
}
.color2{
  background-color: #b2b2b2 !important;
}
li{
  background-color: #b2b2b2!important;
}
.color3{
  background-color:  #98FF98 !important; 
}
.tcolor2{
  color: black;
}
.tcolor3{
  color: #98FF98;
}
.progress-bar{
  color: black !important;
}
mark{
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
 
}

</style>