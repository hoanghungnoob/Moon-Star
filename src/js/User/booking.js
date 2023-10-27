fetch('https://foregoing-messy-freckle.glitch.me/listbooking')
  .then(res => res.json())
  .then(data => {
    let html = ``;
    for (const element of data) {
      const localName = localStorage.getItem('user_token_id');
      const concat = `"` + element.idUser + `"`;
      if (localName == concat) {
        html += `
            <tr id="detailbooking${element.idBooking}">
              <td>${element.nameUser}</td>
              <td>${element.phoneNumber}</td>
              <td>${element.filmName}</td>
              <td>${element.dateBooking}</td>
              <td>${element.dateWatch}</td>
              <td>${element.time}</td>
              <td>${element.char}</td>
              <td>${element.money}</td>
            </tr>
            `;

      }
    }
    if (html != ``) {
      document.getElementById('tableshowlistbooking').innerHTML = html;
    } else {
      html = '<h1>You are not booking any film. Please booking to check it again';
      document.getElementById('returnValue').innerHTML = html;
    }


  })
  .catch(error => {
    console.log('Error :', error);
  });


