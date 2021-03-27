import crdimg1 from '../images/fit1.jpg';
import crdimg2 from '../images/fit2.jpg';
import crdimg3 from '../images/fit3.jpg';
import crdimg4 from '../images/fit4.jpg';
import crdimg5 from '../images/fit5.jpg';
import crdimg6 from '../images/fit6.jpg';

import { Carousel, Card, CardDeck } from 'react-bootstrap';
import '../App.css';
export default function Home() {
   return (
      <div className="App">

   <main className="maincontent">
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={crdimg1} className="crdimg" alt="pimg"
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
      src={crdimg2} className="crdimg" alt="pimg"
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
      src={crdimg3} className="crdimg" alt="pimg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         


            <div className="container">
               <CardDeck >
                  <Card>
                     <Card.Img variant="top" src={crdimg4} className="card-item1" alt="crdimg1" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>

                  </Card>
                  <Card>
                     <Card.Img variant="top" src={crdimg5} className="card-item2" alt="crdimg2" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This card has supporting text below as a natural lead-in to additional
                           content.
                        </Card.Text>
                     </Card.Body>

                  </Card>
                  <Card>
                     <Card.Img variant="top" src={crdimg6} className="card-item3" alt="crdimg3" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a wider card with supporting text below as a natural lead-in to
                           additional content. This card has even longer content than the first to
                           show that equal height action.
                        </Card.Text>
                     </Card.Body>

                  </Card>
               </CardDeck>


            </div>


         </main>
      </div>
   );
}