
const form  = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1]; //Silme işlemi için ikinci card bodymizi aldık.
const clear = document.getElementById("clear-films");

//Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){//sayfa yüklendiğinde eventi

        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);


}

function addFilm(e){
  
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    let control = true;

    if(title === "" || director === "" || url === ""){
        //Hata

        UI.displayMessages("Tüm Alanları Doldurun","danger");

    }
    else {


        let titles = Storage.getFilmsFromStorage();

        titles.forEach(function(t){

            if(t.title === title){

                UI.displayMessages("aynı girme","danger");
                control = false;
            }
        })


        if(control){

                  //Yeni film
                  const newFilm = new Film(title,director,url);

                  UI.addFilmToUI(newFilm); //Arayüze Film Ekleme.
                  Storage.addFilmToStorage(newFilm);
                  UI.displayMessages("Film başarıyla Eklendi.","success");
        }
      
    }

    UI.clearInput(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){

        if(e.target.id === "delete-film"){ //silme yerine basıldığının kontrolü yapılıyor.

            UI.deleteFilmFromUI(e.target);
            Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
            UI.displayMessages("Silme işlemi başarılı","success");
            
        }
}

function clearAllFilms(){

    if(confirm("Tüm Filmleri Silmek İstediğizden Emin Misiniz ? ")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("Silme işlemi başarılı","success");
    }
}