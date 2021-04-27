import React from 'react';
import { Card, Container } from 'react-bootstrap';

class Footer extends React.Component {
	state = {};
	render() {
		return (
           
			<Container
				fluid
				className="mt-5  px-0 mx-0"
			>
				<Card >
					<Card.Header className='text-center'>Footer</Card.Header>
					<Card.Body>
						<Card.Title className='text-center'> Footer Title</Card.Title>
						<Card.Text className='text-center'>
							Footer Body
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

export default Footer;
