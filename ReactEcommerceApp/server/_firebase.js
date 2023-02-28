
// https://console.firebase.google.com/u/1/project/ecommerceapp-7ecb5/settings/serviceaccounts/adminsdk

var admin = require("firebase-admin");

var serviceAccount = require("./config/firebaseServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;