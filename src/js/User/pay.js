const payButton = document.getElementById("buttonPay");
payButton.addEventListener("click", () => {
  let modalMomo = document.getElementById("payModalMomo");

  let modalPay = document.getElementById("payModal");
  modalPay.style.display="none";
  modalMomo.style.display="block";
});




