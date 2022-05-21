"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// document.write("-Сколько фильмов вы уже посмотрели? <br>");
// document.write(`-Я посмотрела ${numberOfFilms} фильмов`)

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
