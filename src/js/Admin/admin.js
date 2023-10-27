function showUser() {
  let show1 = document.getElementById("container-item-right-head1");
  let table1 = document.getElementById("user-list");
  show1.style.display = "block";
  table1.style.display = "block";
  hideListFilm();
  hideFilmComming();
  hideListBooking();
}
hideListBooking();

function showFilmComming() {
  let show = document.getElementById("container-item-right-head3");
  let table3 = document.getElementById("list-film-comming");
  show.style.display = "block";
  table3.style.display = "block";
  hideUser();
  hideListFilm();
  hideListBooking();
}
function hideFilmComming() {
  let show = document.getElementById("container-item-right-head3");
  let table3 = document.getElementById("list-film-comming");
  show.style.display = "none";
  table3.style.display = "none";
}
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
  hideFilmComming();
  hideListBooking();
}
function hideListFilm() {
  let show2 = document.getElementById("container-item-right-head2");
  let table2 = document.getElementById("list-film");
  show2.style.display = "none";
  table2.style.display = "none";
}
//hàm ẩn list booking
function hideListBooking() {
  let hide = document.querySelector('.listbooking');
  hide.style.display = 'none';
}

function showListBooking() {
  let show = document.querySelector('.listbooking')
  show.style.display = 'block';
  hideFilmComming();
  hideUser();
  hideListFilm();
}

