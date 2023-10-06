document.getElementById("loginBtn").addEventListener("click", openLoginModal);

        function openLoginModal() {
            var loginModal = document.getElementById("loginModal");
            loginModal.style.display = "block";
        }

        document.getElementById("loginModal").addEventListener("click", function (e) {
            if (e.target === this) {
                var loginModal = document.getElementById("loginModal");
                loginModal.style.display = "none";
            }
        });
        var loginModal = document.getElementById("loginModal");
        var showRegisterModalLink = document.getElementById("showRegisterModal");
        var registerModal = document.getElementById("registerModal");

    // Lắng nghe sự kiện khi nhấp vào liên kết "Login" trong form đăng ký
        showRegisterModalLink.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

        registerModal.style.display = "block"; // Hiển thị modal đăng ký
        loginModal.style.display = "none"; // Ẩn modal đăng ký
    });
        

        // Xử lý đăng nhập khi người dùng submit form
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();
            // Lấy giá trị nhập từ người dùng
            const emailInput = document.getElementById("Email").value;
            const passwordInput = document.getElementById("password").value;

            fetch("../database/data.json")
                .then(response => response.json())
                .then(data => {
                    const user = data.user;
                    const loggedInUser = user.find(user => user.email === emailInput && user.password === passwordInput);

                    if (loggedInUser) {
                        window.location.href = "homepages2.html";
                    } else {
                        alert("Unsuccessful");
                    }
                })
                .catch(error => {
                    alert("Lỗi khi tải dữ liệu người dùng:", error);
                });
            // Đóng modal sau khi đăng nhập thành công
            var loginModal = document.getElementById("loginModal");
            loginModal.style.display = "none";
        });
