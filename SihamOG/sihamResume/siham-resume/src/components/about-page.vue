<template>
    <div class="about">
        <nav-component />
        <div class="container">
            <div class="space">
            </div>
            <div class="title">
                <div id="title-text">
                    Software Developer 
                    <span id="and">&</span> 
                    Professional Artist
                </div>
            </div>
            <div id="intro-text">
                Combining years of software development experience with a vibrant artistic sensibility, as a Muslim African-Arab woman, I craft solutions that are not only technically robust but also culturally resonant.
            </div>
            <button> say hi! </button>

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
    justify-content: flex-start;
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

.space {
    height: 300px;
    @media (max-width: 530px) {
        height: 180px;
    }
}

#intro-text {
    color: white;
    text-align: right;
    font-size: 27px;
    font-family: Bellefair;
    padding: 20px;
    @media (max-width: 530px) {
        text-align: center;
    }
}

button {
 border: solid;
 color:#F9CE7A;
 border-width: 2px;
 border-color: #F9CE7A;
 height:50px;
 width: 125px;
 background-color: transparent;
 font-family: Cormorant;
 font-size: 30px;
 border-radius: 15%;
 margin:0 20px;

 @media (max-width: 530px) {
    height:40px;
    width: 75px;
    font-size: 23px;
    align-self: center;
    }
}

button:hover{
    background: rgba(110, 106, 61, 0.435);
}
</style>