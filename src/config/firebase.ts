import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCy12LnfAqqv7DY_E-Atn8ZpwmRPBj0668",
  authDomain: "edugraph-d4fcf.firebaseapp.com",
  projectId: "edugraph-d4fcf",
  storageBucket: "edugraph-d4fcf.firebasestorage.app",
  messagingSenderId: "647644251684",
  appId: "1:647644251684:web:69c5889bccb3d6de6e7ab1",
  measurementId: "G-NGRLTRQW6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;