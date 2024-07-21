<script setup lang="ts">
</script>

<template>
    <div class="spinner">
        <img src="../assets/spinner.svg" alt="spinner">
    </div>
</template>

<style scoped>
.spinner {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>