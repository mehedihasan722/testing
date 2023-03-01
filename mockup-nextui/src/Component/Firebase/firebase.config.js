import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBpSQ-hl0_92HEI_UTLjh7rtADZ1Xf92ks",
    authDomain: "web-wallet-com.firebaseapp.com",
    projectId: "web-wallet-com",
    storageBucket: "web-wallet-com.appspot.com",
    messagingSenderId: "203939398845",
    appId: "1:203939398845:web:813041713555c1adc1e3d4",
    measurementId: "G-HZ7S8N26PD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default app;