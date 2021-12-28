var firebaseConfig = {
  apiKey: "AIzaSyAfpTuRQcIR-rDK8TYVRgOfKYy2To6QT6s",
  authDomain: "kwitterapp-ea9b0.firebaseapp.com",
  databaseURL: "https://kwitterapp-ea9b0-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-ea9b0",
  storageBucket: "kwitterapp-ea9b0.appspot.com",
  messagingSenderId: "868345871209",
  appId: "1:868345871209:web:f4f43debf1585518f3dbf8"
};

 firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome! "+user_name;

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"Adding RoomName"
});
localStorage.setItem(room_name, "room_name");
window.location="kwitter_page.html";
}


function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name){
  console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}



