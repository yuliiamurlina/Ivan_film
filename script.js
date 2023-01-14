const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm1 = prompt("Один из последних просмотренных вами фильмов?"),
  lastFilmRating1 = prompt("Как вы его оцените? (от 1 до 10)"),
  lastFilm2 = prompt("Один из последних просмотренных вами фильмов?"),
  lastFilmRating2 = prompt("Как вы его оцените? (от 1 до 10");

personalMovieDB.movies[lastFilm1] = lastFilmRating1;
personalMovieDB.movies[lastFilm2] = lastFilmRating2;

console.log(personalMovieDB.movies);

console.log(personalMovieDB);
