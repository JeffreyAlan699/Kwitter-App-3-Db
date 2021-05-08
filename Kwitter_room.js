var firebaseConfig = {
    apiKey: "AIzaSyCrDIBn-oTfNShiEXQvFnOIiL2o7Zg90AI",
    authDomain: "class-94-e20b0.firebaseapp.com",
    databaseURL: "https://class-94-e20b0-default-rtdb.firebaseio.com",
    projectId: "class-94-e20b0",
    storageBucket: "class-94-e20b0.appspot.com",
    messagingSenderId: "489555332524",
    appId: "1:489555332524:web:58fced1c2010aa53347e09",
    measurementId: "G-TX9PWL2P6L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("User_name");
console.log(user_name);
document.getElementById("h1").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          })
          localStorage.setItem("room name",room_name);
          window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}
