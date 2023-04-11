import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import imgAbout from '../assets/img/about/about.jpg'

const About = () => {
    return (
        <div className='about py-5 text-white' id='about'>
            <Container>
                <Row className='row-cols-lg-2 row-cols-md-1 row-cols-1 mt-5'>
                    <Col>
                        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="200"
                            data-aos-duration="1000">
                            <img src={imgAbout} alt="" className='text-center' />
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="200"
                            data-aos-duration="1000">
                            <h1 className='mb-5 mt-5'>About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam reprehenderit voluptatibus explicabo, tempora numquam nam maxime ea nostrum itaque.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, facere?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut, reprehenderit ipsum impedit quas saepe.</p>
                            <Button className='fs-4' variant='outline-warning'>Learn More</Button>
                        </div>
                    </Col>
                </Row >
            </Container>
        </div >
    )
}

export default About