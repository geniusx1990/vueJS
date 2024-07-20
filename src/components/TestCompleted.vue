<script setup lang="ts">
import { type IPerson } from '@/utils/constants';
import { ref, onMounted, onUnmounted } from 'vue';

const timer = ref(600);

const startTimer = () => {
    const intervalId = setInterval(() => {
        if (timer.value > 0) {
            timer.value -= 1;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);

    onUnmounted(() => {
        clearInterval(intervalId);
    });
};

onMounted(() => {
    startTimer();
});

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

const person = ref<IPerson | null>(null);

const fetchPerson = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/1/');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: IPerson = await response.json();
        console.log(data)
        person.value = data;
    } catch (err) {
        console.log(err)
    }
};

</script>

<template>
    <div class="done-container">
        <h1 class="done-container__title">Ваш результат рассчитан:</h1>
        <p class="done-container__content"><span class="underline">Вы относитесь к 3%</span> респондентов, чей уровень
            интеллекта более чем на
            15 пунктов отличается от среднего в большую или меньшую сторону!</p>
        <h2 class="done-container__subtitle">Скорее получите свой результат!</h2>
        <div class="done-container__square">
            <p class="done-container__square__content">В целях защиты персональных
                данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения
                по звонку с вашего мобильного телефона
            </p>
        </div>
        <p class="done-container__details">Звоните скорее, запись доступна всего</p>
        <p class="done-container__timer">{{ formatTime(timer) }} <span
                class="done-container__timer__minutes">минут</span></p>
        <button class="done-container__button" @click="fetchPerson">
            <img src="../assets/call.svg" alt="call">
            Позвонить и прослушать результат
        </button>

        <div v-if="person" class="person-details">
            <p><strong>Имя:</strong> {{ person?.name }}</p>
            <p><strong>Рост:</strong> {{ person?.height }}</p>
            <p><strong>Вес:</strong> {{ person?.mass }}</p>
            <p><strong>Цвет волос:</strong> {{ person?.hair_color }}</p>
            <p><strong>Цвет кожи:</strong> {{ person?.skin_color }}</p>
            <p><strong>Цвет глаз:</strong> {{ person?.eye_color }}</p>
            <p><strong>Год рождения:</strong> {{ person?.birth_year }}</p>
            <p><strong>Пол:</strong> {{ person?.gender }}</p>
        </div>
    </div>
</template>

<style scoped>
.done-container {
    padding: 18px 14px 0px 15px;
    text-align: center;
}

.done-container__title {
    text-transform: uppercase;
    font-family: PT Serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.1em;
    color: var(--vt-c-white);
    margin-bottom: 13px;
}

.done-container__content {
    font-family: PT Serif;
    font-size: 14px;
    line-height: 18px;
    color: var(--vt-c-white);
    margin-bottom: 22px;
}

.underline {
    text-decoration: underline;
}

.done-container__subtitle {
    text-transform: uppercase;
    font-family: PT Serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: #3BDE7C;
    margin-bottom: 12px;
}

.done-container__square {
    background-color: #1C2741;
    border-radius: 6px;
}

.done-container__square__content {
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 8px;
    line-height: 14px;
    letter-spacing: 2px;
    color: var(--vt-c-white);
    padding: 15px 12px 10.81px 12px;
    margin-bottom: 2px;
}

.done-container__details {
    font-family: PT Serif;
    font-size: 11px;
    line-height: 30px;
    letter-spacing: 0.1em;
    color: #3BDE7C;
}

.done-container__timer {
    font-family: PT Serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.1em;
    color: #3BDE7C;
    margin-bottom: 6px;
}

.done-container__timer__minutes {
    font-family: PT Serif;
    font-size: 11px;
    line-height: 30px;
    letter-spacing: 0.1em;
    text-align: center;
}

.done-container__button {
    background-color: #EB1B00;
    width: 290px;
    height: 92px;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 700;
    line-height: 17.58px;
    letter-spacing: 0.05em;
    text-align: left;
    padding: 33px 22px 14px 15px;
    display: flex;
    border: none;
}

.done-container__button img {
    margin-right: 18px;
    width: 29px;
    height: 29px;
}
</style>