import top_rated_india from '../model/top_rated_india';
import Top_rated_india from './Top_rated_india';
import top_rated_movies from '../model/top_rated_movies';
import Top_rated_movies from './Top_rated_movies';
import Movies_in_theater from './Movies_in_theater';
import movies_coming from '../model/movies_coming';
import Coming_Soon from './Coming_Soon';

type Props = {
  movies_top_rated_india: top_rated_india[];
  movies_top_rated_movie: top_rated_movies[];
  movies_movies_in_theater: movies_coming[];
  movies_ComingSoon: movies_coming[];
  increaseQty_ComingSoon: (movies_coming: movies_coming) => void;
  increaseQty_movies_in_theater: (movies_in_theaters: movies_coming) => void;
  increaseQty_top_rated_movie: (top_rated_movies: top_rated_movies) => void;
  increaseQty_top_rated_india: (top_rated_india: top_rated_india) => void;
  movies_Description_ofMoviesComing: (movies_coming: movies_coming) => void;

};


const Home_Page = ({ movies_movies_in_theater,
  movies_top_rated_india,
  movies_top_rated_movie,
  movies_ComingSoon,
  increaseQty_ComingSoon,
  increaseQty_movies_in_theater,
  increaseQty_top_rated_india,
  increaseQty_top_rated_movie,
  movies_Description_ofMoviesComing }: Props) => {



  return (

    <div>

      <Movies_in_theater
        movies={movies_movies_in_theater}
        increaseQty_movies_in_theater={increaseQty_movies_in_theater}
      />

      <Coming_Soon
        movies_ComingSoon={movies_ComingSoon}
        increaseQty_ComingSoon={increaseQty_ComingSoon}
        movies_Description_ofMoviesComing={movies_Description_ofMoviesComing}
      />

      <Top_rated_india
        movies={movies_top_rated_india}
        increaseQty={increaseQty_top_rated_india}
      />

      <Top_rated_movies
        movies_top_rated_movies={movies_top_rated_movie}
        increaseQty={increaseQty_top_rated_movie}
      />

    </div>
  );
}

export default Home_Page;