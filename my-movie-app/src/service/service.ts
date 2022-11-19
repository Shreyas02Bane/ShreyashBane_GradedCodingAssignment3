import React from 'react';
import '../component/App.css';
import data from "../data.json";
import movies_coming from '../model/movies_coming';
import { Navigate, useNavigate } from "react-router-dom";
import top_rated_india from '../model/top_rated_india';
  

  
  
  const getComingMovies = (searchValue:string) => {

    return (
      data.movies_coming.filter(
        movies => movies.title.toLowerCase().includes(searchValue)

      )
    );

  };

  const get_Movies_in_theater = (searchValue:string) => {
    return (
      data.movies_in_theaters.filter(
        movies => movies.title.toLowerCase().includes(searchValue)
      )
    );
  };

  const get_Top_rated_india = (searchValue:string) => {
    return (
      data.top_rated_india.filter(
        movies => movies.title.toLowerCase().includes(searchValue)
      )
    );
  }

  const get_top_rated_movies = (searchValue:string) => {
    return (
      data.top_rated_movies.filter(
        movies => movies.title.toLowerCase().includes(searchValue)
      )
    );
  }
 
const movies_Description_ofMoviesComing = (movies : movies_coming) => {
  
  console.log(movies);
  console.log("hi image has clicked");

 }

 const imgClickedHandler = (event: React.MouseEvent<HTMLImageElement>) =>  {
  event.stopPropagation();
  
  const img = event.currentTarget;
  const link = 'http://localhost:3000/Coming_Soon/'+ `${(img.id)}`;
  console.log(
    "Element name: ",
    img.tagName,
    "Width: ",
    img.clientWidth,
    "Height: ",
    img.clientHeight,
    "Element id: ",
    img.id,
  );
  console.log('http://localhost:3000/Coming_Soon/'+ `${(img.id)}`);
   
   return (link);

};

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(
      "Element name: ",
      div.tagName,
      "Width: ",
      div.clientWidth,
      "Height: ",
      div.clientHeight
    );

  
  };



  

  const BackToHome = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }
  };


export {
    getComingMovies,
    get_Movies_in_theater,
    get_top_rated_movies,
    get_Top_rated_india,
    movies_Description_ofMoviesComing,
    imgClickedHandler,
    divClickedHandler,
    
};

