<template>
  <div class="signup">
      <h3>{{ title }}</h3>
      <p>Let's create a new account</p>
      <input type="text" placeholder="Email" v-model="email" /> <br/>
      <input type="password" placeholder="Password" v-model="password" /> <br/>
      <span class="error">{{ error }}</span>
      <button v-on:click="signup">Sign Up</button>
      <button v-on:click="signupViaGoogle">Google Sign Up</button>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>

  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signup',
  data: function() {
      return {
          title: "Sign Up",
          email: "",
          password: "",
          error: ""
      };
  },
  methods: {
      signup: function(){
          var that = this;
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
              function(user){
                that.$router.replace('welcome');
               
              },
              function(err){
                console.log(err);
                if (err.code == "auth/invalid-email"){
                    that.error = "Invalid email address.";
                }else{
                    that.error = err.message;
                }
                
              }
          );
      },
      signupViaGoogle: function(){
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
    .signup{
        margin-top: 40px;
    }
    .error{
        color: red;
        display:block;
       
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
