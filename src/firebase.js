import * as firebase from "firebase";
import Rebase from "re-base";


var config = {
    apiKey: "AIzaSyA2UocCYzlPvoRA2RbxXcL2oPhlT837IaE",
    authDomain: "cue-cue.firebaseapp.com",
    databaseURL: "https://cue-cue.firebaseio.com",
    projectId: "cue-cue",
    storageBucket: "",
    messagingSenderId: "949060080882"
  };
  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

  export default base;