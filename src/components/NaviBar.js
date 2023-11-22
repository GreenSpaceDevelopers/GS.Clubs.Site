import { 
    Navbar, 
    Container,
    Nav
} from "react-bootstrap";
import './NaviBar.css'
import React from "react";
import clubLogo from '../images/club_logo.svg';
import { BsTelegram } from "react-icons/bs";
import vkIcon from '../images/vk_icon.svg';

function NaviBar() {
    return (
        <Container>
            <Navbar collapseOnSelect className='naviBar' expand="lg">
                <Navbar.Brand>
                    <img src={clubLogo} alt="clubLogo" className="clubLogo" />
                </Navbar.Brand>
                <h1>Green Space</h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <div className='hrefContainer'>
                            <div className="vkTgLogo">
                                <a href="https://vk.com/greenspacegg" className='vkHref'><img src={vkIcon} className="vkIcon"/></a>
                                <a href="https://t.me/greenspacegg" className='tgHref'><BsTelegram className="tgIcon"/></a>
                            </div>
                            <a href="https://clck.ru/35dJZU" className='regHref'>Онлайн бронирование</a>
                            <a href="tel:555-555-5555" className="telHref">+7 (921) 310-77-99</a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );                                            
}

export default NaviBar;
