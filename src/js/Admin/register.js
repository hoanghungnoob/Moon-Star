document.getElementById("registerBtn").addEventListener("click", openRegisterModal
);

function openRegisterModal() {
    let loginModal = document.getElementById("registerModal");
    loginModal.style.display = "block";
}

document.getElementById("registerModal").addEventListener("click", function (e) {
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


function RandomHexString(L) {
  let hexstring = "";
  for (let i = 0; i < L; i++) {
    hexstring += Math.floor(Math.random() * 16).toString(16);
  }
  return hexstring;
}

function register() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let pnumber = document.getElementById("phonenumber").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("Password").value;
  let repassword = document.getElementById("repassword").value;
  let id =
    RandomHexString(4) + "-" + RandomHexString(4);

  console.log(id);
  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(pnumber);
  console.log(password);
  console.log(repassword);
  // Create an object with the data
  console.log(id);
  if (
    fname != "" &&
    lname != "" &&
    pnumber != "" &&
    email != "" &&
    password != "" &&
    password == repassword
  ) {
    let userData = {
      id,
      name: fname,
      lastname: lname, 
      pnumber: pnumber,
      email: email,
      password: password,
      gender: ""
    };
    console.log(userData);
    // Make a POST request to http://localhost:3000/user
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((data) => {
        console.log("Data sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert(
      "vui lòng nhập đầy đủ thông tin! và đảm bảo rằng mật khẩu phải giống nhau"
    );
  }
}
