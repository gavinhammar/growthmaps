<template>
    <v-flex align-center="true" class="white elevation-4 mx-auto pa-0 mb-4" xs4 md4 lg3 >
        <v-container v-if="objective.type=='vision'" >
            <div> {{ objective.title === ""? "What's your company's vision?" : objective.title }}</div>
            <v-btn small color="primary">Set Vision</v-btn>
        </v-container>
        <v-container v-if="objective.type=='objective'">
            <div>{{ objective.title === ""? "What's your objective?" : objective.title }}</div>
            <v-btn small color="primary">Set Objective</v-btn>
        </v-container>
    </v-flex>
</template>


<script>
import firebase from 'firebase';

export default {
  name: 'Objective',
  props: ['type', 'objective'],
  data: function() {
      return {
          user: firebase.auth().currentUser
      };
  },
  methods: {
     
  }
}
</script>