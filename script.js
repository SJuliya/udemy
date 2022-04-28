const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count === '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastOfSeen = prompt('Один из последних просмотренных фильмов?', ''),
                ratingOfFilm = prompt('На сколько оцените его?', '');

            if (lastOfSeen !== '' && ratingOfFilm !== ''
                && lastOfSeen != null && ratingOfFilm != null
                && lastOfSeen.length < 50 && ratingOfFilm.length < 50) {
                this.movies[lastOfSeen] = ratingOfFilm;
            } else {
                i--;
            }
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');

            if (favoriteGenres === '' || favoriteGenres === null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                this.genres[i] = favoriteGenres;
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i +1} - это ${item}`);
        });
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('There are few films seen');
        } else if (10 <= this.count < 30) {
            console.log('You are a classic spectator');
        } else if (this.count >= 30) {
            console.log('You are a cinephile');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },

    toggleVisibleMuDB: function() {
        this.privat = !this.privat;
    }
};