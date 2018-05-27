<template>
   <div>
        <v-container  grid-list-md text-xs-center>
            <v-layout row wrap>
                <objective :objective="growthmap.vision" xs4 md4 lg3></objective>
            </v-layout>
            <v-layout row wrap v-for="(objective, index) in growthmap.objectives" :key="objective.id">
                 <objective :objective="objective"></objective>
                 <objective :objective="objective"></objective>
            </v-layout>
            <v-layout row wrap>
                <plus-objective></plus-objective>
            </v-layout>
            
        </v-container>
   </div>
</template>


<script>
import firebase from 'firebase';
import Objective from '@/components/GrowthMap/objective';
import PlusObjective from '@/components/GrowthMap/plusobjective';


export default {
  name: 'GrowthMap',
  props: ['mode'],
  components: {
      Objective,
      PlusObjective
  },
  data: function() {
      return {
          user: firebase.auth().currentUser,
          growthmap: {
              vision: {
                  type: "vision",
                  title: ""
              },
              objectives: [
                {
                    id: 1,
                    type: "objective",
                    title: "Increase revenue"
                },
                {
                    id: 2,
                    type: "objective",
                    title: ""
                }

              ]
              
          }
      };
  },
  methods: {
      logout: function() {
        firebase.auth().signOut().then(() =>
           {
                this.$router.replace('login')
            }

        );
      }
  }
}
</script>