// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

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

