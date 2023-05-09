import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Coffee from '../assets/img/products/coffee.jpg'
import BestSeller from '../assets/img/products/best-seller-coffee.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

const Products = () => {
    return (
        <div className='products py-5 d-flex align-items-center' id='products'>
            <Container>
                <div className="product-title">
                    <h1 className='heading text-center text-white mt-5'>Product</h1>
                    <p className='text-center text-white mb-5'>Let's pick your coffee</p>
                </div>
                {/* Product */}
                <Row className='row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3'>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Americano</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Americano</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Americano</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Americano</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Americano</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Macchiato</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Cappuccino</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="">
                        <div className="products-container">
                            <div className="box">
                                <img src={Coffee} alt="" className="w-100" />
                                <h3>Vanilla Latte</h3>
                                <div className="content">
                                    <span>Rp 30.000</span>
                                    <Button variant="outline-warning">Add to chart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Product */}

                {/* Best Seller */}
                <Row>
                    <div className="product-bestseller">
                        <h1 className='heading text-center text-white mt-5'>BEST SELLER!!!</h1>
                        <p className='text-center text-white'>Let's pick your coffee</p>
                    </div>
                    <Col className="">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            navigation={true}
                            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Col className="">
                                    <div className="bestSeller-container m-2">
                                        <div className="box">
                                            <img src={BestSeller} alt="" className="w-100" />
                                            <h3>Americano</h3>
                                            <div className="content">
                                                <span>Rp 30.000</span>
                                                <Button variant="outline-warning">Add to chart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col className="">
                                    <div className="bestSeller-container m-2">
                                        <div className="box">
                                            <img src={BestSeller} alt="" className="w-100" />
                                            <h3>Americano</h3>
                                            <div className="content">
                                                <span>Rp 30.000</span>
                                                <Button variant="outline-warning">Add to chart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col className="">
                                    <div className="bestSeller-container m-2">
                                        <div className="box">
                                            <img src={BestSeller} alt="" className="w-100" />
                                            <h3>Americano</h3>
                                            <div className="content">
                                                <span>Rp 30.000</span>
                                                <Button variant="outline-warning">Add to chart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col className="">
                                    <div className="bestSeller-container m-2">
                                        <div className="box">
                                            <img src={BestSeller} alt="" className="w-100" />
                                            <h3>Americano</h3>
                                            <div className="content">
                                                <span>Rp 30.000</span>
                                                <Button variant="outline-warning">Add to chart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col className="">
                                    <div className="bestSeller-container m-2">
                                        <div className="box">
                                            <img src={BestSeller} alt="" className="w-100" />
                                            <h3>Americano</h3>
                                            <div className="content">
                                                <span>Rp 30.000</span>
                                                <Button variant="outline-warning">Add to chart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </SwiperSlide>
                        </Swiper>
                    </Col>

                </Row>
                {/* Best Seller */}
            </Container >
        </div >
    )
}

export default Products