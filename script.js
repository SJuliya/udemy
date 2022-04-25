const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastOfSeen = +prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfFilm = +prompt('На сколько оцените его?', ''),
      lastOfSeen2 = +prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfFilm2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastOfSeen] = ratingOfFilm;
personalMovieDB.movies[lastOfSeen2] = ratingOfFilm2;

console.log(personalMovieDB);
