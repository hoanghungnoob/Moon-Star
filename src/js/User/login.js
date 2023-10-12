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
        loginModal.style.display = "none"; // Ẩn modal đăng ký
    });
        

        // Xử lý đăng nhập khi người dùng submit form
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();
            // Lấy giá trị nhập từ người dùng
            const emailInput = document.getElementById("Email").value;
            const passwordInput = document.getElementById("password").value;

            fetch("../../../../../database/data.json")
                .then(response => response.json())
                .then(data => {
                    const user = data.user;
                    const admin = data.admin;
                    const loggedInUser = user.find(user => user.email === emailInput && user.password === passwordInput);
                    const loggedInAdmin = admin.find(admin => admin.email === emailInput && admin.password === passwordInput);

                    if (loggedInUser) {
                        window.location.href = "homepages2.html";
                    } 
                    else if(loggedInAdmin){
                        window.location.href = "../Admin/admin.html"
                    } 
                    else {
                        alert("Unsuccessful");
                    }
                })
                .catch(error => {
                    alert("Lỗi khi tải dữ liệu người dùng:", error);
                });
            // Đóng modal sau khi đăng nhập thành công
            let loginModal = document.getElementById("loginModal");
            loginModal.style.display = "none";
        });
