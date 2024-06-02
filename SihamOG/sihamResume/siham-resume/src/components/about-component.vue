<script setup lang="ts">

</script>

<template>
    <div class="about-me" data-aos="fade-up" data-aos-duration="500">
        <div class="section-container">
        <div class="section-title">
            { about me }
        </div>
        <div class="about-container">
            <img src="./../assets/icon.png" alt="selfie">
            <div class="content scale-up-center">
                <p>
                    I'm a software developer and visual artist based in <span class="yellow"> Edmonton, Alberta</span>,
                    blending technical expertise with <span> artistic creativity </span> to craft <span>unique digital experiences</span>.
                    I'm particularly interested in <span class="yellow">machine learning</span> and <span class="yellow"> backend development</span>, where I thrive in creating
                    intricate algorithms.
                </p>
                <p>
                    I have nearly <span class="yellow">five years</span> of experience as a full-stack software developer. Here are some of my
                    favorite technologies:
                </p>
                <div class="lang-list">
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="500">
                            Typescript
                        </li>
                        <li data-aos="fade-up" data-aos-duration="500">
                            Vue.js
                        </li>
                        <li data-aos="fade-up" data-aos-duration="500">
                            Javascript ES6+
                        </li>
                    </ul>
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="500">
                            C#
                        </li>
                        <li data-aos="fade-up" data-aos-duration="500">
                            Python
                        </li>
                        <li data-aos="fade-up" data-aos-duration="500">
                            Java
                        </li>
                    </ul>
                </div>
                <p>
                    As a <span class="yellow">professional landscape painter </span>, I devote my time outside of coding to creating beautiful city
                    and urban landscapes with oil and gouache paint.
                </p>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>

.about-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color:rgb(40 34 67 / 75%); */
    @media (max-width: 800px) {
        flex-direction: column;
    }
}

img {
    width: 300px;
    @media (max-width: 800px) {
        width: 180px;
    }
}

.content {
    color: white;
    font-family: Cormorant;
    text-align: left;
    padding-left: 2%;
    font-size: 20px;

    line-height: 25px;
    letter-spacing: 1px;
}

p {
    padding: 10px;
}

.lang-list {
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>