import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import NN from './components/NN2'

function App () {
	return (
		<div className="App" style={{height: "100%", backgroundColor:"rgb(70,0,70)"}}>
			<Image id="logo" src={require("./ezml-dense-transparent.png")}></Image>
			<NN style={{height: "100%"}}></NN>
		</div>
		);
	}
	
	export default App;
	