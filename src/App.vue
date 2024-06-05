<template>
  <div>
    <app-header />
    <div class="container">
      <!-- <UserProfile
              :alsoKnownAs="data.name"
              :userLastname="data.lastname"
              :userAge="data.age"
              :userParents="data.parents"
              @update-lastname="data.lastname = $event"
              @say-hello="alertHello"
              :updateAge="updateAge"
          />
          <button @click="updateName">Update name</button>
      </div> -->
      <Cars />
      <!-- <hr/>
      <button @click="updateCar"> Update Car</button> -->
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/header_footer/footer.vue";
import UserProfile from "@/components/user/profile.vue";
import Cars from "@/components/cars/index.vue";
import { reactive, provide } from "vue";
const cars = reactive([
  { model: "F9", brand: "Ferrari" },
  { model: "911", brand: "Porsche" },
  { model: "Fiesta", brand: "Ford" },
])

const updateCar = () => {
  cars[0].brand = 'Fiat'
}

provide('cars',{
        cars,
        updateCar
    })
// const data = reactive({
//     name:'Rocket',
//     lastname:'Jones',
//     age: 28,
//     parents:{
//         father:'Mario',
//         mother:'Martha'
//     }
// });

// const updateName = () => {
//     data.name = "Golden child"
// }

// const alertHello = () => {
//     alert('Hello !!!')
// }

// const updateAge = (value) => {
//     data.age = value
// }
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
