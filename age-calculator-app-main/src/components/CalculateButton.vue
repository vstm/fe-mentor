<template>
    <button class="calculate-button">
        <img class="calculate-button__image" src="../../public/icon-arrow.svg" alt="Arrow pointing down" />
    </button>
</template>

<style lang="scss">
@import "@/assets/mixins";

.calculate-button {
    & {
        cursor: pointer;
        padding: 0;
        border: none;
        background-color: var(--color--primary--purple);
        border-radius: 9999px;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 4rem;
        width: 4rem;

        &:active {
            background-color: var(--color--neutral--off-black);
        }

        & {
            @include mq("desktop") {
                height: 6rem;
                width: 6rem;
            }
        }
    }

    .calculate-button__image {
        width: 1.5rem;
        height: 1.5rem;

        & {
            @include mq("desktop") {
                width: 2.75rem;
                height: 2.75rem;
            }
        }
    }
}
</style>