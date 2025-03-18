// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  
  firebaseConfig:{

    apiKey: "AIzaSyBFQymK7Yx0qs4gABf-OBZV1NhrVH0Mp2c",
  
    authDomain: "todolist-cb4d9.firebaseapp.com",
  
    projectId: "todolist-cb4d9",
  
    storageBucket: "todolist-cb4d9.firebasestorage.app",
  
    messagingSenderId: "768838834617",
  
    appId: "1:768838834617:web:cd6f7c69fae631e5463e68"
  
  }
  
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
