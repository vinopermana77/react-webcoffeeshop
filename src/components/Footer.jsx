import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
    return (
        <div className='footer pt-5 text-white'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3 className='fw-bold text-white'>Coffee Shop</h3>
                            <p className='d-flex align-items-center'><i className='bx bxs-edit-location' ></i>Tangerang, Indonesia</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='icons text-end'>
                            <a href="#" ><i className='text-white fs-1 mx-lg-3 mx-2 bx bxl-instagram'></i></a>
                            <a href="#" ><i className='text-white fs-1 mx-lg-3 mx-2 bx bxl-facebook'></i></a>
                            <a href="#" ><i className='text-white fs-1 mx-lg-3 mx-2 bx bxl-twitter'></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <div className='text-center'>
                            <p>&copy; 2023 | Created by Alvino Permana❤️</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer