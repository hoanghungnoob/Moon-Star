document.getElementById("loginBtn").addEventListener("click", openLoginModal);

function openLoginModal() {
  let loginModal = document.getElementById("loginModal");
  loginModal.style.display = "block";
}

document.getElementById("loginModal").addEventListener("click", function (e) {
  if (e.target === this) {
    let loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
  }
});
let loginModal = document.getElementById("loginModal");
let showRegisterModalLink = document.getElementById("showRegisterModal");
let registerModal = document.getElementById("registerModal");

// Lắng nghe sự kiện khi nhấp vào liên kết "Login" trong form đăng ký
showRegisterModalLink.addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

  registerModal.style.display = "block"; // Hiển thị modal đăng ký
  loginModal.style.display = "none"; // Ẩn modal đăng nhập
});



// Kiểm tra trạng thái đăng nhập khi trang chủ được tải lại
document.addEventListener("DOMContentLoaded", function () {
  const userToken = localStorage.getItem("user_token_id");
  const adminToken = localStorage.getItem("admin_token_id");

  if (userToken || adminToken) {
    // Người dùng đã đăng nhập, ẩn nút đăng nhập và đăng ký, hiển thị hình profile
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById("menu_profile").style.display = "inline-block";
  } else {
    // Người dùng chưa đăng nhập, hiển thị nút đăng nhập và đăng ký
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("registerBtn").style.display = "inline-block";
    document.getElementById("menu_profile").style.display = "none";
  }
});


// Xử lý đăng nhập khi người dùng submit form
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Lấy giá trị nhập từ người dùng
  const emailInput = document.getElementById("Email").value;
  const passwordInput = document.getElementById("password").value;

  fetch("https://foregoing-messy-freckle.glitch.me/user")
    .then(response => response.json())
    .then(data => {
      const user = data;
      const loggedInUser = user.find(user => user.email === emailInput && user.password === passwordInput);
      if (loggedInUser) {
        // Lưu thông tin người dùng đã đăng nhập vào local storage
        localStorage.setItem("user_token_id", JSON.stringify(loggedInUser.id));
        // Ẩn nút đăng nhập và đăng ký, hiển thị hình profile
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("registerBtn").style.display = "none";
        document.getElementById("menu_profile").style.display = "inline-block";
      } else {
        fetch("https://foregoing-messy-freckle.glitch.me/admin")
          .then(response => response.json())
          .then(data => {
            const admin = data;
            const loggedInAdmin = admin.find(admin => admin.email === emailInput && admin.password === passwordInput);
            if (loggedInAdmin) {
              // Lưu thông tin người dùng đã đăng nhập vào local storage
              localStorage.setItem("admin_token_id", JSON.stringify(loggedInAdmin.id));

              // Chuyển hướng đến trang quản trị
              window.location.href = "/admin.html";
            }
            else {
              alert("User undefine")
            }
          })
          .catch(error => {
            alert("Lỗi khi tải dữ liệu người dùng:", error);
          });

        // Đóng modal sau khi đăng nhập thành công
        let loginModal = document.getElementById("loginModal");
        loginModal.style.display = "none";
      }
    })
    .catch(error => {
      alert("Lỗi khi tải dữ liệu người dùng:", error);
    });

  // Đóng modal sau khi đăng nhập thành công
  let loginModal = document.getElementById("loginModal");
  loginModal.style.display = "none";
});

document.getElementById("logout").addEventListener("click", function () {
  // Xóa thông tin người dùng đã đăng nhập khỏi local storage
  localStorage.removeItem("user_token_id");
});




