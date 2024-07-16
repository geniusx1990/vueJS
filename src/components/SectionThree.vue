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
    <div class="section_tree">
        <div class="section_tree__container">
            <p class="section_tree__container__text">Также по результатам теста
                <span class="bold-content">вы получите</span> подробные <span class="bold-content">советы</span> по
                определению наиболее перспективной <span class="bold-content">для
                    вашего типа
                    <span class="lower-case">интеллекта</span> сферы
                    деятельности,</span>
                которая принесет вам скорейший финансовый результат.
            </p>
            <img src="../assets/brain_section_tree.svg" alt="brain">
            <MyButton title="ПРОЙТИ ТЕСТ" backgroundColor="#FFC700" colorText="#0D0C11" borderLine="none" />
        </div>
    </div>
</template>

<style scoped>
.section_tree {
    width: 100%;
    background: var(--vt-c-white);
    background-repeat: no-repeat;
    background-size: cover;
}

.section_tree__container {
    padding: 38px 11px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section_tree__container__text {
    font-family: 'PT Serif', serif;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 5%;
    color: var(--vt-c-black-section-three);
    margin-bottom: 38px;
}

.bold-content {
    text-transform: uppercase;
    font-weight: 700;
}

.lower-case {
    text-transform: lowercase;
    font-weight: 700;
}
</style>
