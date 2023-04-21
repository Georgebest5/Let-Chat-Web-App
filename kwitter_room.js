const firebaseConfig = {
      apiKey: "AIzaSyD-pJ0zRtaNyu9sETL_ymY9B-YasbCmOGg",
      authDomain: "let-chat-web-app-c9041.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-c9041-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-c9041",
      storageBucket: "let-chat-web-app-c9041.appspot.com",
      messagingSenderId: "1057520959532",
      appId: "1:1057520959532:web:62cb4cb135b65f52a9d189"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        
      //End code
      });});}
getData();
