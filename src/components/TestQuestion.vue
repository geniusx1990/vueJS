<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    question: string,
}>();

const questionClass = computed(() => {
    const length = props.question.length;
    if (length > 38 && length < 51) {
        return 'question__title--medium';
    } else if (length >= 51 && length < 53) {
        return 'question__title--medium-short';
    } else if (length >= 54 && length < 82) {
        return 'question__title--long';
    } else if (length === 82) {
        return 'question__title--extra-long';
    } else if (length === 83) {
        return 'question__title--extra-extra-long';
    } else {
        return 'question__title--default';
    }
});
</script>

<template>
    <p :class="questionClass" class="question__title">{{ question }}</p>
</template>

<style scoped>
.question__title {
    font-family: PT Serif;
    letter-spacing: 0.05em;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;
}

.question__title--default {
    font-size: 20px;
    line-height: 25.88px;
}

.question__title--medium {
    font-size: 19px;
    line-height: 31px;
    padding-left: 41px;
    padding-right: 41px
}

.question__title--medium-short {
    font-size: 19px;
    line-height: 23px;
    padding-left: 38px;
    padding-right: 38px;
}

.question__title--long {
    font-size: 18px;
    line-height: 23.29px;
    padding-left: 35px;
    padding-right: 35px;
}

.question__title--extra-long {
    font-size: 16px;
    line-height: 20.7px;
    padding-left: 62px;
    padding-right: 62px;
}

.question__title--extra-extra-long {
    padding-left: 40px;
    padding-right: 40px;
}
</style>
