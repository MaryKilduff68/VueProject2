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
                <span>Last name:</span> {{ userLastname }}
            </li>
            <li>
                <span>Age:</span> {{ userAge }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps({
        alsoKnownAs: String,
        userLastname: String,
        userAge: Number,
    });
    const name = 'Steve'
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