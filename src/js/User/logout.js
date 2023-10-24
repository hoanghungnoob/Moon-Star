document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("user_token_id");
    localStorage.removeItem("admin_token_id");
    window.location.href = "/src/pages/User/homepages.html";
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("registerBtn").style.display = "inline-block";
    document.getElementById("menu_profile").style.display = "none";
}
