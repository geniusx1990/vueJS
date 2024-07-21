<script setup lang="ts">
import { ref } from 'vue';
import MyInputRadio from './Inputs/MyInputRadio.vue';
import MyInputSquare from './Inputs/MyInputSquare.vue';
import MyInputNumbers from './Inputs/MyInputNumbers.vue';

const props = defineProps<{
    options: string[];
    type: string;
}>();

const selectedOption = ref<string | null>(null);

const emit = defineEmits<{
    (e: 'update:selected', value: string): void;
}>();

const handleSelected = (value: string) => {
    selectedOption.value = value;
    emit('update:selected', value);
};


</script>

<template>
    <div v-if="type === 'text'" class="answers">
        <MyInputRadio v-for="(option, index) in props.options" :key="index" :option="option"
            :modelValue="selectedOption" @update:modelValue="handleSelected" />
    </div>
    <div v-else-if="type === 'color'" class="color-boxes">
        <MyInputSquare v-for="(option, index) in props.options" :key="index" :option="option"
            :modelValue="selectedOption" @update:modelValue="handleSelected" />
    </div>
    <div v-else class="number-boxes">
        <MyInputNumbers v-for="(option, index) in props.options" :key="index" :option="option"
            :modelValue="selectedOption" @update:modelValue="handleSelected" />
    </div>
</template>

<style scoped>
.answers {
    /*     display: flex;
    flex-direction: column;
 */
    width: 100%;
}

.color-boxes {
    padding: 0px 26px 0px 26px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 21px;
}

.number-boxes {
    display: flex;
    gap: 0.5em
}
</style>
