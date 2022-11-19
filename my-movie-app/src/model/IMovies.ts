import movies_coming from "./movies_coming";
import movies_in_theaters from "./movies_in_theaters";
import top_rated_india from "./top_rated_india";
import top_rated_movies from "./top_rated_movies";

export default interface IMovies {
    movies_coming: movies_coming ,
    movies_in_theaters: movies_in_theaters,
    top_rated_india: top_rated_india,
    top_rated_movies: top_rated_movies
}