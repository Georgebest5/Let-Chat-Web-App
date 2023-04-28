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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
          message:msg,
          like:0  
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
