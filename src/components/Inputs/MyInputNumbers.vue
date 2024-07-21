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
    <div class="answer number-box" @click="handleClick" :class="{ selected: props.modelValue === props.option }"
        :style="{ backgroundColor: option, borderColor: props.modelValue === props.option ? '#FFC700' : 'transparent' }">
        <label class="question__label_black" :for="option">{{ option }}</label>
    </div>
</template>

<style scoped>
.answer.number-box {
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.number-box {
    width: 41px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 6px solid transparent;
    box-sizing: border-box;
}

.answer.number-box:hover {
    background-color: #ffff;
}

.question__label_black {
    cursor: pointer;
    color: #0D0C11;
    font-family: PT Serif;
    font-size: 20px;
    line-height: 49px;
    position: absolute;
}
</style>
