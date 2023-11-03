document.querySelector(".dropdown-toggle").onclick = () => {
    document.querySelector('.dropdown-menu-right').classList.toggle('show');
}
document.querySelector(".button-search").onclick = () => {
    const button = document.querySelector('.input-container input');
    if (button.classList.contains('d-mx-none')) {
        document.querySelector('.input-container input').classList.remove('d-mx-none');

    } else {
        const contentSearch = document.querySelector("#search");

        if(contentSearch.value){
            getListFilm()
            fetch("https://mor-start.onrender.com/listfilm")
            .then(
                respone => respone.json()
            ).then(listfilm => {                
                const searchedFilm = listfilm.find(e => {
                    return e.name === contentSearch.value;
    
                });
                if(searchedFilm){
                    window.location.href=`\listCardFilm.html?id=${searchedFilm.id}`
                }else{
                    alert("khong tim thay film");
                }
            })
            .catch(error=>{
                alert(error);
            })
        }else{
            alert("vui long nhap ten phim");
        }
        document.querySelector('.input-container input').classList.add('d-mx-none');

    }
}
