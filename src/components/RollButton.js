import { Col, Row, Button } from "reactstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateRolls } from "../redux/dieSelection";

// import TopButtonGroup from "./components/TopButtonGroup";

const RollButton = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Row className="justify-content-center pb-4">
      <Col xs="6" className="text-center pt-5 pb-5">
        <Button id="clickToRoll" className="btn-lg greenBorder btn-success boxShadow" onClick={() => dispatch(calculateRolls())}>
          Roll!
        </Button>
      </Col>
    </Row>
  );
};

export default RollButton;
