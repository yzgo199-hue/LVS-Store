import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export default app;
