<script setup lang="ts">
import SectionTwo from '@/components/SectionTwo.vue';
import SectionOne from '../components/SectionOne.vue'
</script>

<template>
  <div class="home">
    <SectionOne />
    <SectionTwo />
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
