let numberOfFilms,
    favoriteGenre;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastOfSeen = prompt('Один из последних просмотренных фильмов?', ''),
            ratingOfFilm = prompt('На сколько оцените его?', '');

        if (lastOfSeen !== '' && ratingOfFilm !== ''
            && lastOfSeen != null && ratingOfFilm != null
            && lastOfSeen.length < 50 && ratingOfFilm.length < 50) {
            personalMovieDB.movies[lastOfSeen] = ratingOfFilm;
        } else {
            i--;
        }
    }
}

//rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
        personalMovieDB.genres[i] = favoriteGenre;
    }
}
writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('There are few films seen');
    } else if (10 <= personalMovieDB.count < 30) {
        console.log('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a cinephile');
    } else {
        console.log('Error');
    }
}

//detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();