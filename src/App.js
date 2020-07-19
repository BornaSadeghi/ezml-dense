import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import NN from './components/NN'

function App () {
  return (
    <div className="App" style={{height: "100%"}}>
      <Container style={{height: "100%"}} fluid>

        <NN style={{height: "100%"}}></NN>

      </Container>
    </div>
  );
}

export default App;
