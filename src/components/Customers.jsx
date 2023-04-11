import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import Cs1 from '../assets/img/customers/cs-1.jpg'
import Cs2 from '../assets/img/customers/cs-2.jpg'
import Cs3 from '../assets/img/customers/cs-3.jpg'

const Customers = () => {
    return (
        <div className='customers py-5 text-white' id='customers'>
            <Container>
                <div className='mb-5'>
                    <h1 className='heading text-center mt-5'>Our Customers</h1>
                </div>
                <Row className='row-cols-lg-3 row-cols-md-3 row-cols-1 g-3 m-3'>
                    <Col>
                        <div className="customers-container m-2">
                            <div className="box">
                                <img src={Cs1} alt="" />
                                <h3>John Doe</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, vero.</p>
                                <div className='stars'>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="customers-container m-2">
                            <div className="box">
                                <img src={Cs2} alt="" />
                                <h3>John Doe</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, vero.</p>
                                <div className='stars'>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="customers-container m-2">
                            <div className="box">
                                <img src={Cs3} alt="" />
                                <h3>John Doe</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, vero.</p>
                                <div className='stars'>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                    <i className='bx bxs-star' ></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Customers