<template>
  <v-container class="signup">
      <v-layout>
          <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-card-text>
                     <v-container>
                        <h3>{{ title }}</h3>
                        <p>Let's create a new account</p>
               
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
                                    id="email" 
                                    v-model="password"
                                    type="password"
                                    required
                                    >

                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  v-on:click="signup"  type="submit">Sign Up</v-btn>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                   <v-btn  v-on:click="signupViaGoogle" type="submit">Sign Up with Google</v-btn>
                                </v-flex>
                            </v-layout>
                         </form>
                     </v-container>
                </v-card-text>
              </v-card>
                 <span class="error">{{ error }}</span>
               
                <p>Already have an account? <router-link to="/login">Login here</router-link></p>

          </v-flex>
      </v-layout>
     

  </v-container>
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
