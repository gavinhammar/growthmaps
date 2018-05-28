<template>
   <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <objective :objective="growthmap.vision" xs4 md4 lg3></objective>
            </v-layout>
            <v-layout row wrap justify-center >
                 <objective v-for="(objective, index) in growthmap.objectives" :key="objective.id" :objective="objective" :index="index" :count="growthmap.objectives.length"></objective>
                 <plus-objective></plus-objective>
            </v-layout>
           <!-- <v-layout row wrap justify-center >
                <plus-key-result></plus-key-result>
            </v-layout>-->
            
        </v-container>
   </div>
</template>


<script>
import firebase from 'firebase';
import Objective from '@/components/GrowthMap/Objective';
import PlusObjective from '@/components/GrowthMap/PlusObjective';
import PlusKeyResult from '@/components/GrowthMap/PlusKeyResult';

export default {
  name: 'GrowthMap',
  props: ['mode'],
  components: {
      Objective,
      PlusObjective,
      PlusKeyResult
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
                    title: "Increase revenue",
                    keyresults: [
                        {
                            title: "Generate 120 new trialists"
                        }
                    ]
                },
                {
                    id: 1,
                    type: "objective",
                    title: "Build a rocket",
                    keyresults: [
                        {
                            title: "Generate 120 new trialists"
                        }
                    ]
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