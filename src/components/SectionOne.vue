<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import MyButton from '../components/MyButton.vue';
import MyButtonMore from '../components/MyButtonMore.vue';

export default defineComponent({
  components: {
    MyButton,
    MyButtonMore
  },
  setup() {
    const subtitle = ref<HTMLParagraphElement | null>(null);

    const checkPosition = () => {
      if (subtitle.value) {
        const maxLines = 2;
        const lineHeight = parseFloat(getComputedStyle(subtitle.value).lineHeight);
        const maxHeight = lineHeight * maxLines;

        if (window.scrollY > 0) {
          subtitle.value.style.maxHeight = '';
        } else {
          subtitle.value.style.maxHeight = `${maxHeight}px`;
        }
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', checkPosition);
      checkPosition();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    });

    return {
      subtitle
    };
  }
});
</script>

<template>
  <div class="hero">
    <p class="hero__title">Пройдите точный и быстрый</p>
    <h1 class="hero__header">ТЕСТ НА<br> ОПРЕДЕЛЕНИЕ<br>IQ</h1>
    <img src="../assets/brain.svg" alt="brain" width="200px">
    <MyButton title="ПРОЙТИ ТЕСТ" backgroundColor="#FFC700" colorText="#0D0C11" borderLine="none" />
    <p ref="subtitle" class="hero__subtitle">
      И получите рекомендации<br>
      по развитию своего интеллекта<br>
      <span class="yellow-text">и улучшению финансового<br>
        благосостояния и личной жизни</span>
    </p>
    <div class="hero__button">
      <MyButtonMore />
      <p class="hero__button_more">Подробнее</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  background-image: url('../assets/game_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.hero__title {
  font-family: PT Serif;
  letter-spacing: 0.05em;
  font-size: 18px;
  line-height: 23.29px;
  color: var(--vt-c-white);
  margin-top: 27px;
  text-align: center;
}

.hero__header {
  font-family: Yeseva One;
  letter-spacing: 0.03em;
  font-size: 30px;
  font-weight: 700;
  line-height: 34.65px;
  color: var(--vt-c-yellow_second);
  margin-top: 40px;
  text-align: center;
}


.hero__subtitle {
  margin-top: 22px;
  font-family: PT Serif;
  letter-spacing: 0.05em;
  font-size: 15px;
  line-height: 19px;
  color: var(--vt-c-white);
  text-align: center;
  margin-bottom: 11px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.yellow-text {
  color: var(--vt-c-yellow_second)
}

.hero__button {
  text-align: center;
}

.hero__button_more {
  font-family: PT Serif;
  font-size: 8px;
  line-height: 10.35px;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--vt-c-white);
  margin-bottom: 11px;
}
</style>
