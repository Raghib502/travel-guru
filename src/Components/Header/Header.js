import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';
import logo from '../../Images/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="background">
            {/* <nav className="nav ">
                <ul className="">
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li className="d-flex justify-content-center">
                         <Link to="/home">Home</Link>
                    </li>
                    <li className="d-flex justify-content-center">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="d-flex justify-content-center"> 
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                </ul>
            </nav> */}
            
           <Navbar className="header">
                    <Nav.Link href="#home"><img src={logo} className="logo" alt=""/></Nav.Link>
                <Form inline>
                    <FormControl type="text" placeholder="Search our destination" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Nav className="ml-auto justify-content-end">
                    <Nav.Link href="/home" className="text-light ">News</Nav.Link>
                    <Nav.Link to="/destination" href="" className="text-light">Destination</Nav.Link>
                    <Nav.Link to="/blog" href="" className="text-light">Blog</Nav.Link>
                    <Nav.Link to="/contact" href="" className="text-light">Contact</Nav.Link>
                    <Link to= "/Login"><Button variant="warning">Login </Button></Link>
                </Nav>
            </Navbar>

            

           </div>
        
    );
};

export default Header;