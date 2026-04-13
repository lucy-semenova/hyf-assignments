import { movies } from "./data.js";
import * as utils from "./script.js";

//short titles
const shortTitlesContainer = document.getElementById("shortTitles");
const shortMovies = utils.getShortMovies(movies);

const shortTitlesList = document.createElement("ol");
shortMovies.forEach(movie => {
  const shortTitleItem = document.createElement("li");
  shortTitleItem.textContent = movie.title;
  shortTitlesList.appendChild(shortTitleItem);
});
shortTitlesContainer.replaceChildren(shortTitlesList);

//long titles
const longTitlesContainer = document.getElementById("longTitles");
const longMovies = utils.getLongMovies(movies);

const longTitlesList = document.createElement("ol");
longMovies.forEach(title => {
  const longTitleItem = document.createElement("li");
  longTitleItem.textContent = title;
  longTitlesList.appendChild(longTitleItem);
});
longTitlesContainer.replaceChildren(longTitlesList);

// 1980s count
const count1980sContainer = document.getElementById("count1980s");
const moviesBetween1980And1989 = utils.getMoviesBetween1980And1989(movies);

const count1980sParagraph = document.createElement("p");
count1980sParagraph.textContent = `Number of movies from 1980-1989: ${moviesBetween1980And1989.length}`;
count1980sContainer.replaceChildren(count1980sParagraph);
   
// tagged movies
const taggedMoviesContainer = document.getElementById("taggedMovies");
const taggedMovies = utils.getTaggedMovies(movies);

const taggedMoviesList = document.createElement("ol");
taggedMovies.forEach(movie => {
  const taggedMovieItem = document.createElement("li");
  taggedMovieItem.textContent = `${movie.title} - ${movie.tag}`;
  taggedMoviesList.appendChild(taggedMovieItem);
});
taggedMoviesContainer.replaceChildren(taggedMoviesList);

// ratings above 6
const ratingsAbove6Container = document.getElementById("ratingsAbove6");
const moviesWithRatingsOver6 = utils.getMoviesRatingAbove6(movies);

const ratingsAbove6List = document.createElement("ol");
moviesWithRatingsOver6.forEach(movie => {
  const ratingsAbove6Item = document.createElement("li");
  ratingsAbove6Item.textContent = `${movie.title} - ${movie.rating}`;
  ratingsAbove6List.appendChild(ratingsAbove6Item);
});
ratingsAbove6Container.replaceChildren(ratingsAbove6List);

//keyword count
const keywordCountContainer = document.getElementById("keywordCount");
const moviesWithKeywords = utils.getMoviesWithKeywords(movies);

const keywordCountParagraph = document.createElement("p");
keywordCountParagraph.textContent = `Total keyword matches: ${moviesWithKeywords}`;
keywordCountContainer.replaceChildren(keywordCountParagraph);

//duplicated movies
const duplicatedWordTitlesContainer = document.getElementById("duplicatedWordTitles");
const duplicatedMovies = utils.getDuplicatedMovies(movies);

const duplicatedMoviesList = document.createElement("ol");
duplicatedMovies.forEach(title => {
  const duplicatedMovieItem = document.createElement("li");
  duplicatedMovieItem.textContent = title;
  duplicatedMoviesList.appendChild(duplicatedMovieItem);
});
duplicatedWordTitlesContainer.replaceChildren(duplicatedMoviesList);

// average rating
const averageRatingContainer = document.getElementById("averageRating");
const averageRating = utils.getAverageRating(movies);

const averageRatingParagraph = document.createElement("p");
averageRatingParagraph.textContent = `Average Rating: ${averageRating}`;
averageRatingContainer.replaceChildren(averageRatingParagraph);

// Count the total number of Good, Average and Bad movies

const countTaggedMoviesContainer = document.getElementById("countTaggedMovies");
const countTaggedMovies = utils.getTagCounts(movies);

const goodMoviesParagraph = document.createElement("p");
goodMoviesParagraph.textContent = `Number of good movies: ${countTaggedMovies.goodMovies}`;

const averageMoviesParagraph = document.createElement("p");
averageMoviesParagraph.textContent = `Number of average movies: ${countTaggedMovies.averageMovies}`;

const badMoviesParagraph = document.createElement("p");
badMoviesParagraph.textContent = `Number of bad movies: ${countTaggedMovies.badMovies}`;

countTaggedMoviesContainer.replaceChildren(
  goodMoviesParagraph,
  averageMoviesParagraph,
  badMoviesParagraph
);