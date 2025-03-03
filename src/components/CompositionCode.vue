<template>
    <h2>composition code</h2>
    <button @click="Inc">You Clicked - {{ count }} times.</button>
    <button @click="lastNameChanges">You change the Last Name - {{ lastNameCount }} times.</button>

    <input type="text" placeholder="First Name" v-model="firstName"/>
    <input type="text" placeholder="Last Name" v-model="lastName"/>
<p>Full Name - {{ fullName }}</p>
</template>

<script setup>
import {ref, computed,watch} from 'vue'
const count = ref(0)
const lastNameCount = ref(0)

const firstName = ref('')
const lastName = ref('')
const fullName = computed(()=>{
    return `${firstName.value} ${lastName.value}`
})

function Inc(){
    count.value++
}
function lastNameChanges(){
    lastNameCount.value++
}
watch(lastName,()=>{
    lastNameCount.value++ 
})


</script>