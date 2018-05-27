<template>
    <v-flex align-center="true" class="mx-auto  pt-2 " xs1>
         <v-btn fab dark medium color="secondary">
             <v-icon dark>add</v-icon>
        </v-btn>
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