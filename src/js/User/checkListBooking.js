function checkUser(){
    const check = localStorage.getItem('user_token_id');
    if (check!= null){
        window.location.href = '../../../booking.html'
    }
    else{
        alert("You don't have permission to access this page. Please login to access")
    }
}
const checkUserLogin = document.getElementById('listbooking');
checkUserLogin.addEventListener('click',()=>{
    checkUser();
})