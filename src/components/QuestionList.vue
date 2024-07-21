<script setup lang="ts">
import { computed, ref } from 'vue';
import type { IQuestion } from '@/utils/constants';
import MyButtonNext from './Buttons/MyButtonNext.vue';
import MyQuestion from './TestQuestion.vue'
import QuestionAnswers from './QuestionAnswers.vue';
import FinalMessage from './FinalMessage.vue';
import TestCompleted from './TestCompleted.vue';
import QuestionImage from './QuestionImage.vue';
import { getImgUrl } from '@/utils/getImage';

const props = defineProps<{
    questions: IQuestion[]
}>();

const currentIndex = ref(0);
const isCompleted = ref(false);
const showFinalMessage = ref(false);
const selectedOption = ref<string | null>(null);

const currentQuestion = computed(() => props.questions[currentIndex.value]);

const progressPercentage = computed(() => {
    return ((currentIndex.value + 1) / props.questions.length) * 100;
});

const nextQuestion = () => {
    if (currentIndex.value < props.questions.length - 1) {
        currentIndex.value++;
        selectedOption.value = null;
    } else {
        isCompleted.value = true;
        console.log('Конец опроса');
        setTimeout(() => {
            showFinalMessage.value = true;
        }, 3000);
    }
};

const handleSelected = (value: string) => {
    selectedOption.value = value;
    console.log('Selected value:', value);
};
</script>

<template>
    <div v-if="!showFinalMessage" class="progress-bar">
        <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
    </div>
    <div v-if="!isCompleted && !showFinalMessage" class="question__container">
        <MyQuestion :question="currentQuestion.question" />
        <QuestionImage :currentQuestion="currentQuestion" />
        <QuestionAnswers :options="currentQuestion.options" @update:selected="handleSelected"
            :type="currentQuestion.type" />
        <MyButtonNext :disabled="!selectedOption" @click="nextQuestion">Далее</MyButtonNext>
    </div>
    <div v-else-if="isCompleted && !showFinalMessage" class="completion-message">
        <TestCompleted />
    </div>
    <div v-else-if="showFinalMessage">
        <FinalMessage />
    </div>
</template>

<style scoped>
.question__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.progress-bar {
    margin-top: 17px;
    width: 260px;
    height: 11px;
    background-color: rgba(242, 243, 243, 0.5915);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
}

.progress {
    height: 100%;
    background-color: #3BDE7C;
    transition: width 0.3s ease;
    border-radius: 30px;
}

.completion-message {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
