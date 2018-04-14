<template>
  <div class="login">
      <h3>{{ title }}</h3>
      <input type="text" placeholder="Email" /> <br/>
      <input type="password" placeholder="Password" /> <br/>
      <button v-on:click="login">Sign in</button>
      <p>Don't have an account? <router-link to="/signup">Sign up here</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function() {
      return {
          title: "Sign In"
      };
  },
  methods: {
      login: function(){
        this.$router.replace('welcome');
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
