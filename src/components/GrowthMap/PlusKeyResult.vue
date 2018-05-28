<template>
    <v-flex justify-center class="pt-4 " xs12>
         <v-btn fab dark medium color="secondary">
             <v-icon dark>add</v-icon>
        </v-btn>
        <div>Add a key result</div>
    </v-flex>
</template>


<script>
import firebase from 'firebase';

export default {
  name: 'PlusKeyResult',
  props: ['type'],
  data: function() {
      return {
          user: firebase.auth().currentUser
      };
  },
  methods: {
     
  }
}
</script>