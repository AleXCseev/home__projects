<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>

<style scoped>
    .input {
        padding: 5px 10px;
        width: 100%;
        border: 2px solid black;
        margin-top: 10px;
    }
</style>
