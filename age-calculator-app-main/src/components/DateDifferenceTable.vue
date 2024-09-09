<script setup>
import { executeTransition } from '@vueuse/core';
import { watch, ref, computed } from 'vue';

const props = defineProps({
    difference: {
        type: Object,
        required: true,
    },
});

const source = ref([0, 0, 0]);

watch(() => props.difference, async (newDifference) => {
    if (newDifference.years === null) {
        return;
    }
    await executeTransition(source, [0, 0, 0], [newDifference.years, newDifference.months, newDifference.days], {
        duration: 1000,
    })
});

const differenceToDisplay = computed(() => {
    if (props.difference.years === null) {
        return props.difference;
    }
    const [years, months, days] = source.value
    return { years: years.toFixed(0), months: months.toFixed(0), days: days.toFixed(0) };
})

</script>
<template>
    <div class="date-difference-table">
        <div class="date-difference-table__line">
            <span class="date-difference-table__value">{{ differenceToDisplay.years ?? '--' }}</span>
            <span class="date-difference-table__label">years</span>
        </div>
        <div class="date-difference-table__line">
            <span class="date-difference-table__value">{{ differenceToDisplay.months ?? '--' }}</span>
            <span class="date-difference-table__label">months</span>
        </div>
        <div class="date-difference-table__line">
            <span class="date-difference-table__value">{{ differenceToDisplay.days ?? '--' }}</span>
            <span class="date-difference-table__label">days</span>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/mixins";

.date-difference-table {
    .date-difference-table__line {
        display: flex;
        gap: 0.5rem;

        & {
            @include typo("heading-l");
        }
    }

    .date-difference-table__value {
        color: var(--color--primary--purple);
    }
}
</style>