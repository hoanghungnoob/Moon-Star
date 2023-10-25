let bookingButton = document.getElementById("booking");

let modal = document.getElementById("select_seat_modal");

bookingButton.addEventListener("click", () => {
    modal.style.display = "block"; 
});

document.getElementById("booking").addEventListener("click", (e) => {
    if (e.target === this){
        
        let modal = document.getElementById("select_seat_modal");
        modal.style.display="none";
    }
});



function changeSeatColor(seatId) {
    let seat = document.getElementById(seatId);
    let label = seat.nextElementSibling;
    let cost = 0;

    if (seat.checked) {
        label.style.backgroundColor = "#ff0000"; // Màu ghế đã chọn

    } else {
        label.style.backgroundColor = "#ccc"; // Màu ghế mặc định
    }

    let check = document.getElementsByName('chair'); // Đổi 'checkbox' thành 'chair'
    let length = check.length;
    let selectedSeats = [];

    for (let i = 0; i < length; i++) {
        if (check[i].checked) {
            selectedSeats.push(check[i].nextElementSibling.textContent);
        }
    }

    cost = selectedSeats.length * 90000; // Tính giá vé dựa trên số ghế đã chọn
    localStorage.setItem("cost", cost);
    document.getElementById("result").innerHTML = "Bạn đã mua vé với số tiền là: " + cost + " VND";
    document.getElementById("selected-seats").textContent = "Ghế đã chọn: " + selectedSeats.join(", ");
}

const backButton = document.getElementById("back-button");

backButton.addEventListener("click", () => {   
    closeModal(); 
});

function closeModal() { 
    const modal = document.getElementById("select_seat_modal");
    modal.style.display = "none";
}