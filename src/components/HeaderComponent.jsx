import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../custom_css/Header.css';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Text>Website by: Joe Hall</Navbar.Text>
                    <Navbar.Brand className="logo" href="#home">
                        Beneath The Keep
                    </Navbar.Brand>
                    <Navbar.Text>Adventure by: Chris Doyle</Navbar.Text>
                </Container>
            </Navbar>
        );
    }
}

export default Header;