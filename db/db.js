
const admin = require("firebase-admin");

const serviceAccount = require("./contacts-d3717-firebase-adminsdk-ge90j-71421555e6.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://contacts-d3717-default-rtdb.firebaseio.com"
  });

  console.log('Firebase OK!')

const db = admin.firestore()

module.exports = db 


