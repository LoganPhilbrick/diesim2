import React, { useEffect, useState } from "react";
import { Col, Row, Button, ButtonGroup } from "reactstrap";

const BottomButtonGroup = () => {
  const [rSelected, setRSelected] = useState(4);

  useEffect(() => {
    console.log(rSelected);
  }, [rSelected]);

  return (
    <Row>
      <Col className="text-center pb-3">
        <div className="p-4 text-light">Number of Sides:</div>
        <ButtonGroup className="roundedBtn boxShadow">
          <Button className="btn-dark" onClick={() => setRSelected(4)} active={rSelected === 4}>
            D4
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(6)} active={rSelected === 6}>
            D6
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(8)} active={rSelected === 8}>
            D8
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(10)} active={rSelected === 10}>
            D10
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(12)} active={rSelected === 12}>
            D12
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(20)} active={rSelected === 20}>
            D20
          </Button>
          <Button className="btn-dark" onClick={() => setRSelected(100)} active={rSelected === 100}>
            D100
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default BottomButtonGroup;
