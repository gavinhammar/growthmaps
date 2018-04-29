<template>
    <v-app>
         <v-content>LoggedOut
             <slot />
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'LoggedOut',
        data () {
            return {}
        },
        methods: {
           
        }
    }
</script>