import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"

const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className='wrapper'>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <Col className=''>
                            <div className='text-white text-center' data-aos="zoom-in" data-aos-offset="300" data-aos-delay="200"
                                data-aos-duration="1000">
                                <h1 className='title'>Start Your Day With a Coffe</h1>
                                <p className='opacity-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sint fuga asperiores! Placeat magni eveniet aut, perferendis a tempora maiores!</p>
                                <Button className='btn-shop' href='#products' variant='outline-light'>Shop Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='arrow'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Hero
