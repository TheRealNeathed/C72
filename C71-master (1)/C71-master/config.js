import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDB3PIyYzXNuQ73dKoTeQLzdBnv8tbE5jU",
    authDomain: "storyhub-35812.firebaseapp.com",
    databaseURL: "https://storyhub-35812.firebaseio.com",
    projectId: "storyhub-35812",
    storageBucket: "storyhub-35812.appspot.com",
    messagingSenderId: "691378392600",
    appId: "1:691378392600:web:88c039e4a900aa18457d6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();