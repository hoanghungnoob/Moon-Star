// Lấy các thông tin của bộ phim
fetch("https://mor-start.onrender.com/listfilm")
  .then((response) => response.json())
  .then((data) => {
    let url = window.location.href;
    var paramsString = url.split("?")[1];
    var filmIdex = paramsString.split("=")[1];

    const listfilm = data.find(film => {
      return film.id == filmIdex
    });
    const detailContainer = document.getElementById("main");

    const filmDiv = document.createElement("div");
    filmDiv.classList.add("detail");

    const img = document.getElementById("film_img");
    img.src = listfilm.image;

    const title = document.getElementById("film_name");
    title.textContent = listfilm.name;

    const actors = document.getElementById("film_actor");
    actors.innerHTML = listfilm.Actors;

    const director = document.getElementById("film_director");
    director.innerHTML = listfilm.Director;

    const content = document.getElementById("film_content");
    content.innerHTML = listfilm.Content;
    filmDiv.append(img, title, actors, director, content, trailerBtn);
    detailContainer.append(filmDiv);
  });

// LLấy Video tạo trailer xuất ra modal
document.getElementById("trailer").addEventListener("click", openModal);

function openModal() {
  // Lấy thông tin video từ dữ liệu JSON (sử dụng fetch)
  fetch("https://mor-start.onrender.com/listfilm")
    .then((response) => response.json())
    .then((data) => {
      let url = window.location.href;
    var paramsString = url.split("?")[1];
    var filmIdex = paramsString.split("=")[1];

    const listfilm = data.find(film => {
      return film.id == filmIdex
    });

      // Hiển thị modal với video trailer
      const videoFrame = document.getElementById("videoFrame");
      videoFrame.src = listfilm.video;
      let main = document.getElementById("main");
      main.style.opacity = "0.3";
      // Mở modal
      document.getElementById("videoModal").style.display = "block";
    })
    .catch((error) => {
      console.error("Lỗi khi tải dữ liệu JSON:", error);
    });
}

document.getElementById("closeModalBtn").addEventListener("click", closeModal);

function closeModal() {
  // Đóng modal khi người dùng nhấn nút đóng
  const videoFrame = document.getElementById("videoFrame");
  let main = document.getElementById("main");
  main.style.opacity = "1";
  videoFrame.src = "";
  document.getElementById("videoModal").style.display = "none";
}



 let modal= document.getElementById("select_seat_modal");
let modalPay = document.getElementById("payModal");
document.getElementById("pay-button").addEventListener("click", () => {
    modal.style.display="none";
    modalPay.style.display="block"
});






