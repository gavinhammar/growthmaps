<template>
  <div class="home">
        <v-toolbar dark class="primary">
        <v-toolbar-side-icon
          @click.stop="sideNav = !sideNav"
          class="hidden-sm-and-up "></v-toolbar-side-icon>
            <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">GrowthMaps</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
     </v-toolbar>

      <h3>{{ title }}</h3>
      <h4>Hello, {{ user.displayName? user.displayName : user.email}}</h4>
        <img :src="user.photoURL" />
        Signed Up: {{ user.metadata.creationTime}}
      <button v-on:click="logout">Logout</button>
  </div>
</template>


<script>
import firebase from 'firebase';

export default {
  name: 'home',
  data: function() {
      return {
          title: "Home",
          user: firebase.auth().currentUser
      };
  },
  methods: {
      logout: function() {
        firebase.auth().signOut().then(() =>
           {
                this.$router.replace('login')
            }

        );
      }
  }
}
</script>