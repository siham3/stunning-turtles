<template>
    <div data-aos="fade-up" data-aos-duration="500">
        <div class="section-container">
            <div class="section-title">
                { experience }
            </div>
            <experience-component :jobList="jobList"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type JobExperience, type JobInfo } from './types'
import ExperienceComponent from './experience-component.vue';

const jobInfoList: JobInfo[] = [
    {
        description: [
            "As the Lead Architect, I was responsible for designing detailed project plans that were divided into sprints and tasks for the team Additionally contributing to the development of 50% of the projects.",
            "Guided team on our new tech stack upgrades for two of our biggest projects including our user account page and user's dashboard application which was used by more than half a million users",
            "Experienced both working diligently in a team setting and independently on smaller programming projects."
        ],
        jobLength: "9 months"
    },
    {
        description: [
            "Implemented customer focused dashboards that optimized user experiences and efficiency, adding to the company revenue annually and increasing user subscription.",
            "Was the head developer of projects building document dashboards for customers, the project increased our customer retention by 15%",
            "Experience in building REST-based web services and maintaining ASP.NET Web applications. "

        ],
        jobLength: "3 years"
    },
    {
        description: [
            "Reduced expenses for Liberty Security ($50K annually) by re-designing processes within company departments through automation and online documentation",
            "Created and developed new features in an already existing software system. Used APS.NET, HTML, and CSS for the front-end project development, Visual Studios in C# and Microsoft SQL for the backend.",
            "Operated as a project manager and configured project scope documents detailing descriptions, requirements, the timeline and return on investment for each project."
        ],
        jobLength: "1 year"
    }
];

const jobList: JobExperience[] = [
    {
        id: 1,
        jobTitle: 'Software Developer II',
        jobName: 'LawDepot',
        jobInfo: jobInfoList[0],
        active: 0,
    },
    {
        id: 2,
        jobTitle: 'Software Developer I',
        jobName: 'LawDepot',
        jobInfo: jobInfoList[1],
        active: 1
    },
    {
        id: 3,
        jobTitle: 'Junior Full Stack Developer',
        jobName: 'Liberty Security',
        jobInfo: jobInfoList[2],
        active: 1,
    }
];
</script>