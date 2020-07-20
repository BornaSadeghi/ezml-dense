import React, {Component} from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles.css'

function Layer (numNodes) {
	return {
        numNodes: numNodes
    }
}

// Using node counts for now instead of layers. Will implement more functionality into each layer.
let network = [
	4,
	8,
	3,
	1
]

/*
Sequential([
	Dense(40, activation="relu", input_dim=2),
	Dense(20),
    Dense(1)
])

*/

function getShade (contrast, brightness, numLayers, index) {
    return `rgb(${(255-contrast)/2 + contrast/network.length*(index) + brightness},0,${(255-contrast)/2 + contrast/network.length*(index) + brightness})`
}

function NN () {
	let contrast = 100;
	let brightness = 50;
	// return Line (0,0,100,100)
	return (
		<Row id="nn" style={{margin: "0px"}}>
		{
			network.map((nodeCount, index) => (
				<Col className="layer" style={{padding:"0px", backgroundColor: getShade(contrast, brightness, network.length, index)}}>
                    <div className="layer-label">Layer {index+1}</div>
                    <div className="nodes" style={{flexWrap:"nowrap"}}>
                    {
                        [...Array(nodeCount)].map((/*node*/) => (
                            <div className="node2" style={{width:"20%", paddingTop:"20%", marginTop:"5%"}}></div>
                        ))
                    }
                    </div>
                     
                    <div className="layer-controls" style={{backgroundColor: getShade(contrast, brightness-10, network.length, index)}}>
						<div className="layer-label">Layer Controls</div>
						<input type="number" min="1" max="9999" placeholder="Number of nodes"></input>
						<select placeholder="Activation function">
							<option>linear</option>
							<option>sigmoid</option>
							<option>softmax</option>
							<option>relu</option>
							<option>tanh</option>
						</select>
                        <Button>
                            Submit
                        </Button>
                    </div>
				</Col>
			))
		}
		</Row>
	)
}
		
export default NN;