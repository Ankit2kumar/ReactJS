import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import books from '../data/fantasy.json'

class Cover extends React.Component {
    state = {  }
    render() { 
        return (
            
            
            
            books.map(book => (
                <Card >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
          {book.category}
          </Card.Text>
          
        </Card.Body>
      </Card>
     
      )) );
            
        
    }
}
 
export default Cover;