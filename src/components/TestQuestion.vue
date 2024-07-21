<script setup lang="ts">
const props = defineProps<{
    question: string,
}>();

</script>

<template>
    <p class="question__title">{{ question }}</p>
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