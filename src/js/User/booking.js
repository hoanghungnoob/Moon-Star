
fetch('https://mor-start.onrender.com/listbooking')
  .then(res => res.json())
  .then(data => {
    let html = '';
    for (const element of data) {
      const localName = localStorage.getItem('user_token_id');
      const concat = `"${element.idUser}"`;
      if (localName == concat) {
        html += `
          <tr id="detailbooking${element.id}">
            <td>${element.nameUser}</td>
            <td>${element.phoneNumber}</td>
            <td>${element.filmName}</td>
            <td>${element.dateBooking}</td>
            <td>${element.dateWatch}</td>
            <td>${element.time}</td>
            <td>${element.char}</td>
            <td>${element.money}</td>
            <td><button class="show-detail-button" data-id="${element.id}"><i class="fa fa-eye" aria-hidden="true"></i></button></td>
          </tr>
        `;
      }
    }
    if (html !== '') {
      document.getElementById('tableshowlistbooking').innerHTML = html;

      // Add a click event listener using event delegation
      document.getElementById('tableshowlistbooking').addEventListener('click', (event) => {
        if (event.target.classList.contains('show-detail-button')) {
          const idBooking = event.target.getAttribute('data-id');
          // dùng để so sánh 
          data.forEach(element => {
            
            if (idBooking==element.idBooking) {
              // xử lí để hiện nut export pdf và nút close sau khi export
                const close = document.getElementById('closeModal');
                const hidebuton = document.getElementById('exportPdfButton');
                close.style.display='block';
                hidebuton.style.display='block';
                // show modal ticket
                document.getElementById('ticketModal').style.display = 'block';
                // đẩy giá trị vào từ element
                document.getElementById('firstname').innerHTML = element.lastname;
                document.getElementById('nameKH').innerHTML = element.nameUser;
                document.getElementById('phoneNumber').innerHTML = element.phoneNumber;
                document.getElementById('datebooking').innerHTML = element.dateBooking;
                document.getElementById('datewatch').innerHTML =element.dateWatch;
                document.getElementById('time').innerHTML = element.time;
                document.getElementById('char').innerHTML = element.char;
                document.getElementById('money').innerHTML = element.money;
            }
          });
        }

      });
    }
  })
  .catch(error => {
    alert(error);
  });

// hàm gọi modal
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('ticketModal').style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
  var modal = document.getElementById('ticketModal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});


// Lấy tham chiếu đến nút "Export file pdf"
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('exportPdfButton').addEventListener('click', function () {
      const container = document.querySelector('.modal-content');
      const close = document.getElementById('closeModal');
      const hidebuton = document.getElementById('exportPdfButton');
      close.style.display='none';
      hidebuton.style.display='none';
      // Cấu hình tùy chọn in ấn
      const pdfOptions = {
          margin: 10, // Cài đặt margin
          filename: 'output.pdf', // Tên tệp PDF đầu ra
          image: { type: 'jpeg', quality: 0.98 }, // Định dạng ảnh và chất lượng
          html2canvas: { scale: 2 }, // Tăng độ phân giải HTML2Canvas
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Định dạng và khổ giấy
      };

      html2pdf().from(container).set(pdfOptions).save();
  });
});



