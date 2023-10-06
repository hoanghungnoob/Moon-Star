const btnSearch = document.querySelector(".button-search");
const contentSearch = document.querySelector("#search");
btnSearch.onclick = function(){
    if(contentSearch.value){
        fetch("../database/data.json")
        .then(
            respone => respone.json()
        ).then(data => {
            // console.log(data);
            const listfilm = data.listfilm
            console.log(listfilm);
            const searchedFilm = listfilm.find(e => {
                return e.name === contentSearch.value;

            });
            if(searchedFilm){
                console.log(searchedFilm);
                // window.location.href=""
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
