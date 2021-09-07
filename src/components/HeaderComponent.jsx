import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../custom_css/Header.css';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Text className="col-auto">
                    Website by: Joe Hall
                </Navbar.Text>
                <Navbar.Brand className="logo col-auto ml-auto mr-auto" href="#home">
                    Beneath The Keep
                </Navbar.Brand>
                <Navbar.Text className="col-auto">
                    Adventure by: Chris Doyle
                </Navbar.Text>
            </Navbar>
        );
    }
}

export default Header;