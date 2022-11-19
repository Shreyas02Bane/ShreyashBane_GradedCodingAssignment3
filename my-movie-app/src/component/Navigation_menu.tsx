import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation_menu = (props: any) => {


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><NavLink id="navLink" to="/" >Movies App</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="nav" variant="tabs">
              <><Nav.Link ><NavLink id="navLink" to="/Coming_Soon" >Coming soon</NavLink></Nav.Link></>
              <><Nav.Link ><NavLink id="navLink" to="/Movies_in_theater">Movies in Theaters</NavLink></Nav.Link></>
              <><Nav.Link ><NavLink id="navLink" to="/Top_rated_india">Top Rated Indian Movies</NavLink></Nav.Link></>
              <><Nav.Link ><NavLink id="navLink" to="/Top_rated_movies">Top Rated Movies</NavLink></Nav.Link></>
              <><Nav.Link ><NavLink id="navLink" to="/Favourite">Favourite</NavLink></Nav.Link></>
            </Nav>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
            <Form className="d-flex">

              <Form.Control
                type="search"
                name="serach"
                aria-label="Search"
                value={props.searchValue}
                onChange={(event) => props.setSearchValue(event.target.value)}

                placeholder='Search Movies...' />

              <Button variant="outline-success"><FontAwesomeIcon
                icon={faSearch}
                aria-hidden="true"
              /></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

    </>
  );
}

export default Navigation_menu;
