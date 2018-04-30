<template>
    <logged-in-layout>
        <div>
            <h4>Welcome back, {{ user.displayName? user.displayName : user.email}}</h4>
        </div>
    </logged-in-layout>
</template>

<script>
import LoggedInLayout from '@/layouts/loggedin'
import firebase from 'firebase';

export default {
    name: 'Dashboard',
    components: {
        LoggedInLayout
        },
    data: function() {
        return {
            user: firebase.auth().currentUser
        };
    },
    methods: {
        
    }
}
</script>