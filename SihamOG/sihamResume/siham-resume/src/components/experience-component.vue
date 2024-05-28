<template>
    <div class="experience">
        <div class="section-container">
            <div class="section-title" data-aos="fade-up" data-aos-duration="900">
                { experience }
            </div>
            <div class="experience-content">
                <div class="experience-list">
                    <ul>
                        <li>
                            Software Developer II
                            <br>
                            <span class="yellow">LawDepot</span>
                        </li>
                        <li>
                            Software Developer I
                            <br>
                            <span class="yellow">LawDepot</span>
                        </li>
                        <li>
                            Junior Full Stack Developer
                            <br>
                            <span class="yellow">Liberty Security</span>
                        </li>
                    </ul>
                </div>
                <div class="experience-description">
                    <div class="career-header">Software Developer 2 @ <span class="yellow">Law Depot - 9 months</span>
                    </div>
                    <div class="career-info">
                        <ul>
                            <li>
                                Reduced expenses for Liberty Security, $50K annually, by re-designing processes within company
                                departments through automation and online documentation.
                            </li>
                            <li>
                                Personally built service web-pages allowing technicians to fill out mandatory documents on their
                                tablets and submit them in real time
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">



</script>

<style scoped>
.experience-content {
    display: flex;
    color: white;
    font-family: Cormorant;
    font-size: 20px;
    text-align: left;
    align-items: center;
}

.experience-description {
    width: 600px;
    padding: 2%;
}

.career-header {
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 6px;
}

.career-info {
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 1px
}

.career-info li{
    padding-bottom: 15px;
}

.experience-list ul {
    list-style: none;
}

.experience-list li {
    padding: 0 0 0 8px;
    margin-bottom: 15px;
    border-right: solid;
    border-color: #F9CE7A;
    /* border-image: linear-gradient(to right, #000 50%, transparent 50%) 100% 1; */
}

.experience-list li:hover {
    background: rgba(110, 106, 61, 0.435);
}
</style>