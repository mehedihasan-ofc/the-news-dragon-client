import React from 'react';
import Logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container className='py-4'>
            <div className="text-center">
                <img src={Logo} alt="" />
                <p className='text-secondary mt-2'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex border p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar className='mt-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem' }} /></Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ? <Button variant="dark">Log Out</Button> :
                                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;