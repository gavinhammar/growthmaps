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
                        <h4 class="hidden-md-and-down text-xs-center">{{ subheading }}</h4>

                         <v-form v-model="valid" ref="form" @submit.prevent="resetpassword">
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
                                <v-alert type="error" :value="error != ''">
                                {{ error }}
                                </v-alert>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  block dark  type="submit" color="primary" >Request reset link</v-btn>
                                </v-flex>
                            </v-layout>
                            </v-form>

                     </v-container>
                </v-card-text>
              </v-card>

               <v-layout row justify-center align-center class="mt-3">
               <p class="text-lg-left"><router-link to="/login">Back to sign in</router-link></p>

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
          title: "Forgot your password?",
          subheading: "Enter your email address below and we'll get you back on track.",
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
      resetpassword: function(){
        var that = this;
        if (this.$refs.form.validate()) {
                firebase.auth().sendPasswordResetEmail(that.email).then(function() {
                    that.$router.replace('login');
                }).catch(function(error) {
                     that.error = "We couldn't find a user with this email. Please try again."
                });

        }

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
