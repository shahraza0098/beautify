// import { initializeApp, cert } from 'firebase-admin/app';
// import { getAuth } from 'firebase-admin/auth';

// const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY_JSON);

// if (!getAuth.apps?.length) {
//   initializeApp({
//     credential: cert(serviceAccount),
//   });
// }

// export async function verifyFirebaseToken(req) {
//   try {
//     const authHeader = req.headers.get('authorization') || '';
//     const token = authHeader.replace('Bearer ', '');

//     if (!token) throw new Error('No token provided');

//     const decoded = await getAuth().verifyIdToken(token);
//     return { uid: decoded.uid };
//   } catch (err) {
//     return null;
//   }
// }


import { initFirebaseAdmin, getAuth } from './initFirebaseAdmin';

export async function verifyFirebaseToken(req) {
  try {
    initFirebaseAdmin();

    const authHeader = req.headers.get('authorization') || '';
    const token = authHeader.replace('Bearer ', '');

    if (!token) throw new Error('No token provided');

    const decoded = await getAuth().verifyIdToken(token);
    return { uid: decoded.uid };
  } catch (err) {
    return null;
  }
}

