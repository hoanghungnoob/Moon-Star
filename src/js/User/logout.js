document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("user_token_id");
    window.location.href = "/src/pages/User/homepages.html";

}
