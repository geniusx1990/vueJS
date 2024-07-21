<script setup lang="ts">
const props = defineProps<{
    option: string;
    modelValue: string | null;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};

const handleClick = () => {
    emit('update:modelValue', props.option);
};

function isNumber(option: string) {
    return !isNaN(Number(option));
}

function optionLength(option: string) {
    return option.length > 20;
}
</script>

<template>
    <div class="answer" @click="handleClick" :class="{
        selected: props.modelValue === props.option,
        numberOption: isNumber(props.option),
        long: optionLength(props.option)

    }">
        <input type="radio" :id="option" :value="option" name="drone" @change="handleChange"
            :checked="props.modelValue === props.option" />
        <label class="question__label" :for="option">{{ option }}</label>
    </div>
</template>

<style scoped>
.answer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F2F3F326;
    margin-bottom: 8px;
    transition: background-color 0.3s ease;
    padding-left: 35px;
    cursor: pointer;
    height: 50px;
}

input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    position: relative;
    cursor: pointer;
}

input[type="radio"]:checked {
    border-color: #272727;
    background-color: #2950C2;
}

.question__label {
    display: block;
    width: 80%;
    font-family: PT Serif;
    font-size: 18px;
    line-height: 58px;
    letter-spacing: 0.05em;
    text-align: left;
}

.answer:hover {
    background-color: var(--vt-c-yellow_second);
}

.answer.selected {
    background-color: #FFC700;
}

.answer.numberOption {
    line-height: 49px;
    height: 40px;
}

.answer.long {
    line-height: 20px;
    height: 78px;
}

.answer.long .question__label {
    line-height: 20px;
}
</style>
