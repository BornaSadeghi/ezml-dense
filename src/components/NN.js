import React, {Component} from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles.css'


function Node (y, r=50) {
	return (
		<svg>
			<circle className="node" style={{cy:y+r, r:`${r}px`, borderRadius: "50%", width: "10%", paddingTop: "10%"}}></circle>
		</svg>
	)
}


function Line (x1, y1, x2, y2) {
	return (
		<svg style={{stroke:"rgb(0,0,0)", strokeWidth: "8px"}}>
			<line x1={x1} y1={y1} x2={x2} y2={y2}></line>
		</svg>
	)
}

function Layer (numNodes) {
	// let height = document.getElementById("#nn").height()

	return (
	<>
	{
		[...Array(numNodes)].map((/*node*/) => (
			Node(4)
		))
	}
	</>
	)
}

let network = [
	Layer(5),
	Layer(5),
	Layer(3),
	Layer(1)
]

function NN () {
	let contrast = 50;
	let brightness = 0;
	// return Line (0,0,100,100)
	return (
		<Row id="nn">
		{
			network.map((layer, index) => (
				<Col style={{backgroundColor: `rgb(0,${(255-contrast)/2 + contrast/network.length*(index) + brightness},0)`}}>
					<svg>{layer}</svg>
				</Col>
			))
		}
		</Row>
	)
}
		
export default NN;