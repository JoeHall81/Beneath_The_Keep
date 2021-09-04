import React, { Component } from 'react';
import '../custom_css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="fixed-bottom footerStyle">
                <p>Fifth Edition Fantansy #14: Beneath The Keep copyright 2018 Goodman Games, all rights reserved.</p>
                <p>Visit www.goodman-games.com or contact info@goodman-games.com</p>
            </footer>
        );
    }
}

export default Footer;