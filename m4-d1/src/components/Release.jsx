import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import books from '../data/fantasy.json'

class Cover extends React.Component {
    state = {  }
    render() { 
        return (
            <Container>
            <Row className="justify-content-center mt-3">
                
            
            {
            books.map(book => (
                <Col sm={12} lg={3}>
                <Card >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
          {book.category}
          </Card.Text>
          
        </Card.Body>
      </Card>
      </Col>
     
      )) 
    }
      
                </Row>
            </Container>
        )  
    }
}
 
export default Cover;