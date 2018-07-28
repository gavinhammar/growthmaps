<template>
    <v-flex justify-center xs4 md4 lg3>
        <v-flex class="white elevation-4 mx-auto pa-0 ma-3"  >
            <v-container v-if="objective.type=='vision'" >
                <h4>Vision</h4>
                <div> {{ objective.title === ""? "What's your company's vision?" : objective.title }}</div>
                <v-btn small color="primary">Set a Vision</v-btn>
            </v-container>
            <v-container v-if="objective.type!='vision'">
                <h4>Objective {{index + 1}}</h4>
                <div>{{ objective.title === ""? "What's your objective?" : objective.title }}</div>
                <v-btn small color="primary">Set an Objective</v-btn>
                
            </v-container>
        </v-flex>
        <v-flex justify-center class="mx-auto " xs12 v-if="objective.type!='vision'" >
            <plus-key-result></plus-key-result>
        </v-flex>
    </v-flex>
</template>


<script>
import firebase from 'firebase';
import PlusKeyResult from '@/components/GrowthMap/PlusKeyResult';

export default {
  name: 'Objective',
  props: ['type', 'objective', 'index', 'count'],
  components: {
      PlusKeyResult
  },
  data: function() {
      return {
          user: firebase.auth().currentUser
      };
  },
  methods: {
     
  }
}
</script>