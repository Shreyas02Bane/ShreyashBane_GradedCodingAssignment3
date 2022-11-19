import { Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import top_rated_india from '../model/top_rated_india';
import movies_coming from '../model/movies_coming';
import { NavLink } from 'react-router-dom';


const Favourite = (props: any) => {
    console.log({ props });

    if (props.fav_movies.length == 0 && props.fav_movies_coming.length == 0) {
        return (
            <div id="fav_no_data" >No Data Found </div>
        );
    } else {

        return (

            <div>
                <h2 id="h2">Fav Movies</h2>
                <hr id="hr" />

                <Row xs={2} lg={6}>
                    {props.fav_movies.filter((fav_movie: { product: { title: string; }; }, idx: any) => fav_movie.product.title.toLowerCase().includes(props.searchValue)).map((fav_movies_1: { product: top_rated_india; }) => (
                        <Col key={fav_movies_1.product.title} className="my-2 d-flex align-items-stretch ">
                            <Card style={{ width: '18rem' }} >

                                <NavLink id="navLink" to={'/Favourite/' + `${fav_movies_1.product.title}`} >
                                    <Card.Img variant="top" src={fav_movies_1.product.posterurl} />
                                </NavLink>
                                <Card.Body >
                                    <Card.Title>{fav_movies_1.product.title}</Card.Title>
                                    <Button variant="primary" onClick={() => props.decreaseQty(fav_movies_1.product)}>Remove from Favourite <FontAwesomeIcon icon={faHeart} /></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {props.fav_movies_coming.filter((fav_movie_coming: { product: { title: string; }; }, idx: any) => fav_movie_coming.product.title.toLowerCase().includes(props.searchValue)).map((fav_movies: { product: movies_coming; }) => (

                        <Col key={fav_movies.product.title} className="my-2 d-flex align-items-stretch ">
                            <Card style={{ width: '18rem' }} >

                                <NavLink id="navLink" to={'/Favourite/' + `${fav_movies.product.title}`} >
                                    <Card.Img variant="top" src={fav_movies.product.posterurl} />
                                </NavLink>
                                <Card.Body >
                                    <Card.Title>{fav_movies.product.title}</Card.Title>
                                    <Button variant="primary" onClick={() => props.decreaseQty_movies_coming(fav_movies.product)}>Remove from Favourite <FontAwesomeIcon icon={faHeart} /></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        )
    }
};

export {
    Favourite,

};