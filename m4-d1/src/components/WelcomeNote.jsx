import React from 'react';
import { Jumbotron } from 'react-bootstrap';
class WelcomeMsg extends React.Component {
    
    render() { 
        return ( 
        <Jumbotron>
            <h1>Welcome!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia, quam sapiente ipsam iure hic.
            </p>
            
          </Jumbotron> );
    }
}
 
export default WelcomeMsg;