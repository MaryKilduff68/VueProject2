<template>

  
    <div v-awesome.red.big="textToRender"></div>

    <div v-awesome.blue.small="textToRender"></div>

    <button @click="textToRender='Something Else'"> Trigger Update </button>



</template>

<script setup>
import {ref} from 'vue'

const textToRender = ref('Some Text')

</script>