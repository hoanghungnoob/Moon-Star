

function register() {
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;
    let pnumber = document.getElementById('phonenumber').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;  

    // Create an object with the data
    if (fname!="" && lname!="" && pnumber!="" && email!="" && password!="" && password==repassword){
        let userData = {
            name: fname,
            pnumber: pnumber,
            email: email,
            password: password,        
        };
        // Make a POST request to http://localhost:3000/user
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data sent successfully:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    else{
        alert("vui lòng nhập đầy đủ thông tin! và đảm bảo rằng mật khẩu phải giống nhau");
    }
}