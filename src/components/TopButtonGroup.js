import React, { useState } from "react";
import { Col, Row, Button, ButtonGroup } from "reactstrap";

const TopButtonGroup = (props) => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <Row>
      <Col className="text-center">
        <div className="p-4 text-light">Number of Rolls:</div>
        <ButtonGroup className="roundedBtn boxShadow">
          <Button className="btn-dark" onClick={() => setRSelected(1)} active={rSelected === 1}>
            1
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(2)} active={rSelected === 2}>
            2
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(3)} active={rSelected === 3}>
            3
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(4)} active={rSelected === 4}>
            4
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(5)} active={rSelected === 5}>
            5
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(6)} active={rSelected === 6}>
            6
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default TopButtonGroup;
