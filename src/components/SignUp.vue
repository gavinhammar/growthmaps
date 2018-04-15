<template>
 <v-content>
  <v-container fluid fill-height>
      <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg3>
              <v-card class="elevation-6">
                <v-layout row justify-center align-center >
                    <img  justify-center src="../assets/logo.png" class="logo" >
                </v-layout>
                <v-card-text>
                     <v-container>
                       <h1 class="hidden-md-and-down text-xs-center">{{ title }}</h1>
                       <h3 class="hidden-md-and-down text-xs-center">{{ subheading }}</h3> 

                         <form>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name = "email"
                                    label="Email"
                                    id="email" 
                                    v-model="email"
                                    type="email"
                                    required
                                    >

                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name = "password"
                                    label="Password"
                                    id="password" 
                                    v-model="password"
                                    type="password"
                                    required
                                    >

                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  block dark v-on:click="signup"  type="submit" color="primary">Sign Up</v-btn>
                                </v-flex>
                            </v-layout>
                             <v-layout row justify-center align-center>
                                or
                             </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  block dark v-on:click="signupViaGoogle" type="submit" color="google">Sign Up with Google</v-btn>
                                </v-flex>
                            </v-layout>
                         </form>
                     </v-container>
                </v-card-text>
              </v-card>
               <span class="error">{{ error }}</span>
               <v-layout row justify-center align-center class="mt-3">
                <p>Already have an account? <router-link to="/login">Login here</router-link></p>
               </v-layout>
          </v-flex>
      </v-layout>
     

  </v-container>
 </v-content>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signup',
  data: function() {
      return {
          title: "Achieve your growth goals",
          subheading: "Create your first GrowthMap today",
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
    .logo{
       width: 64px;
       margin-top:40px;
    }
  /*  .signup{
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
    }*/
</style>
