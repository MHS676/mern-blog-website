// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-ccf62.firebaseapp.com',
  projectId: 'mern-blog-ccf62',
  storageBucket: 'mern-blog-ccf62.appspot.com',
  messagingSenderId: '1000598819269',
  appId: '1:1000598819269:web:5e52ee67ebee2be8e17bac'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

