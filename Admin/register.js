function RandomHexString(L) {
  var hexstring = "";
  for (var i = 0; i < L; i++) {
    hexstring += Math.floor(Math.random() * 16).toString(16);
  }
  return hexstring;
}

function register() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let pnumber = document.getElementById("phonenumber").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;
  let id =
    RandomHexString(4) + "-" + RandomHexString(4);

  console.log(id);
  // Create an object with the data
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
