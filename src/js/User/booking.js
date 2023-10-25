function hideIcon(){
    const hideProfile =document.getElementById('menu_profile');
    hideProfile.style.display='none';
  }
  function hideLg(){
    const login = document.querySelector('.login');
    login.style.display ='none';
  }
  function ktUser(){
    if (localStorage.getItem('user_token_id')==null){
      hideIcon();
    }
    else{
      hideLg();
    }
  }
  ktUser();