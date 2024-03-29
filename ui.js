
class UI {


    static addFilmToUI(newFilm){
    
        /*  <tr>
                <td><img src="" class="img-fluid img-thumbnail"></td>
                <td></td>
                <td></td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> -->
        */
       
        const filmList = document.getElementById("films"); //tbody'i seçtik.
    
        filmList.innerHTML += `
        
            <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        
        `;
    }
    
    static clearInput(element1,element2,element3){
    
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    
    static displayMessages(message,type){
    
            const cardBody = document.querySelector(".card-body"); //ilk card-body'imizi alıcağımız için querySelector zaten ilkini alır.
    
            //Alert divini oluşturma.
    
            /*
            <div class="alert alert-danger" role="alert">
                This is a danger alert—check it out!
            </div>
            */
    
            const div = document.createElement("div");
            div.className  =  `alert alert-${type}`;
            div.textContent = message; 
    
            cardBody.appendChild(div);
    
            setTimeout(function(){
                div.remove();
            },1000);
    }
    static loadAllFilms(films){
    
        const filmList = document.getElementById("films");
    
        films.forEach(function(film){
    
            filmList.innerHTML += `
            
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>`;
        });
    }
    
    static deleteFilmFromUI(element){
    
        element.parentElement.parentElement.remove();
    
    }
    
    static clearAllFilmsFromUI(){
    
         const filmList = document.getElementById("films");
    
         //filmList.innerHTML = ""; yavaş.
    
         while(filmList.firstElementChild !== null) { //child olduğu sürece silmeye devam et.
    
            filmList.firstElementChild.remove();
         }
    }
}
