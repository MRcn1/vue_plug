<template>
    <div class="standalone">
        <h1>基础插{{ a }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            a: 1
        }
    },
    methods: {
        s() {
            console.log('1')
            setTimeout(() => {}, 1000)
        }
    }
}
</script>
<style scoped lang="scss">
.standalone {
    z-index: 10000000;
    position: fixed;
    right: 0;
    top: 0;
    background: #ededed;
    width: 200px;
    height: 100vh;
    text-align: center;
    color: #3a9f73;
}
</style>
