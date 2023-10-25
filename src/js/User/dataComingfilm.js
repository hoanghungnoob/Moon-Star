// Tạo một hàm để lấy dữ liệu từ tệp JSON
function getListFilm(callback) {
  fetch("../../../database/data.json") // Đường dẫn đến tệp JSON
    .then((response) => response.json())
    .then((data) => {
      // Lấy mảng "listfilm" từ dữ liệu JSON
      const comingSoon = data.comingSoon;
      console.log(comingSoon);
      // Gọi hàm callback và truyền giá trị "listfilm" vào nó
      callback(comingSoon);
    })
    .catch((error) => {
      console.error("Lỗi khi đọc tệp JSON:", error);
    });
}

// Hàm để hiển thị danh sách phim lên màn hình
function listProduct(comingSoon) {
  const itemContainer = document.getElementById("item");

  comingSoon.forEach((item) => {
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

    cardBody.appendChild(title);
    cardBody.appendChild(details);

    filmCard.appendChild(image);
    filmCard.appendChild(cardBody);

    itemContainer.appendChild(filmCard);
  });
}

// Gọi hàm getListFilm và truyền hàm listProduct làm callback
getListFilm(listProduct);

function hideIcon(){
  const hideProfile =document.getElementById('menu_profile');
  hideProfile.style.display='none';
}
function hideLg(){
  const login = document.querySelector('.login');
  login.style.display ='none';
}
function ktUser(){
  if (localStorage.getItem('user_token_id')==null){
    hideIcon();
  }
  else{
    hideLg();
  }
}
ktUser();