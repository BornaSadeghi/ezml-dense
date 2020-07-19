import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles.css'

function Line (x1, y1, x2, y2) {
	return (
		<svg style={{stroke:"rgb(0,0,0)", strokeWidth: "8px"}}>
			<line x1={x1} y1={y1} x2={x2} y2={y2}></line>
		</svg>
	)
}

function Layer (numNodes) {
	return {
		numNodes: numNodes
	}
}

let layers = [
	Layer(5),
	Layer(5),
	Layer(3),
	Layer(1)
]

function NN () {
	let contrast = 75;
	let brightness = 0;
	// return Line (0,0,100,100)
	return (
		<Row id="nn">
		{
			layers.map((layer, index) => (
				<Col style={{backgroundColor: `rgb(0,${(255-contrast)/2 + contrast/layers.length*(index) + brightness},0)`}}>
					<svg className="layer" >
					{
						[...Array(layer.numNodes)].map((node) => (
							<circle className="node" style={{/*display: "inline-block", */r:"50px", borderRadius: "50%", width: "10%", paddingTop: "10%"}}></circle>
						))
					}
					</svg>
				</Col>
			))
		}
		</Row>
	)
}
		
export default NN;