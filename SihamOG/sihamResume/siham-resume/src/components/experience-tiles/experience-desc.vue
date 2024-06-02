<template>
    <div>
        <div class="experience-description">
            <div class="career-header"> {{ props.title + " @ " +props.item?.jobLength }} <span class="yellow"></span>
            </div>
            <div class="career-info">
                <ul>
                    <li v-for="item in props.item?.description" :key="item">
                       {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { JobInfo } from "./types";

const props = defineProps({

    item:
    {
        type: Object as PropType<JobInfo>,
		required: true,
    },
    title:
    {
        type: String,
        required: true
    }

});

const emit = defineEmits({
	itemClick: (job: string) => !!job,
});

</script>

<style></style>