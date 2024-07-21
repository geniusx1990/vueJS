<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import Description from '@/components/DescriptionSection.vue';
import DetailsSection from '../components/DetailsSection.vue';
import FooterSection from '../components/FooterSection.vue';
</script>

<template>
  <div class="home">
    <HeroSection />
    <Description id="more" />
    <DetailsSection />
    <FooterSection />
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
