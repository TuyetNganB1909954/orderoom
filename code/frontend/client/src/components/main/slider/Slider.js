import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bannar1 from '../../../asset/bannar1.jpg';
import bannar2 from '../../../asset/bannar2.jpg';
import bannar3 from '../../../asset/bannar3.jpg'

function slider() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannar1}
          alt="First slide"/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default slider