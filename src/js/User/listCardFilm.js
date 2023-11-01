// Tạo một hàm để lấy dữ liệu từ tệp JSON
function getFilm(callback) {
    let url = window.location.href;
    var paramsString = url.split("?")[1];
    var id = paramsString.split("=")[1];
    console.log(id);
    fetch("https://mor-start.onrender.com/listfilm" + "?id=" +id ) // Đường dẫn đến tệp JSON
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
      const filmCard = document.createElement("div");
      filmCard.classList.add("film-card");
      filmCard.classList.add("col-12");
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
      cardBody.appendChild(title);
      cardBody.appendChild(details);
      cardBody.appendChild(buttonsContainer);
      filmCard.appendChild(image);
      filmCard.appendChild(cardBody);
      itemContainer.appendChild(filmCard);
      const detail = document.getElementById('item');
      detail.addEventListener('click',()=>{
        window.location.href = "detail.html" + `?idx=${film[0].id}`;
      })
  }
  
  // Gọi hàm getListFilm và truyền hàm showFilm làm callback
  getFilm(showFilm);