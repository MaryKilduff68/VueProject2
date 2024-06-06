<template>
  <div>
    <app-header />
    <div class="container">
      <button @click="activeComp = Mike">Mike</button>
      <button @click="activeComp = Steve">Steve</button>
<!-- 
      <Mike v-if="activeComp === Mike"/>
      <Steve v-if="activeComp === Steve"/> -->


      <!-- dynamic component -->
      <component :is="activeComp"></component>

      
      <!-- <Life v-if="showComponent"/> -->
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
      <!-- <Cars />
      <hr />
      <CarBrands>
        <template v-slot:brands>
        <ul>
          <li v-for="(brand, index) in brands" :key="index">{{brand}}</li>
        </ul>
      </template>
      <template v-slot:other>
        <div> Some other content</div>
      </template>
      </CarBrands> 
      <hr/> -->
      <!-- <button @click="updateCar"> Update Car</button> -->
    </div> 
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/header_footer/footer.vue";
import UserProfile from "@/components/user/profile.vue";
import Cars from "@/components/cars/index.vue";
import CarBrands from "@/components/cars/brands.vue"
import Life from "@/components/lifecycles/index.vue"
import Mike from  "@/components/players/mike.vue"
import Steve from  "@/components/players/steve.vue"
import { reactive, provide, ref, shallowRef} from "vue";


const activeComp = shallowRef(Mike);

// const showComponent = ref(true)

// setTimeout(() => {
//   showComponent.value = false
// }, 3000);


// const cars = reactive([
//   { model: "F9", brand: "Ferrari" },
//   { model: "911", brand: "Porsche" },
//   { model: "Fiesta", brand: "Ford" },
// ])

// const updateCar = () => {
//   cars[0].brand = 'Fiat'
// }

// provide('cars',{
//         cars,
//         updateCar
//     })

//     const brands = reactive(['Mazda','Honda','Renault'])
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
