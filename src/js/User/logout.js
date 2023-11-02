document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("user_token_id");
    localStorage.removeItem("cost");
    localStorage.removeItem("Seat");
    localStorage.removeItem("countSeat");
    localStorage.removeItem("selectedHour");
    localStorage.removeItem("admin_token_id");
    window.location.href = "/src/pages/User/index.html";
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("registerBtn").style.display = "inline-block";
    document.getElementById("menu_profile").style.display = "none";
}
