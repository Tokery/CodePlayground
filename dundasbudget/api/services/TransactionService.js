var admin = require("firebase-admin");

var serviceAccount = require("../../config/env/production");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount.firebaseSDK),
    databaseURL: "https://dundasbudget.firebaseio.com"
})

module.exports = {
    checkAuth(idToken, done) {    
        if (idToken != undefined || idToken != null) {
            admin.auth().verifyIdToken(idToken)
                .then((decodedToken) => {
                    var uid = decodedToken.uid;
                    sails.log.debug("User UID is " + uid);
                    done();
                })
                .catch((error) => {
                    sails.log.error(new Error("Error: " + error));
                    done(error);
                });
        }
        else {
            sails.log.error(new Error("idToken was undefined or null"));
            done("Id token missing");
        }
    }
}