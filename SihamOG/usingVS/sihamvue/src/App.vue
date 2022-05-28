<template>
  <!-- <SihamSalah msg="Siham Salah"/> -->
  <div>
    <div class="Siham">
      Siham
    </div>
     <div class="Salah">
       Salah
    </div>
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

* {
  background: #433145;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body {
  font-family: sans-serif;
  max-width: 700px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  font-weight: bolder;
  margin: 2rem 0;
  padding: 2rem 0;
  background-color: #333;
  color: orange;
}

h2 {
  margin: 1rem;

  text-align: center;
}

.Grid_item {
  color: #fff;
  border-radius: 10px;
  text-align: center;
  font-size: 1.3rem;

  border: 1px solid;
}
.Grid_item:nth-child(odd) {
  background-color: orange;
}
.Grid_item:nth-child(even) {
  background-color: red;
}
.Grid-container {
  background-color: #333333;
  color: #fff;
  box-shadow: 0 0 10px 2px;
  height: 300px;
  display: grid;
  grid-template-columns: 100px 100px auto 250px 150px;

  grid-template-columns: 25% 100px auto;
  grid-template-rows: 200px auto;

  grid-template-columns: 175px 175px 175px;

  grid-template-columns: repeat(3, 200px);
  grid-template-columns: repeat(3, 33.3333%);
  /* grid-template-columns: repeat(4, 5em); */

  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  grid-template-columns: 1fr 20% 1fr;

  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
