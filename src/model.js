export class Model {
    constructor({addAllDataFilm}) {
        let films = [];

    }
}


loadFilmsFromLocalStorage();

function addAllDataFilm() {
    // проверка значение инпута
    if (newMovieInputNode.value.length === 0) {
        alert("Нужно ввести название фильма")
        return
    }

    const filmFromUser = getFilmFromUser();

    addFilm(filmFromUser);

    renderFilms();

    newMovieInputNode.value = '';
    newMovieInputNode.focus();

    saveDataLocalStorage();
};

// получаем нов.фильм от пользователя с id и названием
function getFilmFromUser () {
    const newFilm = newMovieInputNode.value;
    return {
        id: Date.now(),
        title: newFilm,
    };
}

// добавляем, пушим фильм и его id и статус
function addFilm({title, id}) {
    films.push({
        title,
        id,
        checked:false
    });
}

function getFilms() {
    return films
}



// удаление фильма
function deleteFilm(event) {
    if (event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('li');
        // определяем id фильма
        const idFilm = Number(parentNode.id);
        // находим индекс нужного фильма в массиве films
        const indexFilm = films.findIndex(function(film) {
            if (film.id === idFilm) {
                return true
            }
        });
        // удаляем из массива фильм через splice
        films.splice(indexFilm, 1)

        // удаляем из разметки HTML
        parentNode.remove()
        saveDataLocalStorage()
    }
}

// зачеркивание/метка на фильме и замена цвета чекбокса на нем
function markFilm (event) {
    if (event.target.dataset.action === 'clicked') {
        const parentNode = event.target.closest('li');

        const filmID = Number(parentNode.id);
        const film = films.find((f) => f.id === filmID);

        film.checked = !film.checked; // Инвертируем состояние checked

        renderFilms(); // Перерисовываем список после изменения состояния
        }
        saveDataLocalStorage();
    }
