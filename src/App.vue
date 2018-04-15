<template>
  <v-app id="app">
    <img src="./assets/logo.png">
    <main>
        <router-view></router-view>
    </main>
  </v-app>
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
   color: #2c3e50;
  
}
</style>
