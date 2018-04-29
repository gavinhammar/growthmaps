<template>
<logged-out-layout>
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
                       <h2 class="hidden-md-and-down text-xs-center">{{ title }}</h2>
                       <h4 class="hidden-md-and-down text-xs-center">{{ subheading }}</h4>

                         <v-form v-model="valid" ref="form" @submit.prevent="signup">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name = "displayName"
                                    label="Name"
                                    id="displayName"
                                    v-model="displayName"
                                    required
                                    >
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
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
                                    :rules="passwordRules"

                                    >

                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                             <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name = "confirmPassword"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    v-model="confirmPassword"
                                    required
                                    type="password"
                                    :rules="[comparePasswords]"
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
                                   <v-btn  block dark type="submit" color="primary" >Sign Up</v-btn>
                                </v-flex>
                            </v-layout>
                             <v-layout row justify-center align-center>
                                or
                             </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  block dark v-on:click="signupViaGoogle" type="button" color="google"><v-icon left dark>cloud_upload</v-icon>Sign Up with Google</v-btn>
                                </v-flex>
                            </v-layout>
                         </v-form>
                     </v-container>
                </v-card-text>
              </v-card>
               <v-layout row justify-center align-center class="mt-3">
                <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
               </v-layout>
          </v-flex>
      </v-layout>


  </v-container>
 </v-content>
</logged-out-layout>
</template>

<script>
import firebase from 'firebase';
import LoggedOutLayout from '@/layouts/loggedout'

export default {
  name: 'signup',
  components: {
    LoggedOutLayout
  },
  data: function() {
      return {
          valid: false,
          title: "Achieve your growth goals",
          subheading: "Create your first GrowthMap today",
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
          error: "",
          emailRules: [
               v => !!v || 'Email is required',
               v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
          ],
          passwordRules: [
               v => !!v || 'Password is required',
               v => v.length >= 8 || 'Password must be at least 8'
          ]
      };
  },
  computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      }
  },

  methods: {
      signup: function(){
          var that = this;
          //if (this.$refs.form.validate()) {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    user.updateProfile({
                        displayName: that.displayName
                    }).then(function() {
                        that.$router.replace('welcome');
                    });
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
          //}
      },
      signupViaGoogle: function(){
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
