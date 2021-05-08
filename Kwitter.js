function login(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User_name",user_name);
    window.location = "Kwitter_room.html";
}