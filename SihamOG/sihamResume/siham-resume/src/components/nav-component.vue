<template>
    <div class="headers">
        <div class="left-header">
            <div id="header-eng-name">
                siham salah.
            </div>
            <nav class="navigation">
                <a href="#" class="header-nav active" v-scroll-to="'#about'">about</a>
                <a href="#" class="header-nav" v-scroll-to="'#experience'">experience</a>
                <!-- <a href="#" class="header-nav" v-scroll-to="'#project'">project</a>
                <a href="#" class="header-nav" v-scroll-to="'#art'">art</a> -->
            </nav>
        </div>
        <div class="right-header">
            <div class="icons">
                <div class="div-icon">
                    <a href="https://www.turtlescanpaint.ca">
                        <img src="./../assets/art.png" alt="icon">
                    </a>
                </div>
                <div class="div-icon">
                    <a href="mailto:sihamcp@gmail.com">
                        <img class="mail" src="./../assets/email.png" alt="icon">
                    </a>
                </div>
                <div class="div-icon">
                    <a href="https://www.linkedin.com/in/sihamsalah">
                        <img src="./../assets/linkedin.png" alt="icon">
                    </a>
                </div>
            </div>
            <div id="header-arab-name">سهام صلاة</div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
h3 {
    color: white;
    padding: 3%;
    font-family: Cormorant;
    font-weight: 800;
    font-size: 28px;
}

#header-eng-name {
    width: 160px;
}

#header-arab-name {
    width: 140px;
}

.icons {
    display: flex;
    justify-content: flex-end;
    width: 200px;

    @media (max-width: 800px) {
        width: 80px;
    }
}

img {
    height: 20px;
}

.mail {
    height: 20px;
}

.div-icon {
    padding-left: 5px;
    display: block;
    @media (max-width: 800px) {
        padding-left: 10px;
    }
}

.header-nav:hover {
    color: #F9CE7A;
}

nav {
    font-family: Cormorant;
    font-weight: 800;
    width: 230px;
    /* width:320px; */
}

.navigation a {
    padding: 3%;
    text-decoration: none;
    color: white;
    font-size: 22px;
}

.left-header,
.right-header {
    display: flex;
    align-items: center;
    color: white;
    padding: 2%;
    font-family: Cormorant;
    font-weight: 800;
    font-size: 28px;
}

.left-header {
    @media (max-width: 640px) {
        visibility: hidden;
        width: 0px;
    }

    @media (min-width: 641px) {
        visibility: visible;
    }
}

.active {
    color: #F9CE7A;
}

.headers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0px 4px 8px;

    background-color: rgba(32, 38, 65, 0.8);
}
</style>