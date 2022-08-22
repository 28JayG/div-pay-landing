import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCgMn41K1pRKHb5_EOcdHjE6AhIRSuEkuE',
  authDomain: 'div-pay-landing.firebaseapp.com',
  projectId: 'div-pay-landing',
  storageBucket: 'div-pay-landing.appspot.com',
  messagingSenderId: '787698261062',
  appId: '1:787698261062:web:c318169c351ca399907e47',
  measurementId: 'G-DZ33XKMNGV',
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const dateToFirestoreTimestamp = (date) => {
  const _date = new Date(date);

  return Timestamp.fromDate(_date);
};
