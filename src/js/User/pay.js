function RandomHexString(L) {
  let hexstring = "";
  for (let i = 0; i < L; i++) {
    hexstring += Math.floor(Math.random() * 16).toString(16);
  }
  return hexstring;
}

  function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    var day = currentDate.getDate();
    // Định dạng lại ngày thành một chuỗi "YYYY-MM-DD"
    var formattedDate = year + "-" + padZero(month) + "-" + padZero(day);
    return formattedDate;
  }
  // Hàm này để đảm bảo rằng số tháng và ngày luôn có hai chữ số
  function padZero(value) {
    return value < 10 ? "0" + value : value;
  }
  // Gọi hàm để lấy ngày hiện tại
  let currentDate = getCurrentDate();
  let nameFilm = JSON.parse(localStorage.getItem('nameFilm'));
  let dateWatch = JSON.parse(localStorage.getItem(''))
  let idUser = localStorage.getItem('user_token_id');
  idUser = idUser.replace(/"/g, "");
  fetch('https://mor-start.onrender.com/user')
    .then(res => res.json())
    .then(data => {
      for (const item of data) {
        if (item.id == idUser) {
          let name = item.name;
          let lastname = item.lastname;
          let email = item.email;
          let phoneNumber = item.pnumber;
        }
      }
    })
  // hàm lấy ngày giờ hiện tại

let amount = localStorage.getItem('cost')

let id = RandomHexString(4);
  let data = {
    id,
    amount
  }

const payButton = document.getElementById("buttonPay");
payButton.addEventListener("click", () => {
  fetch("https://mor-start.onrender.com/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(data)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Chuyển đổi dữ liệu JSON
    })
    .then((data) => {
      window.open(data.payUrl);
    })
    .catch((error) => {
      alert("Error:", error);
    });
});




