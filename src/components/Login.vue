<template>
  <div class="login">
      <h3>{{ title }}</h3>
      <input type="text" placeholder="Email" v-model="email" /> <br/>
      <input type="password" placeholder="Password"  v-model="password" /> <br/>
      <button v-on:click="login">Sign in</button>

      <button v-on:click="loginViaGoogle">Sign in with Google</button>
      <p>Don't have an account? <router-link to="/signup">Sign up here</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
      return {
          title: "Sign In", 
          email: "",
          password: ""
      };
  },
  methods: {
      login: function(){
        var that = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            function(user){
                that.$router.replace('welcome');
            },
            function(err){
                alert("Oops" + err.message);
            }

        );
        
      },
      loginViaGoogle: function(){
        var that = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            that.$router.replace('welcome');
           
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
       });
      }
  }
}
</script>

<style scoped>
    .login{
        margin-top: 40px;
    }
    input{
        margin: 3px 0;
        width: 10%;
        padding: 5px;
    }
    button{
        margin-top: 20px;
        width: 10%;
    }
    p{
        margin-top: 10px;
        font-size: 13px;
    }
</style>
