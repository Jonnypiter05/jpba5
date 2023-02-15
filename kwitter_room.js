function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
        window.location = "index.html";
    }const firebaseConfig = {
        apiKey: "AIzaSyBKa6GMnoxgKDxZzLdkmcftgA5PqUslP7U",
        authDomain: "projeto-do-conversar-40095.firebaseapp.com",
        databaseURL: "https://projeto-do-conversar-40095-default-rtdb.firebaseio.com",
        projectId: "projeto-do-conversar-40095",
        storageBucket: "projeto-do-conversar-40095.appspot.com",
        messagingSenderId: "149000015194",
        appId: "1:149000015194:web:2f9f929a17ff2a9573b763"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);