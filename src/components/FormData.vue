<template>
    <div>

        <form>
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="name" id="name" required />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" required />
            </div>
            <div>
                <label for="phone">Phone Number</label>
                <input type="tel" v-model="phone" id="phone" required />
            </div>
            <button @click="addContact">Add Contact</button>
        </form>
        <div>
            <p>provided Data - {{ topicsData }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: '',
            email: '',
            phone: ''
        }
    },
    inject:['topicsData'],
    name:"UserFormData",
    methods:{
        addContact(event){
            // Add contact logic here
            event.preventDefault()
            console.log(this.name, this.email, this.phone);
           
            this.$emit('addContact',{name: this.name, email: this.email, phone: this.phone})
            this.name = '';
            this.email = '';
            this.phone = '';
        }
    }
}
</script>