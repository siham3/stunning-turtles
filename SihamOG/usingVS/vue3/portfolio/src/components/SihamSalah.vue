<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SihamSalah',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1 { */
  /* position: absolute; */
  /* width: 1510px;
  height: 905px;
  left: 172px;
  top: 87px; */

  /* display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 112px 0px;

  position: absolute;
  width: 1315px;
  height: 730px;
  left: 40px;
  top: 146px; */

  /* font-family: 'Cormorant';
  font-style: normal;
  font-weight: 700;
  font-size: 380px; */
  /* line-height: 130px;  */
  /* or 57% */

  /* display: flex;
  align-items: center;
  font-feature-settings: 'liga' off; */

  /* color: #2C0E00;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>