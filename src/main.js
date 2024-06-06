
import { createApp } from 'vue'
import App from './App.vue'
import Header from '@/components/header_footer/header.vue'
const app = createApp(App)


// custom directives
app.directive('awesome' ,{

    created(el){
        console.log('Created')
        console.log(el.parentNode)
    },

    beforeMount(el, binding) {
        // el.innerHTML = 'Hello Guys'

       
        el.style.color = binding.modifiers.red ? 'red':'blue';
        el.style.fontSize = binding.modifiers.big ? '20px':'10px';
        // if(binding.arg === 'red'){
        //     el.style.color = 'red'
        // } else if (binding.arg === 'blue'){
        //     el.style.color = 'blue'
        // } else {
        //     el.style.color = 'green'
        // }
        el.innerHTML = binding.value
        console.log('beforeMount')
        console.log(el.parentNode)
    },
    mounted(el){
        console.log('mounted')
        console.log(el.parentNode)
    },
    beforeUpdate(el, binding){
        console.log('before')
        el.innerHTML = binding.value


    },
    updated(){
        console.log('updated')

    }
})

app.component('app-header', Header)

app.mount('#app')
