<template>
    <div class="user_profile">
        <h3>User profile</h3>
        <ul>
            <li>
                <span>Name:</span> {{ name }}
            </li>
            <li>
                <span>Also known:</span> {{ alsoKnownAs }}
            </li>
            <li>
                <span>Lastname:</span> {{ userLastname }}
            </li>
            <li>
                <span>Age:</span> {{ userAge }}
            </li>
        </ul>
        <h3>Parents</h3>
        <ul>
            <li v-for="(value,key,index) in userParents" :key="index">
                <span>{{ key }}:</span> {{ value }}
            </li>
        </ul>
        <hr/>
        <button @click="updateLastname">Change from the child</button>
        <hr/>
        <button @click="emit('say-hello')">Say hello</button>
        <button @click="updateAge(50)">Update age</button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['update-lastname','say-hello'])
    const props = defineProps({
        alsoKnownAs: {
            type: String,
            required:true
        },
        userLastname: {
            type: String,
            validator(value) {
                if(value === 'Jones'){
                    return true
                }
                return false
            }
        },
        userAge: Number,
        userParents: Object,
        updateAge: Function
    });
    const name = 'Steve';

    const updateLastname = () => {
        emit('update-lastname','Michaelson');
    }
</script>

<style scoped>
    span {
        font-weight:800
    }
    .user_profile {
        border:1px solid #2196F3;
        padding:10px
    }

</style>