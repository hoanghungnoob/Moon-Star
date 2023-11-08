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
  var formattedDate =  padZero(day)+ "/" + padZero(month) + "/" +year ;
  return formattedDate;
}
// Hàm này để đảm bảo rằng số tháng và ngày luôn có hai chữ số
function padZero(value) {
  return value < 10 ? "0" + value : value;
}
// Gọi hàm để lấy ngày hiện tại
let currentDate = getCurrentDate();
let nameFilm = JSON.parse(localStorage.getItem('nameFilm'));
let dateWatch = JSON.parse(localStorage.getItem('dateWatch'))
let idUser = JSON.parse(localStorage.getItem('user_token_id'));


let amount = localStorage.getItem('cost')

const payButton = document.getElementById("buttonPay");
payButton.addEventListener("click", () => {
  fetch("https://mor-start.onrender.com/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: RandomHexString(12),
      idUser: JSON.parse(localStorage.getItem('user_token_id')),
      nameUser: JSON.parse(localStorage.getItem('name_user')),
      lastname: JSON.parse(localStorage.getItem('lastname_user')),
      email: JSON.parse(localStorage.getItem('email_user')),
      phoneNumber: JSON.parse(localStorage.getItem('phone_user')),
      filmName: JSON.parse(localStorage.getItem('nameFilm')),
      dateBooking: currentDate,
      dateWatch: JSON.parse(localStorage.getItem('dateWatch')),
      time: JSON.parse(localStorage.getItem('selectedHour')),
      char: JSON.parse(localStorage.getItem('Seat')),
      money: localStorage.getItem('cost'),
    })
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