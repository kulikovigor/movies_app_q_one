export class localstorage {
    constructor() {

    }


// загружаем данные из локального хранилища при загрузке страницы и сохраняем их при каждом обновлении списка фильмов.
loadFilmsFromLocalStorage = () => {
    const filmsFromStorage = localStorage.getItem("films");
    if (filmsFromStorage) {
    films = JSON.parse(filmsFromStorage);
    renderFilms();
    }
}

saveDataLocalStorage = () => {
    localStorage.setItem('films', JSON.stringify(films))
}
}