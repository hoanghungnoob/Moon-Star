const btnSearch = document.querySelector(".button-search");
const contentSearch = document.querySelector("#search");
btnSearch.onclick = function(){
    if(contentSearch.value){
        fetch("https://foregoing-messy-freckle.glitch.me/listfilm")
        .then(
            respone => respone.json()
        ).then(listfilm => {
            // console.log(data);
            
            const searchedFilm = listfilm.find(e => {
                return e.name === contentSearch.value;

            });
            if(searchedFilm){
                console.log(searchedFilm);
                window.location.href=`\listCardFilm.html?id=${searchedFilm.id}`
            }else{
                alert("khong tim thay film");
            }
        })
        // const promise = getFilms();
        // promise.then(data => {
            
            
        // })

    }else{
        alert("vui long nhap ten phim");
    }

}