<template>
    <button type="button" class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style scoped>
    .btn {
        padding: 5px 10px;
        background: none;
        color: #333;
        border: 1px solid #333;
    }
</style>


