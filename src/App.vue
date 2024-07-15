<script setup lang="ts">
import { ref } from 'vue'
import './style.css'
import { RouterLink, RouterView } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="burger-menu" :class="{ open: isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav :class="{ open: isOpen }">
        <RouterLink to="/">ГЛАВНАЯ</RouterLink>
        <RouterLink to="/about">ИНФОРМАЦИЯ О ТЕСТЕ</RouterLink>
        <RouterLink to="/start">ПРОЙТИ ТЕСТ</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
