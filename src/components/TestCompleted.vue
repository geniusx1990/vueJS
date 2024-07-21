<script setup lang="ts">
import MySpinner from './MySpinner.vue';
</script>

<template>
    <p class="completion-message__header">Обработка<br> результатов</p>
    <MySpinner />
    <p class="completion-message__message">Определение стиля мышления...........
        .... ...................................................</p>
</template>

<style scoped>
.completion-message__header {
    font-family: PT Serif;
    font-size: 23px;
    line-height: 29.76px;
    letter-spacing: 0.05em;
    text-align: center;
    margin-top: 49px;
    margin-bottom: 39px;

}

.completion-message__message {
    margin-top: 27.68px;
    padding-left: 22px;
    padding-right: 22px;
    font-family: PT Serif;
    font-size: 14px;
    line-height: 18.12px;
    letter-spacing: 0.05em;
    text-align: left;
}
</style>