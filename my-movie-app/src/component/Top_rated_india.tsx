import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card } from "react-bootstrap";
import top_rated_india from '../model/top_rated_india';
import { NavLink } from 'react-router-dom';



type Props = {
    movies: top_rated_india[];
    increaseQty: (top_rated_india: top_rated_india) => void;

};


const Top_rated_india = ({ movies, increaseQty }: Props) => {

    return (


        <div>
            <h2 id="h2">Movies Top rated india</h2>
            <hr id="hr" />
            <Row xs={2} lg={6}>
                {movies.map((top_rated_indias) => (

                    <Col key={top_rated_indias.title} className="my-2 d-flex align-items-stretch ">
                        <Card style={{ width: '18rem' }}>
                            <NavLink id="navLink" to={'/Top_rated_india/' + `${top_rated_indias.title}`} >
                                <Card.Img variant="top" src={top_rated_indias.posterurl} />
                            </NavLink>
                            <Card.Body id="CardBody">
                                <Card.Title>{top_rated_indias.title}</Card.Title>

                                <Button variant="primary" onClick={() => increaseQty(top_rated_indias)}>Add to Favourite <FontAwesomeIcon icon={faHeart} /></Button>

                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>

    );
}

export default Top_rated_india;