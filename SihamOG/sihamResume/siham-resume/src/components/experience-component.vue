<template>
    <div class="experience">
        <div class="experience-content">
            <div class="experience-list">
                <div v-for="jobs in jobList" :key="jobs.id">
                    <div @click="handleItemClick(jobs.id)">
                        <ul>
                            <li :class="{ active: jobs?.id == (index + 1) }">
                            {{ jobs.jobTitle }}
                                <br>
                                <span>
                                    {{ jobs.jobName }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-if="props.jobList[index]">
                <div class="experience-description">
                    <div class="career-header"> {{ props.jobList[index].jobTitle + " @ " +
                    props.jobList[index].jobInfo?.jobLength }} <span class="yellow"></span>
                    </div>
                    <div class="career-info">
                        <ul>
                            <li v-for="item in props.jobList[index].jobInfo?.description" :key="item">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { type JobExperience } from "./types"
import { ref } from "vue";
const props = defineProps({

    jobList: {
        type: Array<JobExperience>,
        required: true,
    },
});

var index = ref(0);

const handleItemClick = (id: number) => {
    index.value = id - 1;
}

</script>

<style scoped>
.experience-content {
    display: flex;
    color: white;
    font-family: Cormorant;
    font-size: 20px;
    text-align: left;
    align-items: center;

    @media (max-width: 425px) {
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
}

.experience-list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.experience-list ul {
    list-style: none;
}

.experience-list li {
    padding: 0 8px 0 8px;
    margin-bottom: 15px;
    /* border-image: linear-gradient(to right, #000 50%, transparent 50%) 100% 1; */
}

.experience-list li:hover {
    background: rgba(110, 106, 61, 0.435);
}

.experience-description {
    width: 600px;
    padding: 2%;
    height: 375px;

    @media (max-width: 800px) {
        height: auto;
        width: auto;
}
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

.career-info li {
    padding-bottom: 15px;
}

.active {
    border-right: solid;
    border-color: #F9CE7A;
    color:#F9CE7A;

    transition: border-width 0.4s linear;
}
</style>