// import { initializeApp, getApps, cert } from 'firebase-admin/app';
// import { getAuth } from 'firebase-admin/auth';

// const initFirebaseAdmin = () => {
//   if (!getApps().length) {
//     initializeApp({
//       credential: cert({
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//       }),
//     });
//   }
// };

// export { initFirebaseAdmin, getAuth };

// src/lib/firebaseAdmin.js
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';

// Initialize Firebase Admin SDK only once
const initFirebaseAdmin = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, 
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
};

export { initFirebaseAdmin, getAdminAuth };

