<template>
  <div class="signup">
      <h3>{{ title }}</h3>
      <p>Let's create a new account</p>
      <input type="text" placeholder="Email" /> <br/>
      <input type="password" placeholder="Password" /> <br/>
      <button>Sign Up</button>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data: function() {
      return {
          title: "Sign Up"
      };
  },
  methods: {}
}
</script>

<style scoped>
    .signup{
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
