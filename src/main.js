// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

// Helpers
import colors from 'vuetify/es5/util/colors'

import App from './App'
import router from './router'
import firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  /*theme: {
    primary: "#003973", //colors.orange.darken2, // #E53935
    secondary: "#09BC8A", //colors.orange.lighten1, // #FFCDD2
    accent: "#E84855", //colors.indigo.base, // #3F51B5
    google: colors.blue.darken1,
    error: "#E84855",
    warning: "#FF9B71",
    info: "#FFFD82",
    success: "#09BC8A"
  }*/
}
)

var config = {
    apiKey: "AIzaSyDYaMgZDLOeEdC-N5vBEPty3r9WwTgFTVc",
    authDomain: "growthmaps-v1.firebaseapp.com",
    databaseURL: "https://growthmaps-v1.firebaseio.com",
    projectId: "growthmaps-v1",
    storageBucket: "",
    messagingSenderId: "298045750330"
  };

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
});

