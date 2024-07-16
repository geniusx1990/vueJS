<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';

const isOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
const isStartPage = computed(() => route.path === '/start')

</script>

<template>
    <header class="header">
        <div v-if="isStartPage" class="header__test_title_container" :class="{ open: isOpen }" @click="toggleMenu">
            <img src="../assets/brain.svg" alt="brain" width="48px" height="47px">
            <h1 class="header__title">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</h1>
        </div>
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
</template>

<style scoped>
.header__test_title_container {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 48px;
    z-index: 2;
}

.header__test_title_container.open {
    display: none;
}

.header__title {
    font-family: Yeseva One;
    font-size: 12px;
    font-weight: 700;
    line-height: 13.86px;
    letter-spacing: 5%;
    margin-left: 9px;
    color: var(--vt-c-yellow_second);
}


header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
}

.header {
    background-color: var(--vt-c-black);
    padding: 17px 0px 13px 15px;
    margin: 0;
    height: 49px;
    /*   box-shadow: 0px 4px 4px 0px #00000040;
 */
}

nav a.router-link-exact-active {
    color: var(--vt-c-yellow);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    color: var(--vt-c-white);
    padding: 0 23px;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: 24px;
    height: 16px;
}

.burger-menu span {
    position: absolute;
    height: 2.67px;
    width: 100%;
    background: var(--vt-c-gray);
    transition:
        transform 0.3s,
        opacity 0.3s;
}

.burger-menu span::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--vt-c-gray_white);
    opacity: 0.3;
}

.burger-menu span:nth-child(1) {
    top: 0;
}

.burger-menu span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.burger-menu span:nth-child(3) {
    bottom: 0;
}

.burger-menu.open span:nth-child(1) {
    transform: rotate(45deg) translateY(9px);
    background-color: var(--vt-c-yellow_second);
    width: 28px;
}

.burger-menu.open span:nth-child(2) {
    opacity: 0;
}

.burger-menu.open span:nth-child(3) {
    transform: rotate(-45deg) translateY(-9px);
    background-color: var(--vt-c-yellow_second);
    width: 28px;
}

.burger-menu.open {
    position: absolute;
    right: 13px;
    z-index: 100;
}

nav.open {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: yellow;
    height: 100vh;
    z-index: 12;
    top: 0;
}



@media (max-width: 768px) {
    .burger-menu {
        display: flex;
    }

    nav {
        display: none;
        position: absolute;
        padding-top: 110px;
        left: 0;
        width: 100%;
        background-color: var(--vt-c-black);
    }

    nav a {
        display: block;
        border: none;
        width: 100%;
        text-align: left;
    }

    nav a:nth-child(2) {
        padding: 27px 0px 27px 23px;
    }
}
</style>