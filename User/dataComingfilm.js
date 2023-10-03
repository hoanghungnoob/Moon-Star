// Tạo một hàm để lấy dữ liệu từ tệp JSON
function getComingFilm(callback) {
    fetch('../database/data.json') // Đường dẫn đến tệp JSON
      .then(response => response.json())
      .then(data => {
        // Lấy mảng "comingSon" từ dữ liệu JSON
        const comingSoon = data.comingSoon;
  
        // Gọi hàm callback và truyền giá trị "comingSon" vào nó
        callback(comingSoon);
  
        // Gọi hàm comingProduct để hiển thị danh sách phim
        comingProduct(comingSoon);
      })
      .catch(error => {
        console.error('Lỗi khi đọc tệp JSON:', error);
      });
  }
  
  // Hàm để hiển thị danh sách phim lên màn hình
  function comingProduct(comingSoon) {
    const itemContainer = document.getElementById("item");
  
    comingSoon.forEach(item => {
      const filmCard = document.createElement("div");
      filmCard.classList.add("film-card");
  
      const image = document.createElement("img");
      image.src = item.image;
      image.classList.add("film-image");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const title = document.createElement("h5");
      title.textContent = item.name;
  
      const details = document.createElement("p");
      details.textContent = `${item.time} | ${item.date}`;
  
      const buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("buttons-container");
  
    //   const detailButton = document.createElement("input");
    //   detailButton.type = "button";
    //   detailButton.value = "Detail";
    //   detailButton.addEventListener("click", function() {
    //     // Xử lý sự kiện khi nhấn nút "Detail"
    //     // Đặt logic xử lý ở đây
    //   });
  
    //   const bookingButton = document.createElement("input");
    //   bookingButton.type = "button";
    //   bookingButton.value = "Booking Now";
  
    //   buttonsContainer.appendChild(detailButton);
    //   buttonsContainer.appendChild(bookingButton);
  
      cardBody.appendChild(title);
      cardBody.appendChild(details);
      cardBody.appendChild(buttonsContainer);
  
      filmCard.appendChild(image);
      filmCard.appendChild(cardBody);
  
      itemContainer.appendChild(filmCard);
    });
  }
  
  getComingFilm(comingProduct);
  
  