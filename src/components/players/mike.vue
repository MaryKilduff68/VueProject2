<template>
    <h3> Mike is on </h3>
</template>


<script setup>
    import {onUnmounted, onActivated, onDeactivated} from 'vue'

    onActivated(() => {
        console.log('Mike was actived')
    })

    onDeactivated(() => {
        console.log('Mike was deactived')
    })


    onUnmounted(() => {
        console.log('Mike was unmounted')
    })
</script>