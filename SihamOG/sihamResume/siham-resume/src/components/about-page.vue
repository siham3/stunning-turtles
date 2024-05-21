<template>
    <div class="about">
        <nav-component />
        <div class="container">
            <div>
                hello
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavComponent from "./nav-component.vue";
</script>

<style scoped>
/* .about {
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    min-width: 800px;
} */
.container {
    background-color: #3E2A51;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 60%;
    min-height: 80vh;
    margin: 5% 12%;
}
</style>