function showUser() {
  let show1 = document.getElementById("container-item-right-head1");
  let table1 = document.getElementById("user-list");
  show1.style.display = "block";
  table1.style.display = "block";

  hideListFilm();
}
// get data user
// fetch('http://localhost:3000/user')
//     .then(response => response.json())
//     .then(data => {
//         for (let index = 0; index < data.length; index++) {
//             let html = '';
//             const element = data[index];
//             const name = element.name;
//             const email = element.email;
//             const password = element.password;
//             // console.log(name,email,password);
//             html += '<tr>'
//             html += '<td>' + name + '</td>'
//             html += '<td>' + email + '</td>'
//             html += '<td>' + password + '</td>'
//             html += '<td class="fix-option">' + '<button id="update-user"><i class="fa-solid fa-screwdriver-wrench"></i></button>' + '<button id="delete-user"><i class="fa-solid fa-trash"></i></button>' + '</td>'
//             html += '</tr>'
//             document.getElementById('tbody1').innerHTML += html;

//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// data thử
// Sử dụng fetch để lấy danh sách người dùng
fetch("http://localhost:3000/user")
  .then((response) => response.json())
  .then((data) => {
    let html = ""; // Chuỗi HTML tổng hợp cho tất cả các người dùng
    for (let index of data) {
      const element = data[index];
      const name = element.name;
      const email = element.email;
      const password = element.password;
      const userId = element.id; // Lấy ID của người dùng

      html += "<tr>";
      html += "<td>" + name + "</td>";
      html += "<td>" + email + "</td>";
      html += "<td>" + password + "</td>";
      html +=
        '<td class="fix-option">' +
        '<button id="update-user-' +
        userId +
        '"><i class="fa-solid fa-screwdriver-wrench"></i></button>' +
        '<button id="delete-user-' +
        userId +
        '"><i class="fa-solid fa-trash"></i></button>' +
        "</td>";
      html += "</tr>";
    }

    // Gán chuỗi HTML vào tbody1 sau khi tạo xong tất cả các người dùng
    document.getElementById("tbody1").innerHTML = html;

    // Bắt sự kiện click cho nút "Sửa" của người dùng
    for (let index of data) {
      const element = data[index];
      const userId = element.id; // Lấy ID của người dùng

      document
        .getElementById("update-user-" + userId)
        .addEventListener("click", () => {
          // modal update
          const update_creat = document.getElementById("update-user-" + userId);
          const update_close = document.getElementById("update-close");
          const update_close_button =
            document.getElementById("update-close-modal");
          const update_modal_container = document.getElementById(
            "update-modal-container"
          );
          const update_data = document.getElementById("update-submit");
          update_creat.addEventListener("click", () => {
            // add class show
            update_modal_container.classList.add("show");
          });
          update_close.addEventListener("click", () => {
            update_modal_container.classList.remove("show");
          });
          update_close_button.addEventListener("click", () => {
            update_modal_container.classList.remove("show");
          });

          document.getElementById("update-id").value = element.id;
          document.getElementById("update-name").value = element.name;
          document.getElementById("update-lname").value = element.lastname;
          document.getElementById("update-email").value = element.email;
          document.getElementById("update-password").value = element.password;
          document.getElementById("update-phone").value = element.pnumber;
          // mai hỏi thầy Đình lấy dữ liệu select
          // document.getElementById('update-gender').value=element.gender;
          update_data.addEventListener("click", () => {
            let e = document.getElementById("update-select");
            let gender = e.options[e.selectedIndex].text;
            const updateUser = {
              id: document.getElementById("update-id").value,
              name: document.getElementById("update-name").value,
              lastname: document.getElementById("update-lname").value,
              email: document.getElementById("update-email").value,
              password: document.getElementById("update-password").value,
              pnumber: document.getElementById("update-phone").value,
              gender: gender,
            };

            fetch(`http://localhost:3000/user/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateUser),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Cập nhật người dùng thất bại.");
                }
                return response.json();
              })
              .then((data) => {
                // Xử lý phản hồi từ API sau khi cập nhật thành công
                console.log("Thông tin người dùng đã được cập nhật:", data);

                // Đóng modal sau khi cập nhật thành công
                update_modal_container.classList.remove("show");
              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });
          });
        });
      document
        .getElementById("delete-user-" + userId)
        .addEventListener("click", () => {
          // Lấy các phần tử DOM
          const show_modal_dl_user = document.getElementById(
            "delete-user-" + userId
          );
          const modal = document.querySelector(".modaldeleteuser");
          const confirmButton = document.getElementById("confirm-button");
          const cancelButton = document.getElementById("cancel-button");

          show_modal_dl_user.addEventListener("click", () => {
            modal.classList.add("show-modal-dl-user");
          });
          // Bắt sự kiện khi nút "Xác nhận" được nhấn
          confirmButton.addEventListener("click", () => {
            // Thực hiện các hành động khi nút "Xác nhận" được nhấn
            fetch(`http://localhost:3000/user/${userId}`, {
              method: "DELETE",
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Xóa người dùng thất bại.");
                }
                return response.json();
              })
              .then((data) => {
                // Xử lý phản hồi từ API sau khi xóa thành công
                console.log("Người dùng đã được xóa:", data);

                // Đóng modal sau khi xóa thành công
                modal.classList.remove("show-modal-dl-user");
                // Cập nhật giao diện hoặc làm bất kỳ điều gì bạn muốn sau khi xóa thành công
              })
              .catch((error) => {
                console.error("Lỗi khi xóa người dùng:", error);
              });
            closeModal();
          });

          // Bắt sự kiện khi nút "Hủy bỏ" được nhấn
          cancelButton.addEventListener("click", () => {
            // Thực hiện các hành động khi nút "Hủy bỏ" được nhấn

            closeModal();
          });
          // Hàm để đóng modal
          function closeModal() {
            modal.classList.remove("show-modal-dl-user");
          }
        });
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function hideUser() {
  let show1 = document.getElementById("container-item-right-head1");
  let table1 = document.getElementById("user-list");
  show1.style.display = "none";
  table1.style.display = "none";
}
function showListFilm() {
  let show2 = document.getElementById("container-item-right-head2");
  let table2 = document.getElementById("list-film");
  show2.style.display = "block";
  table2.style.display = "block";
  hideUser();
}
function hideListFilm() {
  let show2 = document.getElementById("container-item-right-head2");
  let table2 = document.getElementById("list-film");
  show2.style.display = "none";
  table2.style.display = "none";
}
// get data list film
fetch("http://localhost:3000/listfilm")
  .then((response) => response.json())
  .then((data) => {
    for (let index of data) {
      let html = "";
      const element = data[index];
      const name = element.name;
      const time = element.time;
      const director = element.Director;
      const content = element.Content;
      html += "<tr>";
      html += "<td>" + name + "</td>";
      html += "<td>" + time + "</td>";
      html += "<td>" + director + "</td>";
      html += "<td>" + content + "</td>";
      html +=
        '<td class="fix-option">' +
        '<button id="update-listfilm"><i class="fa-solid fa-screwdriver-wrench"></i></button>' +
        '<button id="delete-film"><i class="fa-solid fa-trash"></i></button>' +
        "</td>";
      html += "</tr>";
      document.getElementById("tbody2").innerHTML += html;
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// modal create
const creat = document.getElementById("create-user");
const close = document.getElementById("close");
const close_button = document.getElementById("close-modal");
const modal_container = document.getElementById("modal-container");
creat.addEventListener("click", () => {
  // add class show
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
close_button.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

// create data by modal
function RandomHexString(L) {
  let hexstring = "";
  for (let i = 0; i < L; i++) {
    hexstring += Math.floor(Math.random() * 16).toString(16);
  }
  return hexstring;
}

function register() {
  let fname = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let pnumber = document.getElementById("phone").value;
  let e = document.getElementById("select");
  let gender = e.options[e.selectedIndex].text;
  let id = RandomHexString(4) + "-" + RandomHexString(4);
  if (
    fname != "" &&
    lname != "" &&
    pnumber != "" &&
    email != "" &&
    password != "" &&
    pnumber != ""
  ) {
    let userData = {
      id,
      name: fname,
      lastname: lname,
      pnumber: pnumber,
      email: email,
      password: password,
      gender: gender,
    };

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
