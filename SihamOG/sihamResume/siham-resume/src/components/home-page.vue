<script setup lang="ts">

</script>

<template>
  <div class="title-items">
    <nav>
      <a href="">about</a>
      <a href="">projects</a>
      <a href="">art</a>
    </nav>
    <div class="name-title">
      <div class="firstN">Siham</div>
      <div class="lastN">Salah</div>
    </div>
  </div>
</template>

<style scoped>
.name-title {
  color: #2C0E00;
  font-size: 413px;
  font-family: Cormorant;
  font-weight: 700;
  letter-spacing: -20px;
  text-align: left;
  opacity: 80%;
  height: 415px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  @media (min-width: 2000px) {
    font-size: 600px;
    height: 600px;
    justify-content: center;
  }

  @media (min-width: 1030px) {
    text-indent: 8%;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    height: 610px;
  }

  @media (max-width: 769px) {
    height: 500px;
  }

  @media (max-width: 675px) {
    height: 800px;
  }

  @media (max-width: 550px) {
    height: 1050px;
  }

  @media (max-width: 376px) {
    height: 1300px;
  }

  @media (max-width: 331px) {
    height: 1500px;
  }
}

.firstN {
  line-height: 410px;

  @media (max-width:768px) {
    line-height: 480px;
  }
}

.lastN {
  line-height: 0px;
}

a:hover {
  color: #FFB890;
}

a {
  color: #B08484;
  font-family: Cormorant;
  font-size: 70px;
  text-decoration: none;
  font-weight: 800;
  margin: 3%;
}

.title-items{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>
