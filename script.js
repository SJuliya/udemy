const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



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

if (personalMovieDB.count < 10) {
    alert('There are few films seen');
} else if (10 <= personalMovieDB.count < 30) {
    alert('You are a classic spectator');
} else if (personalMovieDB.count >= 30) {
    alert('You are a cinephile');
} else {
    alert('Error');
}

