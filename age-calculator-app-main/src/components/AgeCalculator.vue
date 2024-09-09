<script setup>
import { ref } from 'vue';
import TextField from './TextField.vue';
import { validateDay, validateMonth, validateYear, createDate, isValidDate, dateDiff } from '../utils/date-utils';
import CalculateButton from './CalculateButton.vue';
import DateDifferenceTable from './DateDifferenceTable.vue';
import ItemWithSeparator from './ItemWithSeparator.vue';

const day = ref();
const month = ref();
const year = ref();

const dayMessage = ref(null);
const monthMessage = ref(null);
const yearMessage = ref(null);

const emptyValue = Object.freeze({ days: null, months: null, years: null });

const diff = ref({ ...emptyValue });


function onCalculate() {

    const date = new Date();

    const dayValue = parseInt(day.value, 10);
    const monthValue = parseInt(month.value, 10);
    const yearValue = parseInt(year.value, 10);

    const dayErrors = validateDay(dayValue);
    const monthErrors = validateMonth(monthValue);
    const yearErrors = validateYear(yearValue, date.getFullYear());

    if (dayErrors || monthErrors || yearErrors) {
        diff.value = { ...emptyValue };
        dayMessage.value = dayErrors;
        monthMessage.value = monthErrors;
        yearMessage.value = yearErrors;
        return;
    }

    if (!isValidDate(yearValue, monthValue, dayValue)) {
        diff.value = { ...emptyValue };
        dayMessage.value = 'This is not a valid date';
        monthMessage.value = 'This is not a valid date';
        yearMessage.value = 'This is not a valid date';
        return;
    }

    const inputDate = createDate(yearValue, monthValue, dayValue);

    dayMessage.value = null;
    monthMessage.value = null;
    yearMessage.value = null;

    diff.value = dateDiff(inputDate, date);
}

</script>

<template>
    <main class="age-calculator">
        <form class="age-calculator__form" @submit.prevent="onCalculate">
            <div class="age-calculator__input-row">
                <TextField required label="Day" placeholder="DD" v-model="day" :is-error="dayMessage !== null"
                    :message="dayMessage"></TextField>
                <TextField required label="Month" placeholder="MM" v-model="month" :is-error="monthMessage !== null"
                    :message="monthMessage"></TextField>
                <TextField required label="Year" placeholder="YYYY" v-model="year" :is-error="yearMessage !== null"
                    :message="yearMessage"></TextField>
            </div>
            <ItemWithSeparator>
                <CalculateButton type="submit" />
            </ItemWithSeparator>
        </form>

        <DateDifferenceTable :difference="diff" />
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