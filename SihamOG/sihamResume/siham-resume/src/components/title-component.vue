<template>
    <div class="about">
        <div class="header">
            <nav-component />
        </div>
        <div class="page-content">
            <div class="container">
                <div class="space">
                </div>
                <div class="title">
                    <div id="title-text" data-aos="fade-up">
                        Software Developer
                        <span class="yellow">&</span>
                        Professional Artist
                    </div>
                </div>
                <div class="intro-text">
                    Combining years of software development experience with a vibrant artistic sensibility, as a Muslim
                    African-Arab woman, I craft solutions that are not only technically robust but also culturally
                    resonant.
                </div>
                <button data-aos="fade-up" data-aos-duration="400" onclick="location.href='mailto:sihamcp@gmail.com';">
                    <img class="mail" src="./../assets/email.png" alt="icon"> say hi!
                </button>
            </div>
            <about-component id="about" />
            <experience-item id="experience" />
            <!-- <art-component id="art" /> -->
        </div>
        <div class="footer">
            Built and designed by Siham Salah <br>
            All rights reserved. ©
        </div>
    </div>
</template>
<script setup lang="ts">
import AboutComponent from "./about-component.vue";
import NavComponent from "./nav-component.vue";
import ExperienceItem from "./experience-item.vue";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
    AOS.init({
        disable: 'mobile',
        once: true
    });
})

</script>

<style scoped>
.container {
    display: flex;
    justify-content: flex-start;
    margin: 0 12%;
    padding-bottom: 5%;
    flex-direction: column;
    border-bottom: solid;
    border-color: #F9CE7A;
    border-width: 2px;
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
    transition: all 2s;

    /* Salam styling*/
    background-image: url('./../assets/salam.png');
    background-position: left -20px;
    background-size: 190px;
    background-repeat: no-repeat;

    border-bottom: solid;
    border-width: 2px;
    border-block-color: #F9CE7A;

    @media (max-width: 530px) {
        font-size: 50px;
        line-height: 45px;
        background-size: 150px;
        padding: 30px 20px;
        background-position: left -18px;
    }
}

.space {
    height: 400px;

    @media (max-width: 530px) {
        height: 235px;
    }
}

.page-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.intro-text {
    color: white;
    text-align: right;
    font-size: 27px;
    font-family: Bellefair;
    padding: 20px;

    @media (max-width: 530px) {
        text-align: center;
    }
}

.header {
    width: -webkit-fill-available;
    position: fixed;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
}

button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border: solid;
    color: #F9CE7A;
    border-width: 2px;
    border-color: #F9CE7A;
    height: 70px;
    width: 155px;
    background-color: transparent;
    font-family: Cormorant;
    font-size: 30px;
    border-radius: 15%;
    margin: 0 20px;

    @media (max-width: 530px) {
        height: 60px;
        width: 120px;
        font-size: 23px;
        align-self: center;
    }
}

.enter-active,
.leave-active {
    transition: all 3s ease-in-out;
}

.footer {
    font-family: Cormorant;
    color: #FFFFFF;
    opacity: 90%;
    font-size: 20px;
    padding: 3%;
}

.mail {
    height: 30px;
}

button:hover {
    background: rgba(110, 106, 61, 0.435);
}
</style>./about-component.vue