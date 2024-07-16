<script setup lang="ts">

defineProps<{
    title: string
}>()

</script>

<template>
    <button class="mybutton">
        {{ title }}
    </button>
</template>

<style scoped>
.mybutton {
    width: 189px;
    height: 41px;
    font-family: Merriweather;
    font-size: 14px;
    line-height: 17.6px;
    letter-spacing: 10%;
    text-align: center;
    padding: 13.05px 17.01px;
    background-color: var(--vt-c-yellow_second);
    border-radius: 20px;
    color: #0D0C11;
    border: none;
    font-weight: 700;
}
</style>