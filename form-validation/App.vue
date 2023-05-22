<template>
    <my-input name="Username"/>
    <my-button 
        background="darkslateblue"
        color="white"
        :disabled="!valid"
    />
</template>

<script lang="js">
    import MyButton from './MyButton.vue'
    import MyInput from './MyInput.vue'

export default {
    components: {
        MyButton,
        MyInput
    },
    data() {
        return {
            valid: false
        }
    }
};
</script>

<style scoped></style>
