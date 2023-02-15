function send()  //Utilizando a id da input box de mensagem, pegue o valor e o armazene dentro de uma variável//
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({     //Agora, adicione uma mensagem à sala selecionada // //database() - significa que queremos adicionar dados ao banco de dados
            name:userName,                        //ref(roomName) - ref() significa a referência, em que queremos adicionar a mensagem, contador de likes e nome de usuário no banco de dados. ○ “roomName” - Queremos adicionar a mensagem, contador de likes e o nome do usuário à sala selecionada. Por isso, passamos a variável roomName dentro de ref(), para que a mensagem, o contador de likes e o nome do usuário fossem adicionados ao nome da sala selecionado
                                                  //name é a chave para o valor userName (userName é a variável que contém o nome do usuário)
            menssage:msg,                       //like é a chave para o valor 0 (fornecemos o valor inicial para os likes da mensagem
                                               //Finalmente, atualize o valor da input box das mensagens para vazio

            like:0
      });
      document.getElementById("msg").value = "";
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