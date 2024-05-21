<template>
    <div class="about">
        <nav-component />
        <div class="container">
            <div>
            </div>
            <div class="title">
                <!-- <img src="./../assets/salam.png" alt="salams"> -->
                <div id="title-text">
                    Software Developer 
                    <span id="and">&</span> 
                    Professional Artist
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavComponent from "./nav-component.vue";
</script>

<style scoped>
.container {
    /* background-color: #3E2A51; */
    display: flex;
    justify-content: center;
    min-height: 80vh;
    margin: 0 12%;
    flex-direction: column;
}

#and {
    color: #F9CE7A;
}

#title-text {
    color: white;
    font-family: Cormorant;
    font-weight: 650;
    font-size: 80px;
    text-align: left;
    line-height: 75px;
    letter-spacing: 0px;
    padding: 40px 20px;

    background-image: url('./../assets/salam.png');
    background-position: left -20px;
    background-size: 190px;
    background-repeat: no-repeat;

    border-bottom: solid;
    border-width: 2px;
    border-block-color: #F9CE7A;

    @media (max-width: 530px) {
        font-size: 40px;
        line-height: 40px;
        background-size: 150px;
        padding: 30px 20px;
        background-position: left -18px;
    }
}
</style>