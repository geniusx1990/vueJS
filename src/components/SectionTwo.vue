<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '../components/MyButton.vue';
import { getImgUrl } from '@/utils/getImage';

export default defineComponent({
    components: {
/*         MyButton,
 */    }
});
</script>

<template>
    <div class="section_two">
        <div class="section_two__container"><img class="section_two__marks_one" src="../assets/marks_first.svg"
                alt="marks">
            <p class="section_two__text">Профессиональный <br>IQ-тест позволяет не <br>только определить <br>коэффициент
                вашего<br>интеллекта,<br> но и выработать список<br> рекомендаций для<br>повышения этого<br> показателя.
            </p>
            <img class="section_two__marks_two" src="../assets/marks_second.svg" alt="marks">
        </div>
    </div>
</template>

<style scoped>
.section_two {
    width: 100%;
    height: 339px;
    background: radial-gradient(circle, rgba(41, 80, 194, 1), rgba(38, 91, 199, 0.96), rgba(39, 98, 187, 0)), url('../assets/section_two.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.section_two__container {
    position: relative;
    padding: 83px 36px 28px;

}

.section_two__marks_one {
    position: absolute;
    top: 43px;
    left: 24.35px;
}

.section_two__marks_two {
    position: absolute;
    right: 29px;
    bottom: 32.65px;
}

.section_two__text {
    font-family: Yeseva One;
    font-size: 18px;
    text-align: center;
    line-height: 23px;
    color: var(--vt-c-white);
    letter-spacing: 0.05em;
    font-weight: 700;
}
</style>
