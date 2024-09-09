<template>
    <div class="item-with-separator">
        <hr class="item-with-separator__line" />
        <slot />
        <hr class="item-with-separator__line item-with-separator__line-right" />
    </div>
</template>

<style lang="scss">
@import "@/assets/mixins";

.item-with-separator {
    display: flex;
    align-items: center;

    .item-with-separator__line {
        border: none;
        border-top: 1px solid var(--color--neutral--light-grey);
        flex: 1;
    }

    @include mq("desktop") {
        .item-with-separator__line-right {
            display: none;
        }
    }
}
</style>