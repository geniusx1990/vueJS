<script setup lang="ts">
import QuestionList from '../components/QuestionList.vue';
import { data } from '../utils/constants';

</script>

<template>
    <div class="start">
        <QuestionList :questions="data" />
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
