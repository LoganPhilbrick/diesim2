import React, { useState } from "react";
import { Col, Row, Button, ButtonGroup } from "reactstrap";

const BottomButtonGroup = () => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <Row>
      <Col className="text-center pb-3">
        <div className="p-4 text-light">Number of Sides:</div>
        <ButtonGroup className="roundedBtn boxShadow">
          <Button className="btn-dark" onClick={() => setRSelected(1)} active={rSelected === 1}>
            D4
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(2)} active={rSelected === 2}>
            D6
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(3)} active={rSelected === 3}>
            D8
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(4)} active={rSelected === 4}>
            D10
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(5)} active={rSelected === 5}>
            D12
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(6)} active={rSelected === 6}>
            D20
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(7)} active={rSelected === 7}>
            D100
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default BottomButtonGroup;
