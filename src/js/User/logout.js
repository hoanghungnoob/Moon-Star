document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("user_token_id");
    localStorage.removeItem("cost");
    localStorage.removeItem("Seat");
    localStorage.removeItem("nameFilm");
    localStorage.removeItem("dateWatch");
    localStorage.removeItem("countSeat");
    localStorage.removeItem("selectedHour");
    localStorage.removeItem("admin_token_id");
    localStorage.removeItem("name_user");
    localStorage.removeItem("lastname_user");
    localStorage.removeItem("phone_user");
    localStorage.removeItem("email_user");
    window.location.href = "/src/pages/User/index.html";
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("registerBtn").style.display = "inline-block";
    document.getElementById("menu_profile").style.display = "none";
}
