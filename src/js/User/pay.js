const payButton = document.getElementById("buttonPay");
payButton.addEventListener("click", () => {
  fetch("https://mor-start.onrender.com/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Chuyển đổi dữ liệu JSON
    })
    .then((data) => {
      window.open(data.payUrl);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});




