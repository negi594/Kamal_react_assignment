
import '../App.css';
import { Form, Button } from 'react-bootstrap';
export default function Contact() {
   return (
      <div className="container">
         <Form>
            <h1 className="heading"> Please contact </h1>
            <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
               </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicmessage">
               <Form.Label>Message</Form.Label>
               <Form.Control className="text1" type="text" placeholder="message" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
   </div>
   );
}