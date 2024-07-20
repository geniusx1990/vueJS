<script setup lang="ts">
import type { IQuestion } from '@/utils/constants';
import { ref, computed } from 'vue';
import { getImgUrl } from '@/utils/getImage';
const props = defineProps<{
    question: IQuestion,
}>();

const selectedOption = ref<string | null>(null);
const emit = defineEmits<{ (e: 'submitAnswer', answer: string | null): void }>();

const submitAnswer = () => {
    emit('submitAnswer', selectedOption.value);
    selectedOption.value = null;
};

const selectOption = (option: string) => {
    selectedOption.value = option;
};

const IMAGESOURCE = computed(() => {
    return props.question.img ? getImgUrl(props.question.img) : null
})

function isNumber(value: string) {
    return !isNaN(Number(value))
}


</script>

<template>
    <p class="question__title">{{ props.question.question }}</p>
    <img v-if="IMAGESOURCE" :src="IMAGESOURCE" alt="test" class="question__image">
    <div v-if="props.question.type === 'text'" class="answers">
        <div class="answer" v-for="(option, index) in props.question.options" :key="index"
            @click="selectOption(option)">
            <input type="radio" :id="option" :value="option" v-model="selectedOption" @change="selectOption(option)" />
            <label class="question__label" :for="option">{{ option }}</label>
        </div>
    </div>
    <div v-else-if="props.question.type === 'color'" class="color-boxes">
        <div class="answer color-box" v-for="(option, index) in props.question.options" :key="index"
            @click="selectOption(option)"
            :style="{ backgroundColor: option, borderColor: selectedOption == option ? '#FFC700' : 'transparent' }">
            <input type="radio" :id="option" :value="option" v-model="selectedOption" @change="selectOption(option)"
                class="hidden-input" />
            <label class="question__label" :for="option"></label>
        </div>
    </div>
    <div v-else-if="props.question.type === 'numbers'" class="number-boxes">
        <div class="answer number-box" v-for="(option, index) in props.question.options" :key="index"
            @click="selectOption(option)"
            :style="{ borderColor: selectedOption == option ? '#FFC700' : 'transparent' }">
            <input type="radio" :id="option" :value="option" v-model="selectedOption" @change="selectOption(option)"
                class="hidden-input" />
            <label class="question__label_black" :for="option">{{ option }}</label>
        </div>
    </div>
    <button class="next__button" @click="submitAnswer" :disabled="!selectedOption">ДАЛЕЕ</button>
</template>


<style scoped>
.number-boxes {
    display: flex;
    gap: 0.5em;
    /*     padding-left: 17px;
    padding-right: 17px;
    width: 100%;
    justify-content: space-around;
 */
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

.question__label_black {
    color: #0D0C11;
    font-family: PT Serif;
    font-size: 20px;
    line-height: 49px;
    position: absolute;
}

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

.question__image {
    padding-top: 15px;
    padding-bottom: 23px;
}

.next__button {
    text-align: center;
}

.answers {
    width: 100%;
}

.color-boxes {
    padding: 20px 26px 23px 26px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 21px;
}

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

.hidden-input {
    display: none;
}





.question__title {
    font-family: PT Serif;
    font-size: 20px;
    line-height: 25.88px;
    letter-spacing: 0.05em;
    text-align: center;
}

.answer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #F2F3F326;
    margin-bottom: 8px;
    transition: background-color 0.3s ease;
    padding-left: 35px;
}

.answer:hover {
    background-color: var(--vt-c-yellow_second);
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


button {
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

button:disabled {
    color: #8E8E8E;
    background-color: #DADADA;
    cursor: not-allowed;
    box-shadow: 0px 4px 10px 0px #00000040 inset;
}
</style>
