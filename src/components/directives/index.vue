<template>

  
    <div v-awesome.red.big="textToRender"></div>

    <div v-awesome.blue.small="textToRender"></div>

    <div v-user-lastname="lastname"></div>

    <button @click="textToRender='Something Else'"> Trigger Update </button>




</template>

<script setup>
import {ref} from 'vue'

const textToRender = ref('Some Text')
const lastname = ref('jones')

// local custom directive
const vUserLastname = {
    beforeMount(el, binding){
        el.innerHTML = binding.value;
        el.style.color = 'purple'
    }
}

</script>