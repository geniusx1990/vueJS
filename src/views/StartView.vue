<script setup lang="ts">
import QuestionList from '../components/QuestionList.vue';
import { data } from '../utils/constants';

const props = defineProps<{
    updateTestStatus: (status: boolean) => void;
}>();
</script>

<template>
    <div class="start">
        <QuestionList :questions="data" :updateTestStatus="props.updateTestStatus" />
    </div>
</template>

<style>
.start {
    display: flex;
    flex-direction: column;
    color: #ffff;
    align-items: center;
    height: 91%;
}
</style>
