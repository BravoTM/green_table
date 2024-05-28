<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>

  <v-app>
    <Navbar/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </v-app>
</template>
