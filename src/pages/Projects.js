
import '../App.css';
import { Jumbotron, Button,CardDeck,Card} from 'react-bootstrap';
import crdimg4 from '../images/fit4.jpg';
import crdimg5 from '../images/fit5.jpg';
import crdimg6 from '../images/fit6.jpg';


export default function  Projects() {
return (
<div className="App-project">
   
<Jumbotron className="heroImg">
<div className="Cover_con pr2">
   <h1>Hello, world!</h1>
   <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
   </p>
   <p>
      <Button variant="primary">Learn more</Button>
   </p>
</div>
</Jumbotron>


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



</div>



);
}