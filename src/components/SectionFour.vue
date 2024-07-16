<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '../components/MyButton.vue';

export default defineComponent({
    components: {
        MyButton,
    }
});
</script>

<template>
    <div class="section_four">
        <div class="section_four__container">
            <img class="lightning_left" src="../assets/lightning_left.svg" alt="lightning">
            <img class="lightning_right" src="../assets/lightning_right.svg" alt="lightning">
            <p class="section_four__container__text">Прохождение теста займет у вас не более <span
                    class="lower-case-yellow">12 минут</span>, а его результаты
                вы сможете использовать всю жизнь.</p>
            <div class="section_four__container__rectangle">
                <p class="section_four__container__rectangle__content">Профессиональная интерпретация и детально
                    <span class="lower-case">проработанные рекомендации</span> позволят вам качественно
                    <span class="lower-case">изменить все аспекты своей жизни:</span> от финансового до любовного.
                </p>
            </div>
            <MyButton title="ПРОЙТИ ТЕСТ" backgroundColor="transparent" colorText="#FFFFFF"
                borderLine="1px solid #FFFFFF" />
            <p class="copyright">© 2019</p>
        </div>
    </div>
</template>

<style scoped>
.section_four {
    width: 100%;
    background-image: url('../assets/section_four.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 533pxs;
}

.section_four__container {
    position: relative;
    padding: 54px 12px 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section_four__container__rectangle {
    background-color: #F3F3F2;
    opacity: 0.8;
    border-radius: 20px;
    margin-bottom: 33px;
}

.section_four__container__rectangle__content {
    padding: 29px 15px 31px 14px;
    font-family: Merriweather;
    font-size: 16px;
    line-height: 23px;
    color: var(--vt-c-black);
}

.lower-case {
    text-transform: lowercase;
    font-weight: 700;
}

.lower-case-yellow {
    color: var(--vt-c-yellow_second);
    font-weight: 700;
}

.section_four__container__text {
    font-family: Merriweather;
    font-size: 15px;
    color: var(--vt-c-white);
    margin-bottom: 14px;
}

.copyright {
    font-family: Roboto;
    font-size: 10px;
    line-height: 23px;
    letter-spacing: 5%;
    color: #FFFFFF;
    opacity: 0.5;
    margin-top: 52px;
}

.lightning_left {
    position: absolute;
    left: 0;
    bottom: 32px;
}

.lightning_right {
    position: absolute;
    right: 0;
    top: 64px
}
</style>
