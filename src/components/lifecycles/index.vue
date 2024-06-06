<template>
    <div>
        {{ text }}
    </div>
    <button @click="text = 'Changed.....'">
        Trigger Update
    </button>
</template>

<script setup>
    import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

    const text = ref('Some Text')

    onBeforeMount(()=>{
        console.log('1-onBeforeMount')
    })

    onMounted(()=>{
        console.log('2-onMounted')
    })

    onBeforeUpdate(()=>{
        console.log('x-onBeforeUpdate')
    })

    onUpdated(()=>{
        console.log('y-ononUpdated')
    })

    onBeforeUnmount(()=>{
        console.log('0-onBeforeUnmount')
    })

    onUnmounted(()=>{
        console.log('o-onUnmounted')
    })
</script>