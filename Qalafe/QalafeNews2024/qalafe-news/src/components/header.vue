<template>
    <div class="headers">
        <div class="logo-container">
            <img class="logo-img" src="./../assets/Icon.png" />
            <div class="logo-text">QALAFE NEWS</div>
        </div>
        <nav class="navigation-menu">
            <ul class="menu-items">
                <li class="menu-item">Politics</li>
                <li class="menu-item">World</li>
                <li class="menu-item">Economy</li>
            </ul>
        </nav>
    </div>
</template>
<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-header {
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  width: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-left: 250px;
  color: #f7f7f4;
  margin-bottom:25px;
}

@media (max-width: 991px) {
  .logo-container {
    margin-left: 10px;
    font-size: 40px;
  }
}

.logo-img {
  width: 58px;
  aspect-ratio: 1.05;
  object-fit: contain;
}

.logo-text {
  font: 32px Alatsi;
  margin: 0;
}

@media (max-width: 991px) {
  .logo-text {
    font-size: 40px;
  }
}

.navigation-menu {
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;
  padding: 10px 50px;
  background-color: #1a1a1a;
  color: #fdfdfd;
  font-size: 13px;
  line-height: 1;
  width: 850px;
  margin: auto;
}

@media (max-width: 991px) {
  .navigation-menu {
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0 20px;
  }
}

.menu-items {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 991px) {
  .menu-items {
    flex-wrap: wrap;
  }
}

.menu-item {
  font-family: Alatsi, sans-serif;
}
</style>