<template>
    <v-flex justify-center class="pt-4 " xs3>
         <v-btn fab dark medium color="secondary">
             <v-icon dark>add</v-icon>
        </v-btn>
        <div>Add an objective</div>
    </v-flex>
</template>


<script>
import firebase from 'firebase';

export default {
  name: 'PlusObjective',
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