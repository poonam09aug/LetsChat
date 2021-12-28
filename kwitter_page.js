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

   function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
    }


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

       function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value=" ";
       }