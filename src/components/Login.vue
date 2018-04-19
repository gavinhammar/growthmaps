<template>
 <v-content transition="slide-x-transition">
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

                         <v-form v-model="valid" ref="form" @submit.prevent="login">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name = "email"
                                    label="Email"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required
                                    :rules="emailRules"
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
                                    required
                                    min="8"
                                    type="password"
                                    >

                                    </v-text-field>
                                </v-flex>
                                
                            </v-layout>
                                
                            <v-layout row>
                                <v-flex xs12>
                                <v-alert type="error" :value="error != ''">
                                {{ error }}
                                </v-alert>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  block dark  type="submit" color="primary" >Sign in</v-btn>
                                </v-flex>
                            </v-layout>
                             <v-layout row justify-center align-center>
                                or
                             </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  block dark v-on:click="loginViaGoogle" type="submit" color="google"><v-icon left dark>cloud_upload</v-icon>Sign in with Google</v-btn>
                                </v-flex>
                            </v-layout>
                         </v-form>

                     </v-container>
                </v-card-text>
              </v-card>

                <v-layout row justify-center align-center class="mt-3">
                    <p class="text-lg-left"><router-link to="/forgotpassword?">Forgot password?</router-link></p>
                </v-layout>
                <v-layout row justify-center align-center class="mt-3">
                    <p class="text-lg-left">Don't have an account? <router-link to="/signup">Sign up now</router-link></p>
               </v-layout>
          </v-flex>
      </v-layout>
    </v-container>
 </v-content>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
      return {
          title: "Sign In",
          valid: false,
          email: "",
          error: "",
          password: "",
          rememberMe: false,
          emailRules: [
               v => !!v || 'Email is required',
               v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
          ]
      };
  },
  methods: {
      login: function(){
        var that = this;
        if (this.$refs.form.validate()) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        that.$router.replace('welcome');
                    },
                    function(err){
                        that.error = "Incorrect email and password. Please try again."
                    }

                );
        }

      },
      loginViaGoogle: function(){
        var that = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
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
</style>
