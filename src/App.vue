<template>
  <div>
    <HelloWorld msg="Welcome to Vue.js App"/>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/counter">Counter</router-link> | 
      <router-link to="/composition">Composition API</router-link> |
      <router-link to="/shopping">Shopping Cart</router-link> |


    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide:{
    topicsData:["chandu","shekhar"]
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
  margin: 5px;
  padding: 5px;
}
input{
  margin: 5px;
  padding: 5px;
}
button{
  margin: 5px;
  padding: 5px;
}
h1 {
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
  padding: 5px;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
  padding: 5px;
}

</style>
