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
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
