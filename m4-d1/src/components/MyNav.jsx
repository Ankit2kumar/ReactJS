import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
class NavBar extends React.Component {
	state = {};
	render() {
		return (
			<Navbar className='sticky-top' bg="dark" variant='dark' expand="lg">
				<Navbar.Brand href="#">Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					
                   <Nav>
					<Nav.Link href="#">About</Nav.Link>
					<Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;
