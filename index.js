/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Login from './Login';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import App from './LoginAuth/App'
import GetParent from './GetParent';
import FirstFile from './RenderProps/FirstFile';
import UsingHoc from './RenderProps/HOC/UsingHoc';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu8usWRHf9XOMoE570tFnUbyslkRne8Bs",
  authDomain: "testlogin-abcf3.firebaseapp.com",
  projectId: "testlogin-abcf3",
  storageBucket: "testlogin-abcf3.appspot.com",
  messagingSenderId: "1011637763862",
  appId: "1:1011637763862:web:683d5225582306f80e5a37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

AppRegistry.registerComponent(appName, () => UsingHoc);
