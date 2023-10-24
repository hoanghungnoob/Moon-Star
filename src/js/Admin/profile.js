let btnEdits = document.querySelectorAll(".btn-edit");
      let btnSaveChange = document.querySelector("#savechange");
      btnSaveChange.onclick = savechange;
      btnEdits.forEach(element => {
        element.onclick = handleEdit;
      });
      function savechange(){

        const admin_token = JSON.parse(localStorage.getItem("user_token_id"));
      // check dang nhap thanh cong hay chua
        if(!admin_token){
          return;
        }
          console.log(admin_token);
          fetch(usersAPI +"/"+ admin_token, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: admin_token,
                name:  document.querySelector(".field input#first_name").value.trim(),
                lastname: document.querySelector(".field input#last_name").value.trim(),
                email:  document.querySelector(".field input#email").value.trim(),
                password:  document.querySelector(".field input#password").value.trim(),
                pnumber: document.querySelector(".field input#phone").value.trim() ,
                gender: document.querySelector(".field input#gender").value.trim()
                  })
            }).then(response => {
                    if (response.ok) {
                      return response.json(); // Trả về dữ liệu JSON từ phản hồi
                    } else {
                      throw new Error('Gửi yêu cầu không thành công');
                    }
                  })
                  .then(data => {
                    console.log('Dữ liệu đã cập nhật thành công:', data);
                  })
                  .catch(error => {
                    console.error('Lỗi:', error);
                  });
      

        }

      function handleEdit(event) {
        let field = getParent(event.target, ".field");
        let input = field.querySelector("input");
        $(input).prop("disabled", false); 
        input.onblur = function(){

          input.value = input.value;
          $(input).prop("disabled", true);
        }

      } 
      function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

const usersAPI = `http://localhost:3000/admin`;

fetch(`http://localhost:3000/admin`)
.then((response) => response.json())
.then((data) => {
        for (const element of data) {
          const check = localStorage.getItem('admin_token_id');
          const item = `"`+element.id+`"`;
          if (item==check){
            document.getElementById('adminName').innerHTML = element.name;
            document.getElementById('admin-phone').innerHTML = element.pnumber;
            document.getElementById('first_name').value = element.name;
            document.getElementById('last_name').value = element.lastname;
            document.getElementById('email').value = element.email;
            document.getElementById('password').value= element.password;
            document.getElementById('phone').value = element.pnumber;
            document.getElementById('gender').value = element.gender;
            break;
          }
        }
      
})