
let checkHour = document.getElementsByName("hour");
let selectedHours = [];

for (let i = 0; i < checkHour.length; i++) {
    checkHour[i].addEventListener("change", function (event) {
        if (checkHour[i].checked) {
            const modal = document.getElementById("select_seat_modal");
            modal.style.display = "block";
            selectedHours = [checkHour[i].nextElementSibling.textContent];
            localStorage.setItem("selectedHour", JSON.stringify(selectedHours));
            // Vô hiệu hóa tất cả các radio buttons khác
            for (let j = 0; j < checkHour.length; j++) {
                if (i !== j) {
                    checkHour[j].disabled = true;
                }
            }
        } else {


        }
        const Hours=JSON.parse(localStorage.getItem("selectedHour"));
        document.getElementById('film_date').innerHTML=Hours;
    });
    
}

function changeSeatColor(seatId) {
    let seat = document.getElementById(seatId);
    let label = seat.nextElementSibling;

    if (seat.checked) {
        label.style.backgroundColor = "#ff0000"; // Màu ghế đã chọn
    } else {
        label.style.backgroundColor = "#ccc"; // Màu ghế mặc định
    }
    //lấy dữ liệu của data về bộ film được chọn
    // Tạo danh sách ghế đã chọn dựa trên trạng thái của checkbox
    let check = document.getElementsByName('chair');
    let selectedSeats = [];
    // tạo tên film trong localstoge
    let name = document.getElementById('film_name_pay').textContent;
    // tạo ngày xem trong localstoge
    let dateWatch = document.getElementById('film_datetime').textContent;
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            selectedSeats.push(check[i].nextElementSibling.textContent);
            localStorage.setItem("Seat", JSON.stringify(selectedSeats));
            localStorage.setItem("countSeat", selectedSeats.length);
            localStorage.setItem("nameFilm",JSON.stringify(name));
            localStorage.setItem("dateWatch",JSON.stringify(dateWatch));
        }
    }

    // Cập nhật danh sách ghế đã chọn vào localStorage

    const constSeat = JSON.parse(localStorage.getItem("Seat"));
    const countSeat = JSON.parse(localStorage.getItem("countSeat"));
    document.getElementById("seat").innerHTML = constSeat.join(", ");
    document.getElementById("count_seat").innerHTML = countSeat;
    document.getElementById("choose_Seat").innerHTML = constSeat;


    // Tính giá vé dựa trên số ghế đã chọn
    let cost = selectedSeats.length * 90000;
    localStorage.setItem("cost", JSON.stringify(cost));
    // Hiển thị giá vé và ghế đã chọn
    document.getElementById("result").innerHTML = "Bạn đã mua vé với số tiền là: " + cost + " VND";
    document.getElementById("selected-seats").textContent = "Ghế đã chọn: " + selectedSeats.join(", ");
    const constMoney = JSON.parse(localStorage.getItem("cost"));
    document.getElementById('price').innerHTML = constMoney;
    document.getElementById('total').innerHTML = constMoney;
    document.getElementById('total_price').innerHTML = constMoney;
    document.getElementById('cost').innerHTML = constMoney;
}


const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
    closeModal();

});

function closeModal() {
    const modal = document.getElementById("select_seat_modal");
    modal.style.display = "none";
}

function selectedFilm() {
    fetch('https://mor-start.onrender.com/listfilm')
        .then(res => res.json())
        .then(data => {
            let url = window.location.href;
            var paramsString = url.split("?")[1];
            var filmIdex = paramsString.split("=")[1];
            const listfilm = data.find(film => {
                return film.id == filmIdex
            });
            const letName = listfilm.name;
            document.getElementById('film_name_pay').innerHTML = letName;
            document.getElementById('film_datetime').innerHTML = listfilm.date
        })


}
selectedFilm();


