<template>
  <div class="page">
    <SihamSalah msg="Siham Salah"/> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SihamSalah from './components/SihamSalah.vue';

export default defineComponent({
  name: 'App',
  components: {
    SihamSalah
  }
});
</script>

<style>
body {
  background-image: url("assets/1Isha_city.png");
  width: 1740px;
  height: 1080px;
  flex-shrink: 0;
}
  </style>
