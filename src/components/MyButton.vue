<script setup lang="ts">

defineProps<{
    title: string
    backgroundColor: string
    colorText: string
    borderLine: string
}>()

</script>

<template>
    <button class="mybutton" :style="{ backgroundColor: backgroundColor, color: colorText, border: borderLine }">
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
    letter-spacing: 10%;
    text-align: center;
    padding: 13.05px 17.01px;
    border-radius: 20px;
    font-weight: 700;
}
</style>