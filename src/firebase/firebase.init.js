// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDoQuTZxkuvb9fVmWaAoz8f41FyTCtOryc',
  authDomain: 'warmpaws-f1b79.firebaseapp.com',
  projectId: 'warmpaws-f1b79',
  storageBucket: 'warmpaws-f1b79.firebasestorage.app',
  messagingSenderId: '502035091359',
  appId: '1:502035091359:web:44848ba432245392cc37aa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
