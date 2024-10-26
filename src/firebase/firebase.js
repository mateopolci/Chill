import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMpXy-_NzBw5fTNjA1xb4YKrIezrlvGfM",
  authDomain: "chill-4acdb.firebaseapp.com",
  projectId: "chill-4acdb",
  storageBucket: "chill-4acdb.appspot.com",
  messagingSenderId: "351344471101",
  appId: "1:351344471101:web:74d67d36f4edbbdc80ce54"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);