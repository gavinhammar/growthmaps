<template>
    <v-app>
         <v-content>LoggedIn
            <slot />
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'LoggedIn',
        data () {
            return {}
        },
        methods: {
           
        }
    }
</script>