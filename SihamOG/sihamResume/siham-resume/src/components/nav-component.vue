<template>
    <div class="headers">
        <div class="left-header">
            <div id="header-eng-name">
                siham salah.
            </div>
            <nav>
                <a href="#" class="active" v-scroll-to="'#about'">about</a>
                <a href="#" v-scroll-to="'#experience'">experience</a>
                <a href="#" v-scroll-to="'#project'">project</a>
                <a href="#" v-scroll-to="'#art'">art</a>
            </nav>
        </div>
        <div class="right-header">
            <div id="space"></div>
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
    width: 141px;
}

#header-arab-name {
    width: 140px;
}

#space {
    width: 200px;

    @media (max-width: 800px) {
        width: 50px;
    }
}

a:hover {
    color: #F9CE7A;
}

nav {
    font-family: Cormorant;
    font-weight: 800;
    width: 320px;
}

nav a {
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
    color:#F9CE7A;
}

.headers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0px 4px 8px;
    
    background-color: rgba(32, 38, 65, 0.8);
}
</style>