<template>
    <h2>Users</h2>
    <ul>
        <li v-for="user in users" :key="user"><router-link :to="userLink(user)">{{ user}}</router-link></li>  
    </ul>

    <h2>USerName -{{ userId ||'default' }}</h2>
</template>

<script>
export default {
  name:"UsersData",
  props: {
    userId: {
      type: String,
     
    },
  },
  data(){
    return {
        users: ['Tom',"Jerry","Micky","Nobita"],
        userName:""
    }
  },
  methods:{
    userLink(user){
        return `/users/${user}`
    },
   
  },
  watch: {
    $route: {
      immediate: true, // Run on component mount
      handler(newVal) {
        this.userName = newVal || "No user selected";
      }
    }
}
 
}
</script>
