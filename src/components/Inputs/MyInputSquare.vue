<script setup lang="ts">
const props = defineProps<{
    option: string;
    modelValue: string | null;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const handleClick = () => {
    emit('update:modelValue', props.option);
};
</script>

<template>
    <div class="answer color-box" @click="handleClick" :class="{ selected: props.modelValue === props.option }"
        :style="{ backgroundColor: option, borderColor: props.modelValue === props.option ? '#FFC700' : 'transparent' }">
    </div>
</template>

<style scoped>
.color-box {
    width: 75px;
    height: 75px;
    display: inline-block;
    cursor: pointer;
    border: 6px solid transparent;
    box-sizing: border-box;
}

.color-box:hover {
    border-color: #000;
}

.color-box.selected {
    border-color: #FFC700;
}
</style>
