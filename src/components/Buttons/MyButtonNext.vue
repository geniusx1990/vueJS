<script setup lang="ts">
const props = defineProps<{
    disabled: boolean;
}>();

const emit = defineEmits<{
    (e: 'click'): void;
}>();

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>

<template>
    <button @click="handleClick" :disabled="disabled" class="next__button">
        <slot></slot>
    </button>
</template>

<style scoped>
.next__button {
    font-family: Merriweather;
    font-weight: 700;
    background-color: var(--vt-c-yellow_second);
    width: 189px;
    height: 41px;
    color: #0D0C11;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 28px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.next__button:disabled {
    color: #8E8E8E;
    background-color: #DADADA;
    cursor: not-allowed;
    box-shadow: 0px 4px 10px 0px #00000040 inset;
}
</style>
