<template>
  <div class="block">
    <header-section/>
    <home-page/>
  </div>
</template>

<script>
import HeaderSection from "./components/header.vue";
import HomePage from "./components/home-page.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    HomePage
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-image: linear-gradient(360deg, #e0c6a8 75%, #202742 25%);
  height: 800px;
  margin-bottom: 80px;
}
</style>
