<script setup lang="ts">
import { useRouter } from 'vue-router';


defineProps<{
    title: string
    backgroundColor: string
    colorText: string
    borderLine: string
}>()
const router = useRouter();

function redirect() {
    router.push('/start')
}
</script>

<template>
    <button class="mybutton" :style="{ backgroundColor: backgroundColor, color: colorText, border: borderLine }"
        @click="redirect">
        {{ title }}
    </button>
</template>

<style scoped>
.mybutton {
    cursor: pointer;
    width: 189px;
    height: 41px;
    font-family: Merriweather;
    font-size: 14px;
    line-height: 17.6px;
    letter-spacing: 0.1em;
    text-align: center;
    padding: 13.05px 17.01px;
    border-radius: 20px;
    font-weight: 700;
}
</style>