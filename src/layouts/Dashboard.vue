<template>
    <logged-in-layout>
        <div>
            <growth-map-view mode="new"></growth-map-view>
             <h4>Welcome back, {{ user.displayName? user.displayName : user.email}}</h4>
           
        </div>
    </logged-in-layout>
</template>

<script>
import LoggedInLayout from '@/layouts/loggedin'
import GrowthMapView from '@/components/GrowthMap/view'
import firebase from 'firebase';

export default {
    name: 'Dashboard',
    components: {
        LoggedInLayout,
        GrowthMapView
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