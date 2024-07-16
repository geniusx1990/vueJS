<script setup lang="ts">
import SectionTwo from '@/components/SectionTwo.vue';
import SectionOne from '../components/SectionOne.vue'
import SectionThree from '../components/SectionThree.vue'
import SectionFour from '../components/SectionFour.vue'

</script>

<template>
  <div class="home">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
