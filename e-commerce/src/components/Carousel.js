import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './Carousel.css'
function Carousel() {
    return (
        <div className="carousel">
        <ReactBootstrap.Carousel style={{height:"500px"}}>

          {/* thatsit */}
  {/* <ReactBootstrap.Carousel.Item interval={500} >
    <img
      className="d-block w-80"
      src="http://localhost:5001/png/luke-chesser-B_oL3jEt5L4-unsplash.jpg"
      alt="First slide"
      style={{height:"400px"}}
    />

    <ReactBootstrap.Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </ReactBootstrap.Carousel.Caption>
  </ReactBootstrap.Carousel.Item> */}
  <ReactBootstrap.Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src="http://localhost:5001/png/pexels-nick-collins-1293120.jpg"
     
      alt="Second slide"
      style={{height:"500px"}}
    />
    <ReactBootstrap.Carousel.Caption>
      <h3>First slide </h3>
      <p>Pehli image</p>
    </ReactBootstrap.Carousel.Caption>
  </ReactBootstrap.Carousel.Item>
  <ReactBootstrap.Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src="http://localhost:5001/png/luke-chesser-B_oL3jEt5L4-unsplash.jpg"
      alt="Third slide"
      style={{height:"500px"}}
      
    />
    <ReactBootstrap.Carousel.Caption>
      <h3>Second slide</h3>
      <p>Doosri image</p>
    </ReactBootstrap.Carousel.Caption>
  </ReactBootstrap.Carousel.Item>
</ReactBootstrap.Carousel>
</div>
    )
}

export default Carousel
