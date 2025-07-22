
// import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// //const app = initializeApp(firebaseConfig);


// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// export { app, auth, analytics };


import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

//console.log('FIREBASE CONFIG:', firebaseConfig);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
console.log("whats inside app",app);
console.log("getApp array first element in whole array",getApps());


const auth = getAuth(app);

// Load analytics only in the browser
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
