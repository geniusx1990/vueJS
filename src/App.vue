<script setup lang="ts">
import { RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import { ref } from 'vue';

const isTestCompleted = ref(false);
const updateTestStatus = (status: boolean) => {
  isTestCompleted.value = status;
};
</script>

<template>
  <MyHeader :isTestCompleted="isTestCompleted" />
  <RouterView :updateTestStatus="updateTestStatus" />
</template>
