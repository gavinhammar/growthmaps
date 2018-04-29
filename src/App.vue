<template>
    <component :is="component">
        <slot />
    </component> 
</template>

<script>
    import Basic from './layouts/Basic'
    
    export default {
        name: 'App',
        components: {
            Basic
        },
        computed: {
            component () {
                return  Basic
            }
        }
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
