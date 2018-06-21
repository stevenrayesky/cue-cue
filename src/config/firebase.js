import * as firebase from "firebase";
import Rebase from "re-base";
import * as c from "./constants";


var config = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    databaseURL: c.FIREBASE_DATABASE_URL,
    projectId: c.FIREBASE_PROJECT_ID
  };
  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

  export default base;