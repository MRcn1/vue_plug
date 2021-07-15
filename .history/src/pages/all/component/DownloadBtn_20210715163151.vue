<template>
    <button @click="setValue">
        这是植入到页面的按钮
    </button>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        setValue() {
            this.a = '2'
        }
    }
}
</script>
<style scoped lang="scss">
button {
    background: #3a9f73;
}
</style>
