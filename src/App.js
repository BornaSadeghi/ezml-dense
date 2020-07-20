import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import NN from './components/NN2'

function App () {
	return (
		<div className="App" style={{height: "100%", backgroundColor:"rgb(70,0,70)"}}>
			<div id="options">
				<Image id="logo" src={require("./ezml-dense-transparent.png")}></Image>
				<div style={{marginTop:"auto", marginBottom:"auto"}}>
					<Button className="button">Copy Keras code</Button>
					<Button className="button">Add layer</Button>
					<Button style={{backgroundColor:"white", color:"black"}} className="button">Reset</Button>
				</div>
			</div>
			<NN style={{height: "100%"}}></NN>
		</div>
		);
	}
	
	export default App;
	