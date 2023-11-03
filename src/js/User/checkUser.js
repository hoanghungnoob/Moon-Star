let checkUser = localStorage.getItem("user_token_id");
if (!checkUser) {
    console.log("chuaw  login");
}else{
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById("menu_profile").style.display = "inline-block";
}