<template>
  <div id="app">
    app
    <img src="./assets/logo.png">
<!--    路由容器-->
    <router-link to="/home">home</router-link>
    <router-link to="/film">film</router-link>
    <router-link to="/card">card</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
