<script setup lang="ts">
import type { IQuestion } from '@/utils/constants';
import { getImgUrl } from '@/utils/getImage';
import { computed } from 'vue';

const props = defineProps<{
    currentQuestion: IQuestion,
}>();

const IMAGESOURCE = computed(() => {
    return props.currentQuestion.img ? getImgUrl(props.currentQuestion.img) : null;
});


</script>

<template>
    <img v-if="IMAGESOURCE" :src="IMAGESOURCE" alt="test" class="question__image">
</template>

<style scoped>
.question__title {
    font-family: PT Serif;
    font-size: 20px;
    line-height: 25.88px;
    letter-spacing: 0.05em;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
}
</style>