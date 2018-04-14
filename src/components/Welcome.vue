<template>
  <div class="welcome">
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
  name: 'welcome',
  data: function() {
      return {
          title: "Welcome",
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

<style scoped>
img{
    width: 128px;
}
</style>