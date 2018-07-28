<template>
    <v-flex justify-center class="pt-4 " xs3>
         <v-btn fab dark medium color="secondary" v-on:click="$emit('click', $event.target.clicked)">
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
  event: 'click',
  data: function() {
      return {
          user: firebase.auth().currentUser
      };
  },
  methods: {
     
  }
}
</script>