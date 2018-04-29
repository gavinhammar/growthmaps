<template>
    <v-app>
         <v-content>test
             <logged-in-layout>
                <router-view />
             </logged-in-layout>
        </v-content>
    </v-app>
</template>

<script>
    import LoggedInLayout from '@/layouts/loggedin'
    export default {
        name: 'Dashboard',
        components: {
            LoggedInLayout
            },
        data () {
            return {}
        },
        methods: {
           
        }
    }
</script>