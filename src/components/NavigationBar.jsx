import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/img/navbar/coffee-logo-png.png'

const NavigationBar = () => {

    const [color, setColor] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        changeBackground()

        window.addEventListener('scroll', changeBackground)
    })

    return (
        <div>
            <Navbar variant='dark' expand="lg" fixed="top" className={color ? 'color-active' : ''}>
                <Container fluid>
                    <Navbar.Brand href="#home" className='navbar fs-4 text-white'>
                        <img src={logo} alt="" width='40px' />
                        <span>Best</span>Coffee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-link fs-5 ms-auto text-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#customers">Customers</Nav.Link>
                            <Nav.Link href="#"><i className='bx bx-cart-alt'></i></Nav.Link>
                            <Nav.Link href="#"><i className='bx bx-user' ></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar