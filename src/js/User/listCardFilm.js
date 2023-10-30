// Tạo một hàm để lấy dữ liệu từ tệp JSON
function getFilm(callback) {
    let url = window.location.href;
    var paramsString = url.split("?")[1];
    var id = paramsString.split("=")[1];
    fetch("https://foregoing-messy-freckle.glitch.me/listfilm" + "?id=" +id ) // Đường dẫn đến tệp JSON
      .then((response) => response.json())
      .then((data) => {
        // Lấy mảng "listfilm" từ dữ liệu JSON
        
  
        // Gọi hàm callback và truyền giá trị "listfilm" vào nó
        callback(data);
      })
      .catch((error) => {
        console.error("Lỗi khi đọc tệp JSON:", error);
      });
  }
  // Hàm để hiển thị danh sách phim lên màn hình
  function showFilm(film) {
    const itemContainer = document.getElementById("item");
//   console.log(itemContainer);
//   console.log(film[0]);
      const filmCard = document.createElement("div");
      filmCard.classList.add("film-card");
  
      const image = document.createElement("img");
      image.src = film[0].image;
      image.classList.add("film-image");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const title = document.createElement("h5");
      title.textContent = film[0].name;
  
      const details = document.createElement("p");
      details.textContent = `${film[0].time} | ${film[0].date}`;
  
      const buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("buttons-container");
  
      const detailButton = document.createElement("input");
      detailButton.type = "button";
      detailButton.value = "Detail";
      detailButton.addEventListener("click", function () {
        window.location.href = "detail.html" + `?idx=${film[0].id}`;
      });
  
      const bookingButton = document.createElement("input");
      bookingButton.type = "button";
      bookingButton.value = "Booking Now";
  
      buttonsContainer.appendChild(detailButton);
      buttonsContainer.appendChild(bookingButton);
  
      cardBody.appendChild(title);
      cardBody.appendChild(details);
      cardBody.appendChild(buttonsContainer);
  
      filmCard.appendChild(image);
      filmCard.appendChild(cardBody);
  
      itemContainer.appendChild(filmCard);
  }
  
  // Gọi hàm getListFilm và truyền hàm showFilm làm callback
  getFilm(showFilm);