// modal create user
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
    fetch("https://foregoing-messy-freckle.glitch.me/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((data) => {
        console.log("Data sent successfully:", data);
        window.location.reload();
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
// get data user
fetch("https://foregoing-messy-freckle.glitch.me/user")
  .then((response) => response.json())
  .then((data) => {
    let html = ""; // Chuỗi HTML tổng hợp cho tất cả các người dùng
    for (let index of data) {
      const element = index;
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
      const element = index;
      const userId = element.id; // Lấy ID của người dùng
      document
        .getElementById("update-user-" + userId)
        .addEventListener("click", () => {
          // modal update
          const update_close = document.getElementById("update-close");
          const update_close_button = document.getElementById("update-close-modal");
          const update_modal_container = document.getElementById("update-modal-container");
          const update_data = document.getElementById("update-submit");
          // add class show để show modal
          update_modal_container.classList.add("show");
          console.log("update-user-" + userId);
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

            fetch(`https://foregoing-messy-freckle.glitch.me/user/${element.id}`, {
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
                window.location.reload();

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
          const modal = document.querySelector(".modaldeleteuser");
          const confirmButton = document.getElementById("confirm-button");
          const cancelButton = document.getElementById("cancel-button");
          // thêm class để hiển thị modal delete
          modal.classList.add("show-modal-dl-user");
          // Bắt sự kiện khi nút "Xác nhận" được nhấn
          confirmButton.addEventListener("click", () => {
            // Thực hiện các hành động khi nút "Xác nhận" được nhấn
            fetch(`https://foregoing-messy-freckle.glitch.me/user/${userId}`, {
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
                 window.location.reload();

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


// get data list film
fetch("https://foregoing-messy-freckle.glitch.me/listfilm")
  .then((response) => response.json())
  .then((data) => {
    for (let index of data) {
      let html = "";
      const element = index;
      const name = element.name;
      const time = element.time;
      const director = element.Director;
      const content = element.Content;
      const filmId = element.id;
      html += "<tr>";
      html += "<td>" + name + "</td>";
      html += "<td>" + time + "</td>";
      html += "<td>" + director + "</td>";
      html += "<td>" + content + "</td>";
      html +=
        '<td class="fix-option">' +
        '<button id="update-film-' +
        filmId +
        '"><i class="fa-solid fa-screwdriver-wrench"></i></button>' +
        '<button id="delete-film-' +
        filmId +
        '"><i class="fa-solid fa-trash"></i></button>' +
        "</td>";
      html += "</tr>";

      document.getElementById("tbody2").innerHTML += html;
    }
    for (const index of data) {
      const element = index;
      const filmId = element.id;
      document.getElementById("update-film-" + filmId).addEventListener("click", () => {
        const update_film_close = document.getElementById('update-film-close-icon');
        const update_close_button = document.getElementById('update-film-cancel');
        const update_film_modal_container = document.getElementById('update-film-modal-container');
        const update_film_submit = document.getElementById("update-film-submit");
        // add class show
        update_film_modal_container.classList.add('show');
        // lấy các phần tử DOM
        document.getElementById('update-film-id').value = element.id;
        document.getElementById('update-film-name').value = element.name;
        document.getElementById('update-film-time').value = element.time;
        document.getElementById('update-film-date').value = element.date;
        document.getElementById('update-film-actor').value = element.Actors;
        document.getElementById('update-film-director').value = element.Director;

        // Display the image and video
        document.getElementById('update-film-image').src = element.image; // Set the image source
        document.getElementById('update-film-content').value = element.Content; // Set text content for description
        document.getElementById('update-film-trailer').src = element.video;

        console.log(filmId);
        update_film_submit.addEventListener("click", () => {
          if (checkFileImage() == false && checkFileVideo() == false) {
            let updateFilm = {
              name: document.getElementById('update-film-name').value,
              time: document.getElementById('update-film-time').value,
              date: document.getElementById('update-film-date').value,
              Actors: document.getElementById('update-film-actor').value,
              Director: document.getElementById('update-film-director').value,
              Content: document.getElementById('update-film-content').value,
              image: element.image,
              video: element.video
            }

            fetch(`https://foregoing-messy-freckle.glitch.me/listfilm/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateFilm),
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
                update_film_modal_container.classList.remove("show");
              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });
          }// nut if
          else if (checkFileImage() != false && checkFileVideo() == false) {
            console.log(checkFileImage());
            let nameImage = checkFileImage();
            let updateFilm = {
              name: document.getElementById('update-film-name').value,
              time: document.getElementById('update-film-time').value,
              date: document.getElementById('update-film-date').value,
              Actors: document.getElementById('update-film-actor').value,
              Director: document.getElementById('update-film-director').value,
              Content: document.getElementById('update-film-content').value,
              image: `/src/assets/image/${nameImage}`,
              video: element.video
            }

            fetch(`https://foregoing-messy-freckle.glitch.me/listfilm/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateFilm),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Cập nhật người dùng thất bại.");
                }
                return response.json();
              })
              .then((data) => {
                // Xử lý phản hồi từ API sau khi cập nhật thành công
                console.log("Thông tin film đã được cập nhật:", data);

                // Đóng modal sau khi cập nhật thành công
                update_film_modal_container.classList.remove("show");
              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });

          }
          else if (checkFileImage() == false && checkFileVideo() != false) {
            let nameVideo = checkFileVideo();
            let updateFilm = {
              name: document.getElementById('update-film-name').value,
              time: document.getElementById('update-film-time').value,
              date: document.getElementById('update-film-date').value,
              Actors: document.getElementById('update-film-actor').value,
              Director: document.getElementById('update-film-director').value,
              Content: document.getElementById('update-film-content').value,
              image: element.image,
              video: `/src/assets/trailer/${nameVideo}`
            }

            fetch(`https://foregoing-messy-freckle.glitch.me/listfilm/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateFilm),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Cập nhật phim thất bại.");
                }
                return response.json();
              })
              .then((data) => {
                // Xử lý phản hồi từ API sau khi cập nhật thành công
                console.log("Thông tin phim đã được cập nhật:", data);

                // Đóng modal sau khi cập nhật thành công
                update_film_modal_container.classList.remove("show");
                window.location.reload();

              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });
          }
          else {
            console.log(checkFileImage());
            console.log(checkFileVideo());
            let nameImage = checkFileImage();
            let nameVideo = checkFileVideo();
            let updateFilm = {
              name: document.getElementById('update-film-name').value,
              time: document.getElementById('update-film-time').value,
              date: document.getElementById('update-film-date').value,
              Actors: document.getElementById('update-film-actor').value,
              Director: document.getElementById('update-film-director').value,
              Content: document.getElementById('update-film-content').value,
              image: `/src/assets/image/${nameImage}`,
              video: `/src/assets/trailer/${nameVideo}`
            }

            fetch(`https://foregoing-messy-freckle.glitch.me/listfilm/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateFilm),
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
                update_film_modal_container.classList.remove("show");
                window.location.reload();

              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });

          }
        });

        update_film_close.addEventListener('click', () => {

          update_film_modal_container.classList.remove('show');
        });
        update_close_button.addEventListener('click', () => {
          update_film_modal_container.classList.remove('show');
        });

      });// ngoac cua update film
      // Lấy các phần tử DOM
      document.getElementById('delete-film-' + filmId).addEventListener("click", () => {
        const modal = document.querySelector('.modaldeletefilm');
        const confirmButton = document.getElementById('confirm-film-button');
        const cancelButton = document.getElementById('cancel-film-button');

        modal.classList.add('show-modal-dl-film');
        // Bắt sự kiện khi nút "Xác nhận" được nhấn
        confirmButton.addEventListener('click', () => {
          // Thực hiện các hành động khi nút "Xác nhận" được nhấn
          fetch(`https://foregoing-messy-freckle.glitch.me/listfilm/${filmId}`, {
            method: "DELETE", // Use the DELETE method to delete the film
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Xóa phim thất bại.");
              }
              return response.json();
            })
            .then((data) => {
              // Xử lý phản hồi từ API sau khi xóa thành công
              console.log("Phim đã được xóa:", data);

              // Đóng modal sau khi xóa thành công
              closeModal();
              // Cập nhật giao diện hoặc làm bất kỳ điều gì bạn muốn sau khi xóa thành công
        window.location.reload();

            })
            .catch((error) => {
              console.error("Lỗi khi xóa phim:", error);
            });
        });

        // Bắt sự kiện khi nút "Hủy bỏ" được nhấn
        cancelButton.addEventListener('click', () => {
          // Thực hiện các hành động khi nút "Hủy bỏ" được nhấn
          closeModal();
        });
        // Hàm để đóng modal
        function closeModal() {
          modal.classList.remove('show-modal-dl-film');
          window.location.reload();
        }

      })

    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });


// hàm kiểm tra thẻ input cuar  update film
function checkFileImage() {
  let fileInput = document.getElementById('update-film-image-local');
  let file = fileInput.files[0];

  if (file) {
    return file.name;
  } else {
    console.log('Không có ảnh nào được chọn.');
    return false;
  }
}
function checkFileVideo() {
  var fileInput = document.getElementById("update-film-trailer-local");
  var file = fileInput.files[0];

  if (file) {
    return file.name;
  } else {
    console.log('Không có video nào được chọn.');
    return false;
  }
}



// show modal create film
const create_film_create = document.getElementById('create-listfilm');
const create_film_close = document.getElementById('create-film-close-icon');
const create_close_button = document.getElementById('create-film-cancel');
const create_film_submit = document.getElementById('create-film-submit')
const create_film_modal_container = document.getElementById('create-film-modal-container');
create_film_create.addEventListener('click', () => {
  // add class show
  create_film_modal_container.classList.add('show');
  create_film_submit.addEventListener("click", () => {
    createfilm();
    create_film_modal_container.classList.remove('show');
  })
});
create_film_close.addEventListener('click', () => {

  create_film_modal_container.classList.remove('show');
});
create_close_button.addEventListener('click', () => {
  create_film_modal_container.classList.remove('show');
})

// hàm tạo fim mới
function createfilm() {
  let name = document.getElementById("create-film-name").value;
  let time = document.getElementById("create-film-time").value;
  let date = document.getElementById("create-film-date").value;
  let actor = document.getElementById("create-film-actor").value;
  let director = document.getElementById("create-film-director").value;
  let imageInput = document.getElementById("create-film-image");
  let content = document.getElementById("create-film-content").value;
  let trailerInput = document.getElementById("create-film-trailer");
  let id = RandomHexString(4) + "-" + RandomHexString(4);

  if (
    name !== "" &&
    time !== "" &&
    date !== "" &&
    actor !== "" &&
    director !== "" &&
    content !== ""
  ) {
    // Get the file names from the file inputs
    let imageFileName = imageInput.value.split('\\').pop(); // Extracts the file name from the full path
    let trailerFileName = trailerInput.value.split('\\').pop(); // Extracts the file name from the full path

    let listFilm = {
      id,
      name,
      time,
      date,
      Actors: actor,
      Director: director,
      image: `/src/assets/image/${imageFileName}`, // Store only the file name or relative path
      Content: content,
      video: `/src/assets/trailer/${trailerFileName}`, // Store only the file name or relative path
    };

    fetch("https://foregoing-messy-freckle.glitch.me/listfilm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listFilm),
    })
      .then((data) => {
        console.log("Data sent successfully:", data);
        window.location.reload();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}

// comingsoon
fetch("https://foregoing-messy-freckle.glitch.me/comingSoon")
  .then(response => response.json())
  .then((data) => {
    for (let index of data) {
      let html = "";
      const element = index;
      const name = element.name;
      const time = element.time;
      const director = element.Director;
      const content = element.Content;
      const filmId = element.id;
      html += "<tr>";
      html += "<td>" + name + "</td>";
      html += "<td>" + time + "</td>";
      html += "<td>" + director + "</td>";
      html += "<td>" + content + "</td>";
      html +=
        '<td class="fix-option">' +
        '<button id="update-film-coming-' +
        filmId +
        '"><i class="fa-solid fa-screwdriver-wrench"></i></button>' +
        '<button id="delete-film-coming-' +
        filmId +
        '"><i class="fa-solid fa-trash"></i></button>' +
        "</td>";
      html += "</tr>";

      document.getElementById("tbody3").innerHTML += html;
    }
    // update film 
    for (const index of data) {
      const element = index;
      const filmId = element.id;
      // lấy các phần tử DOM
      document.getElementById('update-film-id').value = element.id;
      document.getElementById('update-film-name').value = element.name;
      document.getElementById('update-film-time').value = element.time;
      document.getElementById('update-film-date').value = element.date;
      document.getElementById('update-film-actor').value = element.Actors;
      document.getElementById('update-film-director').value = element.Director;

      // Display the image and video
      document.getElementById('update-film-image').src = element.image; // Set the image source
      document.getElementById('update-film-content').value = element.Content; // Set text content for description

      document.getElementById("update-film-coming-" + filmId).addEventListener("click", () => {
        const update_film_close = document.getElementById('update-film-close-icon');
        const update_close_button = document.getElementById('update-film-cancel');
        const update_film_modal_container = document.getElementById('update-film-modal-container');
        const update_film_submit = document.getElementById("update-film-submit");
        update_film_modal_container.classList.add('show');

        update_film_close.addEventListener("click", () => {
          update_film_modal_container.classList.remove('show');
        });
        update_close_button.addEventListener("click", () => {
          update_film_modal_container.classList.remove('show')
        });
        update_film_submit.addEventListener("click", () => {
          if (checkFileImage() == false) {
            let updateFilm = {
              name: document.getElementById('update-film-name').value,
              time: document.getElementById('update-film-time').value,
              date: document.getElementById('update-film-date').value,
              Actors: document.getElementById('update-film-actor').value,
              Director: document.getElementById('update-film-director').value,
              Content: document.getElementById('update-film-content').value,
              image: element.image
            }

            fetch(`https://foregoing-messy-freckle.glitch.me/comingSoon/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateFilm),
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
                update_film_modal_container.classList.remove("show");
                window.location.reload();
              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });
          }// nut if
          else {
            console.log(checkFileImage());
            console.log(checkFileVideo());
            let nameImage = checkFileImage();
            let updateFilm = {
              name: document.getElementById('update-film-name').value,
              time: document.getElementById('update-film-time').value,
              date: document.getElementById('update-film-date').value,
              Actors: document.getElementById('update-film-actor').value,
              Director: document.getElementById('update-film-director').value,
              Content: document.getElementById('update-film-content').value,
              image: `/src/assets/imagecoming/${nameImage}`
            }

            fetch(`https://foregoing-messy-freckle.glitch.me/comingSoon/${element.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateFilm),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Cập nhật phim thất bại.");
                }
                return response.json();
              })
              .then((data) => {
                // Xử lý phản hồi từ API sau khi cập nhật thành công
                console.log("Thông tin người dùng đã được cập nhật:", data);

                // Đóng modal sau khi cập nhật thành công
                update_film_modal_container.classList.remove("show");
                window.location.reload();
              })
              .catch((error) => {
                console.error("Lỗi khi cập nhật người dùng:", error);
              });

          }

        })

      })
    }
    //delete film
    for (const index of data) {
      const element = index;
      const filmId = element.id;
      
      document.getElementById("delete-film-coming-" + filmId).addEventListener("click", () => {
        const modal = document.querySelector('.modaldeletefilm');
        const confirmButton = document.getElementById('confirm-film-button');
        const cancelButton = document.getElementById('cancel-film-button');
        modal.classList.add('show-modal-dl-film');
        // Bắt sự kiện khi nút "Xác nhận" được nhấn
        confirmButton.addEventListener('click', () => {
          // Thực hiện các hành động khi nút "Xác nhận" được nhấn
          fetch(`https://foregoing-messy-freckle.glitch.me/comingSoon/${filmId}`, {
            method: "DELETE", // Use the DELETE method to delete the film
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Xóa phim thất bại.");
              }
              return response.json();
            })
            .then((data) => {
              // Xử lý phản hồi từ API sau khi xóa thành công
              console.log("Phim đã được xóa:", data);

              // Đóng modal sau khi xóa thành công
              closeModal();
              // Cập nhật giao diện hoặc làm bất kỳ điều gì bạn muốn sau khi xóa thành công
            })
            .catch((error) => {
              console.error("Lỗi khi xóa phim:", error);
            });
        });
        cancelButton.addEventListener("click", () => {
          modal.classList.remove('show-modal-dl-film');
        })
        function closeModal() {
          modal.classList.remove('show-modal-dl-film');
          window.location.reload();
        }
      })
    }
  })

// create film coming soon
const showmodal = document.getElementById('create-listfilm-coming');
showmodal.addEventListener('click', () => {
  create_film_modal_container.classList.add('show');
  create_film_submit.addEventListener('click', () => {
    createFilmComing();
    create_film_modal_container.classList.remove('show');
  })
})

function createFilmComing() {
  let name = document.getElementById("create-film-name").value;
  let time = document.getElementById("create-film-time").value;
  let date = document.getElementById("create-film-date").value;
  let actor = document.getElementById("create-film-actor").value;
  let director = document.getElementById("create-film-director").value;
  let imageInput = document.getElementById("create-film-image");
  let content = document.getElementById("create-film-content").value;
  let trailerInput = document.getElementById("create-film-trailer");
  let id = RandomHexString(4) + "-" + RandomHexString(4);

  if (
    name !== "" &&
    time !== "" &&
    date !== "" &&
    actor !== "" &&
    director !== "" &&
    content !== ""
  ) {
    // Get the file names from the file inputs
    let imageFileName = imageInput.value.split('\\').pop(); // Extracts the file name from the full path
    let trailerFileName = trailerInput.value.split('\\').pop(); // Extracts the file name from the full path

    let listFilm = {
      id,
      name,
      time,
      date,
      Actors: actor,
      Director: director,
      image: `/src/assets/image/${imageFileName}`, // Store only the file name or relative path
      Content: content,
      video: `/src/assets/trailer/${trailerFileName}`, // Store only the file name or relative path
    };

    fetch("https://foregoing-messy-freckle.glitch.me/comingSoon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listFilm),
    })
      .then((data) => {
        console.log("Data sent successfully:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}

// show list booking

fetch('https://foregoing-messy-freckle.glitch.me/listbooking')
  .then(res => res.json())
  .then(data => {
    let html = ''; // Khởi tạo chuỗi HTML bên ngoài vòng lặp

    for (const item of data) {
      const bookingId = item.id;

      // Sử dụng biến `item` để lấy thông tin từ mảng `data`
      html += `
    <tr>
        <td>${item.idBooking}</td>
        <td>${item.nameUser}</td>
        <td>${item.phoneNumber}</td>
        <td>${item.dateBooking}</td>
        <td>${item.filmName}</td>
        <td>${item.dateWatch}</td>
        <td>${item.time}</td>
        <td>${item.char}</td>
        <td>${item.money}</td>
    </tr>
  `;
    }
    document.getElementById('tbody4').innerHTML = html;
  })
