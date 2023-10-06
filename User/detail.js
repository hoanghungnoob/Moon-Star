// Lấy các thông tin của bộ phim
fetch("../database/data.json")
    .then(response => response.json())
    .then(data => {
        var currentUrl = window.location.href;

        var filmIdex = currentUrl[currentUrl.length - 1]

        const listfilm = data.listfilm[filmIdex];

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
    fetch("../database/data.json")
        .then(response => response.json())
        .then(data => {
            var currentUrl = window.location.href;
            var filmIndex = currentUrl[currentUrl.length - 1];
            const listfilm = data.listfilm[filmIndex];

            // Hiển thị modal với video trailer
            const videoFrame = document.getElementById("videoFrame");
            videoFrame.src = listfilm.video;
            var main = document.getElementById("main");
            main.style.opacity = "0.3";
            // Mở modal
            document.getElementById("videoModal").style.display = "block";
        })
        .catch(error => {
            console.error('Lỗi khi tải dữ liệu JSON:', error);
        });
}

document.getElementById("closeModalBtn").addEventListener("click", closeModal);

function closeModal() {
    // Đóng modal khi người dùng nhấn nút đóng
    const videoFrame = document.getElementById("videoFrame");
    var main = document.getElementById("main");
    main.style.opacity = "1";
    videoFrame.src = "";
    document.getElementById("videoModal").style.display = "none";
}