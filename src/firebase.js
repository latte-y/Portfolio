// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBa838ZyZ56ht7c-J0xnQIXQ3P4UsNhTyM",
  authDomain: "portfolio-f684b.firebaseapp.com",
  projectId: "portfolio-f684b",
  storageBucket: "portfolio-f684b.appspot.com",
  messagingSenderId: "401655060254",
  appId: "1:401655060254:web:006cc3e35a463d82f19b0f",
  measurementId: "G-2681XRZSLT",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
