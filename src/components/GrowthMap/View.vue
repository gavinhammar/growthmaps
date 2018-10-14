<template>
   <div>
    <v-toolbar 
                flat
                dense
                color="secondary"
                dark>
                <v-container text-xs-center >
                    <span class="title">
                    {{ mode === "new"? "New GrowthMap" : ""}}
                    </span>
                     <v-icon small="true">edit</v-icon>
                </v-container>
      </v-toolbar >
      <v-toolbar 
                flat
                dense
                light>
                <v-tabs v-model="tabs"
                    light
                    slider-color="primary"  centered="true">
                    <v-tab href="#tab-map">
                         Actions
                    </v-tab>
                     <v-tab href="#tab-settings">
                         Settings
                    </v-tab>
                    <v-tab href="#tab-performance">
                         Performance
                    </v-tab>
                </v-tabs>
      </v-toolbar >
      <v-container>
          <v-tabs-items v-model="tabs" >
            <v-tab-item  id="tab-map" style="scroll:auto;">
                <growth-map :mode="mode"></growth-map>
            </v-tab-item>
            <v-tab-item  id="tab-settings">
                Settings Tab
            </v-tab-item>
            <v-tab-item id="tab-performance">
                Performance Tab
            </v-tab-item>
          </v-tabs-items>
      </v-container>
   </div>
</template>


<script>
import firebase from 'firebase';
import GrowthMap from '@/components/GrowthMap/Map';

export default {
  name: 'View',
  props: ['mode'],
  components: {
    GrowthMap
  },
  data: function() {
      return {
        tabs: null,
        user: firebase.auth().currentUser
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