export class view {
    constructor({addAllDataFilm}) {
        this.validationMessage = document.querySelector('.validationMessage'); 

        // поле, данные инпута
        this.newMovieInputNode = document.querySelector('.js-new-movie-input');
        // конпка добавления
        this.addBtn = document.querySelector('.js-addBtn');
        // лист список данных(фильмы)
        this.listFilmsNode = document.querySelector('.js-list-films');


        // обработчик для добавления фильма
        this.addBtn.addEventListener('click', addAllDataFilm);
// обработчик для удаления фильма
        this.listFilmsNode.addEventListener('click', deleteFilm);
// обработчик для отметки, зачеркивания фильма
        this.listFilmsNode.addEventListener('click', markFilm);
// обработчик для проверки валидации на длин.названия фильма
        this.newMovieInputNode.addEventListener('input', validation);
    }
}


// выводим в список нов.фильм и добавляем элементы в HTML, так же прописываем проверки
function renderFilms () {
    const films = getFilms();
    
    let filmsHTML = '';

    films.forEach(film => {
        const isCheckedClass = film.checked ? "movie__list_btn_clicked" : "";
        const isMarkedClass = film.checked ? "movie__list_name_mark" : "";

        filmsHTML += `<li id=${film.id}>
        <button type="button" class="movie__list_btn ${isCheckedClass}" data-action="clicked"></button>
        <span class="movie__list_name ${isMarkedClass}">${film.title}</span>
        <button type="button" class="movie__btn_delete" data-action="delete"></button>
      </li>
        `;
    });
    listFilmsNode.innerHTML = filmsHTML;
}



// функция Валидации на проверку длин.названия фильма
function validation() {
    const filmLen = newMovieInputNode.value.length;

    if (filmLen > FILM_VALIDATION_LIMIT) {
        validationMessage.innerText =  
        `Название фильма больше ${FILM_VALIDATION_LIMIT} символов`
        validationMessage.classList.remove('validationMessage_hidden');
        addBtn.setAttribute('disabled', true);
        addBtn.style.opacity = "0.5";
    } 
    else {
        validationMessage.classList.add("validationMessage_hidden");
        addBtn.removeAttribute("disabled");
        addBtn.style.opacity = "1";
}
}