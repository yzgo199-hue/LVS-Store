import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCGNmO60DLskMd4-CeOTA_mZ6qHoAfGTM",
  authDomain: "lvs-projects.firebaseapp.com",
  projectId: "lvs-projects",
  storageBucket: "lvs-projects.firebasestorage.app",
  messagingSenderId: "458326206529",
  appId: "1:458326206529:web:1219e4a818b69501843ec0",
  measurementId: "G-88M0WY7Y1W"
};

const app = initializeApp(firebaseConfig);
export default app;
