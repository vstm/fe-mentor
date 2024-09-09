<script setup>

import { getCurrentInstance } from 'vue';

const { uid } = getCurrentInstance();

const props = defineProps({
    label: {
        type: String,
    },
    isError: {
        type: Boolean,
        default: false,
    },
    message: {
        type: String,
        default: null,
    }
});

const [value, modelModifiers] = defineModel({
    set(value) {
        if (value === '') {
            return value;
        }
        if (modelModifiers.number) {
            const result = parseInt(value, 10);

            if (isNaN(result)) {
                return value;
            }
            return result;
        }
        return value;
    }
});

</script>

<template>
    <div class="text-field" :class="{ 'text-field--is-error': isError }">
        <label class="text-field__label" :for="`text-field-${uid}`">{{ label }}</label>
        <input class="text-field__input" :id="`text-field-${uid}`" type="text" v-model="value" v-bind="$attrs">
        <p class="text-field__message" v-if="!!message">{{ message }}</p>
    </div>
</template>

<style lang="scss">
@import "@/assets/mixins";

.text-field {
    & {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        &::placeholder {
            color: var(--color--neutral--grey);
        }

        @include mq('desktop') {
            gap: 0.5rem;
        }
    }

    .text-field__label {
        color: var(--color--neutral--grey);
        text-transform: uppercase;

        & {
            @include typo("heading-s");
        }
    }

    .text-field__input {
        padding: calc(0.75rem - 1px) 1rem;
        color: var(--color--neutral--off-black);
        border: 1px solid var(--color--neutral--light-grey);
        border-radius: 8px;

        &:focus, &:focus-within, &:focus-visible {
            outline: none;
            border-color: var(--color--primary--purple);
        }

        & {
            @include typo("heading-m");

            @include mq("desktop") {
                padding: calc(0.75rem - 1px) 1.5rem;
            }
        }
    }

    .text-field__message {
        @include typo("body");
    }

    &.text-field--is-error {
        .text-field__input {
            border-color: var(--color--primary--light-red);
        }

        .text-field__label,
        .text-field__message {
            color: var(--color--primary--light-red);
        }
    }
}
</style>