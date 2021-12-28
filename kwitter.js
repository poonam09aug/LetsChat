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




function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update(
    {
    key:"messages"
    }
    );
  
    window.location = "kwitter_room.html";
}

