// ==========================================
// AAKOOO EATZZ - Firebase Config & Init
// ==========================================

// Replace these values with your actual Firebase config keys from the Firebase Console!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let db = null;
let auth = null;
let useFirebase = false;

// Graceful check if client is using a real configuration
if (
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  typeof firebase !== "undefined"
) {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    useFirebase = true;
    console.log("[Firebase] Successfully initialized real database connection.");
  } catch (error) {
    console.error("[Firebase] Error initializing Firebase app:", error);
  }
} else {
  console.warn(
    "[Firebase] Running in OFFLINE / LOCAL mode. Replace placeholders in firebase-config.js with your keys to connect a live database."
  );
}
