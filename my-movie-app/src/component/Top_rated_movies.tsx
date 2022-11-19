import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card } from "react-bootstrap";
import top_rated_movies from '../model/top_rated_movies';
import { NavLink } from 'react-router-dom';

type Props = {
    movies_top_rated_movies: top_rated_movies[];
    increaseQty: (top_rated_movies: top_rated_movies) => void;

};


const Top_rated_movies = ({ movies_top_rated_movies, increaseQty }: Props) => {

    return (

        <div>
            <h2 id="h2">Movies top rated movies</h2>
            <hr id="hr" />
            <div id="movies">
                <Row xs={2} lg={6}>
                    {movies_top_rated_movies.map((top_rated_movies) => (

                        <Col key={top_rated_movies.title} className="my-2 d-flex align-items-stretch ">
                            <Card style={{ width: '18rem' }}>
                                <NavLink id="navLink" to={'/Top_rated_movies/' + `${top_rated_movies.title}`} >
                                    <Card.Img variant="top" src={top_rated_movies.posterurl} />
                                </NavLink>
                                <Card.Body id="CardBody">
                                    <Card.Title>{top_rated_movies.title}</Card.Title>

                                    <Button variant="primary" onClick={() => increaseQty(top_rated_movies)}>Add to Favourite <FontAwesomeIcon icon={faHeart} /></Button>

                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </div>
        </div>

    );
}

export default Top_rated_movies;