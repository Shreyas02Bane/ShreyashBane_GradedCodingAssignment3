import { FC, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./App.css"
import movies_coming from '../model/movies_coming';
import { NavLink } from 'react-router-dom';





type Props = {

    movies: movies_coming[];
    increaseQty_movies_in_theater: (movies_in_theaters: movies_coming) => void;


};

const Movie_in_theater = ({movies, increaseQty_movies_in_theater }: Props) => {

    console.log({ movies })

    return (
        
            <div>
                <h2 id ="h2">Movies in theater</h2>
                <hr id = "hr"/>

                <Row xs={2} lg={6}>
                    {movies.map((movies_in_theaters) => (

                        <Col key={movies_in_theaters.id} className="my-2 d-flex align-items-stretch ">
                            <Card style={{ width: '18rem' }} >
                            <NavLink id = "navLink" to = {'/Movies_in_theater/'+`${movies_in_theaters.title}`} >
                                <Card.Img variant="top" src={movies_in_theaters.posterurl} />
                            </NavLink>
                                <Card.Body id = "CardBody">
                                    <Card.Title>{movies_in_theaters.title}</Card.Title>
                                    <Button variant="primary" onClick={() => increaseQty_movies_in_theater(movies_in_theaters)}>Add to Favourite <FontAwesomeIcon icon={faHeart} /></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </div>
        

    );
}

export default Movie_in_theater;