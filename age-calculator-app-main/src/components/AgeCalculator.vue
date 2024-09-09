<script setup>
import TextField from './TextField.vue';
import CalculateButton from './CalculateButton.vue';
import DateDifferenceTable from './DateDifferenceTable.vue';
import ItemWithSeparator from './ItemWithSeparator.vue';
import useAgeCalculator from '@/composable/useAgeCalculator';

const { dateValue, onCalculate, difference, isError, dateMessages } = useAgeCalculator();

</script>

<template>
    <main class="age-calculator">
        <form class="age-calculator__form" @submit.prevent="onCalculate">
            <div class="age-calculator__input-row">
                <TextField required label="Day" placeholder="DD" v-model="dateValue.day" :is-error="isError.day"
                    :message="dateMessages.day"></TextField>
                <TextField required label="Month" placeholder="MM" v-model="dateValue.month" :is-error="isError.month"
                    :message="dateMessages.month"></TextField>
                <TextField required label="Year" placeholder="YYYY" v-model="dateValue.year" :is-error="isError.year"
                    :message="dateMessages.year"></TextField>
            </div>
            <ItemWithSeparator>
                <CalculateButton type="submit" />
            </ItemWithSeparator>
        </form>

        <DateDifferenceTable :difference="difference" />
    </main>
</template>

<style lang="scss">
@import "@/assets/mixins";

.age-calculator {
    --age-calculator--gap: 2rem;

    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: var(--age-calculator--gap);
    background: var(--color--neutral--white);
    border-radius: 1.5rem 1.5rem 6.25rem 1.5rem;
    width: 21.4375rem;

    .age-calculator__form {
        display: flex;
        flex-direction: column;
        gap: var(--age-calculator--gap);
    }

    .age-calculator__input-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;

        @include mq("desktop") {
            grid-template-columns: repeat(3, minmax(0, 160px));
        }
    }

    @include mq("desktop") {
        padding: 3.5rem;
        max-width: none;
        width: 52.5rem;
        --age-calculator--gap: 0;
    }
}
</style>