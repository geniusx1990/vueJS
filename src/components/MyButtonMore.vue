<script setup lang="ts">


</script>

<template>
    <button class="mybutton">
        <img class="arrow_icon" src="../assets/arrow_icon.svg" alt="test">
    </button>
</template>

<style scoped>
.mybutton {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--vt-c-white);
    border: none;
}

.mybutton img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>