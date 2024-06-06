<template>
    <h3>Steve is on</h3>

        <Teleport to="body">
            <Modal/>
          </Teleport>
</template>

<script setup>
    import Modal from '@/components/utils/modal.vue'
    import { onUnmounted } from 'vue';

    onUnmounted(()=>{
        console.log('Steve unmounted')
    })
</script>