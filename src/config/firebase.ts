import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCyskMRnDG4YJ79EdSeTO2m5_mOCuV38ko",
  authDomain: "edugraph-63a15.firebaseapp.com",
  projectId: "edugraph-63a15",
  storageBucket: "edugraph-63a15.firebasestorage.app",
  messagingSenderId: "886558642854",
  appId: "1:886558642854:web:264bb6a443cddc658f5a67",
  measurementId: "G-NJQHPF28F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;