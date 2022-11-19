
import { useParams } from 'react-router-dom';
import movies_coming from '../model/movies_coming';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import data from "../data.json";
import top_rated_movies from '../model/top_rated_india';
import { useNavigate } from 'react-router-dom';


type Props = {
  BackToHomeLink: string;
  movies: movies_coming[];
  moviesTypeTopRatedMovies: top_rated_movies[];

};


const Movie_Description = ({ BackToHomeLink, movies, moviesTypeTopRatedMovies }: Props) => {

  console.log(useParams());
  const navigate = useNavigate();
  const { Title } = useParams();
  console.log(`${Title}`);

  //console.log(data.top_rated_movies.filter(top_rated_movies => top_rated_movies.title.toLowerCase().includes(`${Title}`)));
  console.log(data.movies_coming.find((movies) => { return (movies.title.includes('Hannah')) }));
  //console.log(data.top_rated_movies.map((movies) => {return (movies)} ));
  //console.log( data.top_rated_movies.map((movies)=>{return(movies.title.toLowerCase().includes("Baazigar"))} ) )
  console.log(data.top_rated_movies.map((movies) => { return (movies.title).includes("Baazigar") }))

  return (
    <div >
      <br></br>

      <div id="backToHome" onClick={() => navigate('/' + `${BackToHomeLink}`)}>Back to Home</div>
      <hr id="hrBackToHome" />

      {movies.filter((movies) => movies.title.includes(`${Title}`)).map((movies) => (
        <MDBCard >
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage id = "imgDescription" src={movies.posterurl} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>

              <MDBCardBody>
                <MDBCardTitle>{movies.title}</MDBCardTitle>
                <MDBCardText id="imbd">
                  <a>Imbd Rating</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.imdbRating}</a>
                </MDBCardText>
                <MDBCardText id="Content Rating">
                  <a>Content Rating</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;<a> {movies.contentRating}</a>
                </MDBCardText>
                <MDBCardText id="Average Rating">
                  <a>Average Rating</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;<a>{movies.averageRating}</a>
                </MDBCardText>
                <MDBCardText id="Duration">
                  <a>Duration</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.duration}</a>
                </MDBCardText>
                <MDBCardText id="Genres">
                  <a>Genres</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;<a>{movies.genres}</a>
                </MDBCardText>
                <MDBCardText id="Actors">
                  <a>Actors</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;<a>{movies.actors}</a>
                </MDBCardText>
                <MDBCardText id="Release Date">
                  <a>Release Date</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;<a>{movies.releaseDate}</a>
                </MDBCardText>
                <MDBCardText id="Story Line">
                  <a>Story Line</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.storyline}</a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      ))}
      {moviesTypeTopRatedMovies.filter((moviesTypeTopRatedMovies) => moviesTypeTopRatedMovies.title.includes(`${Title}`)).map((movies) => (
        <MDBCard >
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage id = "imgDescription" src={movies.posterurl} alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>{movies.title}</MDBCardTitle>
                <MDBCardText id="imbd">
                  <a>Imbd Rating</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                  <a>{movies.imdbRating}</a>
                </MDBCardText>
                <MDBCardText id="Content Rating">
                  <a>Content Rating</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;<a> {movies.contentRating}</a>
                </MDBCardText>
                <MDBCardText id="Average Rating">
                  <a>Average Rating</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.averageRating}</a>
                </MDBCardText>
                <MDBCardText id="Duration">
                  <a>Duration</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.duration}</a>
                </MDBCardText>
                <MDBCardText id="Genres">
                  <a>Genres</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.genres}</a>
                </MDBCardText>
                <MDBCardText id="Actors">
                  <a>Actors</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.actors}</a>
                </MDBCardText>
                <MDBCardText id="Release Date">
                  <a>Release Date</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.releaseDate}</a>
                </MDBCardText>
                <MDBCardText id="Story Line">
                  <a>Story Line</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>{movies.storyline}</a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>


      ))}



    </div>

  );


}

export default Movie_Description;