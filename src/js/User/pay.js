document.getElementById("pay-button").addEventListener("click", () => {
    window.location.href="pay.html";
});

document.getElementById("back-button").addEventListener("click", () => {
    window.location.href="detail.html";
});
let price = JSON.parse(localStorage.getItem("cost"));
console.log(price);
// Gán giá trị vào phần tử HTML với id là "price"
document.getElementById("price").innerText = price;