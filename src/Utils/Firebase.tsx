import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDigfiKZMjkUARrGekV4DyQmfIVCq1urIM",
    authDomain: "twk-project.firebaseapp.com",
    projectId: "twk-project",
    storageBucket: "twk-project.appspot.com",
    messagingSenderId: "310809129068",
    appId: "1:310809129068:web:5288663a8fabb93ad12849",
    measurementId: "G-M4WWMPMY6F",
}

firebase.initializeApp(firebaseConfig)

export default firebase