import React, { useState } from "react";
import { Col, Row } from "reactstrap";

const TopButtonGroup = () => {
  const [checked, setChecked] = useState(null);

  const isChecked = (value) => value === checked;

  const onSelect = ({ target: { value } }) => {
    setChecked(value);
  };
  console.log(checked);
  return (
    <Row>
      <Col className="text-center text-light">
        <div className="p-4">Number of Rolls:</div>
        <div className="form-check">
          <input type="radio" name="rollRadios" id="rollRad1" value="1" checked={isChecked("1")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="rollRad1">
            1
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="rollRadios" id="rollRad2" value="2" checked={isChecked("2")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="rollRad2">
            2
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="rollRadios" id="rollRad3" value="3" checked={isChecked("3")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="rollRad3">
            3
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="rollRadios" id="rollRad4" value="4" checked={isChecked("4")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="rollRad4">
            4
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="rollRadios" id="rollRad5" value="5" checked={isChecked("5")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="rollRad5">
            5
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="rollRadios" id="rollRad6" value="6" checked={isChecked("6")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="rollRad6">
            6
          </label>
        </div>
      </Col>
    </Row>
  );
};

export default TopButtonGroup;
