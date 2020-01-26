/* eslint-disable no-undef */
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      // // The Firebase SDK is initialized and available here!
      //
      // firebase.auth().onAuthStateChanged(user => { });
      // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
      // firebase.messaging().requestPermission().then(() => { });
      // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
      //
      // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

      try {
        let app = firebase.app();
        let features = ["auth", "database", "messaging", "storage"].filter(
          feature => typeof app[feature] === "function"
        );
        document.getElementById(
          "load"
        ).innerHTML = `Firebase SDK loaded with ${features.join(", ")}`;
      } catch (e) {
        console.error(e);
        document.getElementById("load").innerHTML =
          "Error loading the Firebase SDK, check the console.";
      }
    });
  }, []);
  return (
    <div className="App">
      <div id="load"></div>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
