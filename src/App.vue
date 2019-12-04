<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-firestore.js"></script>

<script>
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCisi7T7b9QJu4ibfCAXGIjhhWbTdshHNc",
  authDomain: "starbucks2-pwa.firebaseapp.com",
  databaseURL: "https://starbucks2-pwa.firebaseio.com",
  projectId: "starbucks2-pwa",
  storageBucket: "starbucks2-pwa.appspot.com",
  messagingSenderId: "511647722730",
  appId: "1:511647722730:web:81714bc551add7fbb63b93"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
</script>

<!--<script src="/db.js"></script> -->

<script>
export default {
  data: function() {
    return {
      name: "App"
    };
  },
  beforeMount: function() {
    if (navigator) {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
          navigator.serviceWorker.register("/service-worker.js");
        });
      }
    }
  }
};
</script>
