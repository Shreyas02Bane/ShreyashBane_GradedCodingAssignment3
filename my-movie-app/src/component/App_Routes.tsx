import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Coming_Soon from './Coming_Soon';
import Movies_in_theater from './Movies_in_theater';
import Top_rated_india from './Top_rated_india';
import Top_rated_movies from './Top_rated_movies';
import { Favourite } from './Favourite';
import No_page_found from './No_page_found';
import Navigation_menu from './Navigation_menu';
import Home_Page from './Home_Page';
import Movie_Description from './Movie_Description';
import { useState } from 'react';
import movies_coming from '../model/movies_coming';
import top_rated_india from '../model/top_rated_india';
import { SnackbarProvider, VariantType, useSnackbar, SnackbarKey } from 'notistack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { get_Top_rated_india, get_top_rated_movies, getComingMovies, get_Movies_in_theater } from '../service/service'
import { movies_Description_ofMoviesComing } from '../service/service'

export function App_Routes() {

  const [searchValue, setSearchValue] = useState('');
  const [linkValue, setLinkValue] = useState('');
  const [fav_movies, setFav_movies] = useState<{ product: top_rated_india, qty: number }[]>([]);
  const [fav_movies_coming, setFav_movies_coming] = useState<{ product: movies_coming, qty: number }[]>([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();



  const increaseQty_movies_coming = (product: movies_coming) => {

    console.log({ product });


    const match = fav_movies_coming.find(
      p => p.product.title === product.title
    );

    if (!match) {
      setFav_movies_coming([
        ...fav_movies_coming,
        {
          product,
          qty: 1
        }
      ]);
      // setShow(true);
      {
        enqueueSnackbar("Movie Added successfully", {
          variant: `success`, action: (snackbarId: SnackbarKey | undefined) => (
            <>
              <FontAwesomeIcon icon={faX} onClick={() => { closeSnackbar(snackbarId) }} style={{ color: 'black' }} />
            </>
          )
        })
      };

    } else {
      const newCart = fav_movies_coming.map(
        p => {
          if (p.product.title !== product.title) {
            return p;
          } else {
            return {
              product: p.product,
              qty: p.qty
            }
          }
        }
      );
      // setShowWarning(true);
      setFav_movies_coming(newCart);

      {
        enqueueSnackbar("Movie alreday exist", {
          variant: `warning`, action: (snackbarId: SnackbarKey | undefined) => (
            <>
              <FontAwesomeIcon icon={faX} onClick={() => { closeSnackbar(snackbarId) }} style={{ color: 'black' }} />
            </>
          )
        })
      };
    }



  };

  const increaseQty = (product: top_rated_india) => {

    const match = fav_movies.find(
      p => p.product.title === product.title
    );

    if (!match) {

      setFav_movies([
        ...fav_movies,
        {
          product,
          qty: 1
        }

      ])

      //setShow(true);

      {
        enqueueSnackbar("Movie Added successfully", {
          variant: `success`, action: (snackbarId: SnackbarKey | undefined) => (
            <>
              <FontAwesomeIcon icon={faX} onClick={() => { closeSnackbar(snackbarId) }} style={{ color: 'black' }} />
            </>
          )
        })
      };



    } else {
      const newCart = fav_movies.map(
        p => {
          if (p.product.title !== product.title) {
            return p;
          } else {
            return {
              product: p.product,
              qty: p.qty
            }
          }
        }
      );

      // setShowWarning(true);

      setFav_movies(newCart);
      {
        enqueueSnackbar("Movie alreday exist", {
          variant: `warning`, action: (snackbarId: SnackbarKey | undefined) => (
            <>
              <FontAwesomeIcon icon={faX} onClick={() => { closeSnackbar(snackbarId) }} style={{ color: 'black' }} />
            </>
          )
        })
      };

    }

  };


  const decreaseQty = (product: top_rated_india) => {
    // neither filter nor map can achieve exactly what we want to in one go. So a normal forEach is chosen.


    const newFav_movies = [] as { product: top_rated_india, qty: number }[];

    fav_movies.forEach(
      p => {
        if (p.product.title !== product.title) {

          newFav_movies.push(p)

        } else {
          if (p.qty !== 1) {

            newFav_movies.push({
              product: p.product,
              qty: p.qty - 1
            })
          }
        }
      }
    );
    // setRemove(true);
    setFav_movies(newFav_movies);
    {
      enqueueSnackbar("Movie Removed successfully", {
        variant: `error`, action: (snackbarId: SnackbarKey | undefined) => (
          <>
            <FontAwesomeIcon icon={faX} onClick={() => { closeSnackbar(snackbarId) }} style={{ color: 'black' }} />
          </>
        )
      })
    };

  };


  const decreaseQty_movies_coming = (product: movies_coming) => {

    const newFav_movies_coming = [] as { product: movies_coming, qty: number }[];

    fav_movies_coming.forEach(
      p => {
        if (p.product.title !== product.title) {
          newFav_movies_coming.push(p);
        } else {
          if (p.qty !== 1) {
            newFav_movies_coming.push({
              product: p.product,
              qty: p.qty - 1
            });
          }
        }
      }
    );

    setFav_movies_coming(newFav_movies_coming);
    {
      enqueueSnackbar("Movie Removed successfully", {
        variant: `error`, action: (snackbarId: SnackbarKey | undefined) => (
          <>
            <FontAwesomeIcon icon={faX} onClick={() => { closeSnackbar(snackbarId) }} style={{ color: 'black' }} />
          </>
        )
      })
    };


  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation_menu
          search={searchValue}
          setSearchValue={setSearchValue} />} >


          <Route index element={<Home_Page
            movies_top_rated_movie={get_top_rated_movies(searchValue)}
            increaseQty_top_rated_movie={increaseQty}
            movies_top_rated_india={get_Top_rated_india(searchValue)}
            increaseQty_top_rated_india={increaseQty}
            movies_movies_in_theater={get_Movies_in_theater(searchValue)}
            increaseQty_movies_in_theater={increaseQty_movies_coming}
            movies_ComingSoon={getComingMovies(searchValue)}
            increaseQty_ComingSoon={increaseQty_movies_coming}
            movies_Description_ofMoviesComing={movies_Description_ofMoviesComing}

          />} />




          <Route path="Coming_soon" element={<Coming_Soon
            movies_ComingSoon={getComingMovies(searchValue)}
            increaseQty_ComingSoon={increaseQty_movies_coming}
            movies_Description_ofMoviesComing={movies_Description_ofMoviesComing}
          />} />


          <Route path="Movies_in_theater" element={<Movies_in_theater
            movies={get_Movies_in_theater(searchValue)}
            increaseQty_movies_in_theater={increaseQty_movies_coming}
          />} />



          <Route path="Top_rated_india" element={<Top_rated_india
            movies={get_Top_rated_india(searchValue)}
            increaseQty={increaseQty}
          />} />



          <Route path="Top_rated_movies" element={<Top_rated_movies
            movies_top_rated_movies={get_top_rated_movies(searchValue)}
            increaseQty={increaseQty}
          />} />




          <Route path="Favourite" element={<Favourite searchValue={searchValue}
            fav_movies={fav_movies}
            fav_movies_coming={fav_movies_coming}
            decreaseQty={decreaseQty}
            decreaseQty_movies_coming={decreaseQty_movies_coming}

          />} />



          <Route path='*' element={<No_page_found />} />
        </Route>
        <Route path="/:moviesTitle" element={
          <Movie_Description
            BackToHomeLink=" "
            movies={getComingMovies(searchValue)}
            moviesTypeTopRatedMovies={get_Top_rated_india(searchValue)}
          />} />
        <Route path="Coming_soon/:Title" element={
          <Movie_Description
            BackToHomeLink="Coming_soon"
            movies={getComingMovies(searchValue)}
            moviesTypeTopRatedMovies={get_Top_rated_india(searchValue)}
          />} />
        <Route path="Top_rated_movies/:Title" element={
          <><Movie_Description
            BackToHomeLink="Top_rated_movies"
            movies={getComingMovies(searchValue)}
            moviesTypeTopRatedMovies={get_Top_rated_india(searchValue)}
          /></>} />
        <Route path="Favourite/:Title" element={
          <><Movie_Description
            BackToHomeLink="Favourite"
            movies={getComingMovies(searchValue)}
            moviesTypeTopRatedMovies={get_Top_rated_india(searchValue)}
          /></>} />
        <Route path="Movies_in_theater/:Title" element={
          <><Movie_Description
            BackToHomeLink="Movies_in_theater "
            movies={get_Movies_in_theater(searchValue)}
            moviesTypeTopRatedMovies={get_Top_rated_india(searchValue)}
          /></>} />
        <Route path="Top_rated_india/:Title" element={
          <><Movie_Description
            BackToHomeLink="Top_rated_india"
            movies={getComingMovies(searchValue)}
            moviesTypeTopRatedMovies={get_Top_rated_india(searchValue)}
          /></>} />
      </Routes>
    </BrowserRouter>

  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={5}
      anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
      autoHideDuration={3000}

    >
      <App_Routes />

    </SnackbarProvider>
  );
}
