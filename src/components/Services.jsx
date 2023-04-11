import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
    return (
        <div id='services' className='services py-5 d-flex align-items-center text-white'>
            <Container>
                <Row>
                    <Col>
                        <div className='mb-5'>
                            <h1 className='heading text-center mt-5'>Services</h1>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur explicabo quis omnis</p>
                        </div>
                    </Col>
                </Row>
                <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 justify-content-center'>
                    <Col>
                        <div className='icon-services text-center py-5 px-3 m-2'>
                            <i className='bx bx-money bx-tada mb-3' ></i>
                            <h3 className='fw-bold'>Harga Terjangkau</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, voluptate!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='icon-services text-center py-5 px-3 m-2'>
                            <i className='bx bxs-coffee bx-tada mb-3' ></i>
                            <h3 className='fw-bold'>Coffee Terbaik</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, voluptate!</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='icon-services text-center py-5 px-3 m-2'>
                            <i className='bx bx-cart-download bx-fade-right mb-3' ></i>
                            <h3 className='fw-bold'>Pelayanan Cepat</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, voluptate!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services