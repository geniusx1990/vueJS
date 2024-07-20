<script setup lang="ts">
import { computed, defineComponent, inject, ref } from 'vue';
import type { IQuestion } from '@/utils/constants';
import QuestionComponent from './QuestionComponent.vue';
import MySpinner from './MySpinner.vue';
import router from '@/router';
const props = defineProps<{
    questions: IQuestion[]
}>();
defineComponent({
    components: {
        MySpinner,
    }
});

const currentQuestionIndex = ref(0);
const answers = ref<(string | null)[]>(Array(props.questions.length).fill(null));

const isCompleted = ref(false);
const showFinalMessage = ref(false);

const nextQuestion = () => {
    if (currentQuestionIndex.value < props.questions.length - 1) {
        currentQuestionIndex.value++;
    } else {
        isCompleted.value = true;
        console.log('All answers submitted:', answers.value);

        setTimeout(() => {
            showFinalMessage.value = true;
            router.push('/finish');
        }, 3000);
    }
};

const submitAnswer = (answer: string | null) => {
    answers.value[currentQuestionIndex.value] = answer;
    nextQuestion();
};

const progressPercentage = computed(() => {
    return ((currentQuestionIndex.value + 1) / props.questions.length) * 100;
});

</script>

<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
    </div>
    <div class="question__container">
        <QuestionComponent v-if="!isCompleted && props.questions[currentQuestionIndex]"
            :question="props.questions[currentQuestionIndex]" @submitAnswer="submitAnswer" />
        <div v-else-if="isCompleted && !showFinalMessage" class="completion-message">
            <p>Обработка результатов</p>
            <MySpinner />
        </div>
        <div v-else-if="showFinalMessage">
            <p>Все вопросы завершены. Спасибо!</p>
        </div>
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
