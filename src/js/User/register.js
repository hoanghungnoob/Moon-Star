document
  .getElementById("registerBtn")
  .addEventListener("click", openRegisterModal);

function openRegisterModal() {
  let loginModal = document.getElementById("registerModal");
  loginModal.style.display = "block";
}

document
  .getElementById("registerModal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      let loginModal = document.getElementById("registerModal");
      loginModal.style.display = "none";
    }
  });
let loginModal = document.getElementById("loginModal");
let showLoginModalLink = document.getElementById("showLoginModal");
let registerModal = document.getElementById("registerModal");

// Lắng nghe sự kiện khi nhấp vào liên kết "Login" trong form đăng ký
showLoginModalLink.addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

  loginModal.style.display = "block"; // Hiển thị modal đăng nhập
  registerModal.style.display = "none"; // Ẩn modal đăng ký
});
