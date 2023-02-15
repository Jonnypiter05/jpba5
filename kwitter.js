
function addUser() {

    userName = document.getElementById("userName").value;
  
    localStorage.setItem("userName", userName);
    
      window.location = "kwitter_room.html";
  }
  
  
  const firebaseConfig = {
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
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código

//Fim do código
});});}
getData();