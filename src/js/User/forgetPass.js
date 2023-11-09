// const forgotPassword = document.getElementById("forgotpass");
// forgotPassword.addEventListener('click', () => {
//     forgetpassword();
// })
function forgetpassword() {
    var email1 = document.getElementById("Email").value;
    fetch("https://mor-start.onrender.com/user")
    .then(response => response.json())
      .then(data => {
        // Check if the email is empty
        if (email1 === "") {
          alert("Please re-enter");
          return;
        }
        // tìm user trong dl
        var user = data.find(function(x) {
          return x.email === email1;
        });
        if (!user) {
          alert("User not found");
          return;
        }
        // Use a template literal for the message
          var templateParams = {
            from_name: "Moon Star",
            to_name: user.name,
            message: `We are sending you this notification because you forgot your password. Your password is: ${user.password}`
          };
  
          emailjs.send('service_martkpr','template_0icykuq', templateParams)
            .then(function(response) {
              alert("Email has been sent" + response.status);
            })
        //     .catch(function(error) {
        //       alert("Email could not be sent: " + error.message);
        //     });
        // })
        // .catch(function(error) {
        //   alert("Email could not be sent: " + error.message);
        //   console.error("Email could not be sent: " + error.message);
        });
    }