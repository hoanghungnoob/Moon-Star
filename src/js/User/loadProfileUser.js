const usersAPI = "https://foregoing-messy-freckle.glitch.me/user";

async function getUser(id) {

    try {
      const response = await fetch(usersAPI + "?id=" +id, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
async function loadUserProfile() {
    try {
    const user_token = JSON.parse(localStorage.getItem("user_token_id"));
      // check dang nhap thanh cong hay chua
    if(!user_token){
      return;
    }
    //dang nhap thanh cong check vai tro
        const user = await getUser(user_token);
   //show info user
    if(user[0].name){
        if(user[0].lastname){
            document.querySelector(".media .media-body .user-name").innerHTML = user[0].lastname + " " + user[0].name;

        }
        document.querySelector(".field input#first_name").value = user[0].name;

    }
    if(user[0].lastname){
        document.querySelector(".field input#last_name").value = user[0].lastname;

    }
    if(user[0].pnumber){
        document.querySelector(".media .media-body .user-phone").innerHTML = user[0].pnumber;
        document.querySelector(".field input#phone").value = user[0].pnumber;

    }
    if(user[0].email){
        document.querySelector(".field input#email").value = user[0].email;

    }
    if(user[0].gender){
        document.querySelector(".field input#gender").value = user[0].gender;
        
    }
    if(user[0].password){
        document.querySelector(".field input#password").value = user[0].password;
        
    }    
    // Fetch data from the API

    } catch (err) {
      alert(err.message);
    }
  }

  loadUserProfile();
