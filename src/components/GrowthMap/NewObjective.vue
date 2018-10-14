<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="title"
            :counter="10"
            :rules = "nameRules"
            label="Objective Name"
            required
            ></v-text-field>
        <v-text-field
            v-model="description"
            label="Objective Description"
            :rules = "descriptionRules"
             required
            ></v-text-field>
            <v-btn  dark medium color="primary" @click="submit">Create</v-btn>
     </v-form>
</v-container>
</template>


<script>
import firebase from 'firebase';

export default {
  name: 'NewObjective',
  props: ['objectives'],
  data: function() {
      return {
          user: firebase.auth().currentUser,
          valid: true,
          title: "",
          description: "",
           nameRules: [
            v => !!v || 'Title is required',
            v => v.length >= 5 || 'Title must be at least 5 characters'
            ],
            descriptionRules: [
            v => !!v || 'Description is required',
            v => v.length >= 10 || 'Description must be at least 10 characters'
            ],
      };
  },
  methods: {
     submit: function()
     {
         if (this.$refs.form.validate()) {
            //this.$emit('created', objective)
            this.objectives.push({
                type: "objective",
                title: this.title,
                description: this.description
            });
               
        }
     }
  }
}
</script>