
import '../App.css';

import { Carousel } from 'react-bootstrap';
import star1 from '../images/star1.jpg';
import star2 from '../images/star2.jpg';
import star3 from '../images/star3.jpg';


export default function  Projects() {
return (
<div className="App">


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={star1} className="star1" alt="pimg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={star2} className="star2" alt="pimg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={star3} className="star3" alt="pimg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
);
}







