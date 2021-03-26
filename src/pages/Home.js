import jupiter from '../images/jupiter.png';
import Saturn from '../images/Saturn.jpg';
import star from '../images/Sun.jpg';

import { Jumbotron, Button, Card, CardDeck } from 'react-bootstrap';
import '../App.css';
export default function Home() {
   return (
      <div className="App">
         <main className="App-main">


            <Jumbotron className="banner">
               <div className="container">
                  <h1>Hello, world!</h1>
                  <p>
                     This is a simple hero unit, a simple jumbotron-style component for calling
                     extra attention to featured content or information.
                  </p>
                  <p>
                     <Button variant="light">Learn more</Button>
                  </p>
               </div>
            </Jumbotron>


            <div className="container">
               <CardDeck >
                  <Card>
                     <Card.Img variant="top" src={jupiter} className="App-logo" alt="logo" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a wider card with supporting text below as a natural lead-in to
                           additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>

                  </Card>
                  <Card>
                     <Card.Img variant="top" src={Saturn} className="App-deck" alt="deck" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This card has supporting text below as a natural lead-in to additional
                           content.
                        </Card.Text>
                     </Card.Body>

                  </Card>
                  <Card>
                     <Card.Img variant="top" src={star} className="App-star" alt="star" />
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