import React, { useEffect } from "react";
import { Col, Row, Button, ButtonGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setNumberOfDice } from "../redux/dieSelection";

const TopButtonGroup = (props) => {
  // const [rSelected, setRSelected] = useState(1);
  const rSelected = useSelector((state) => state.dieSelection.numberOfDice);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(rSelected);
  }, [rSelected]);

  return (
    <Row>
      <Col className="text-center">
        <div className="p-4 text-light">Number of Rolls:</div>
        <ButtonGroup className="roundedBtn boxShadow">
          <Button className="btn-dark" onClick={() => dispatch(setNumberOfDice(1))} active={rSelected === 1}>
            1
          </Button>
          <Button className="btn-dark" onClick={() => dispatch(setNumberOfDice(2))} active={rSelected === 2}>
            2
          </Button>
          <Button className="btn-dark" onClick={() => dispatch(setNumberOfDice(3))} active={rSelected === 3}>
            3
          </Button>
          <Button className="btn-dark" onClick={() => dispatch(setNumberOfDice(4))} active={rSelected === 4}>
            4
          </Button>
          <Button className="btn-dark" onClick={() => dispatch(setNumberOfDice(5))} active={rSelected === 5}>
            5
          </Button>
          <Button className="btn-dark" onClick={() => dispatch(setNumberOfDice(6))} active={rSelected === 6}>
            6
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default TopButtonGroup;
