import React, { useState } from "react";
import { Col, Row } from "reactstrap";

const BottomButtonGroup = () => {
  const [checked, setChecked] = useState(null);

  const isChecked = (value) => value === checked;

  const onSelect = ({ target: { value } }) => {
    setChecked(value);
  };
  console.log(checked);
  return (
    <Row>
      <Col className="text-center text-light pb-3">
        <div className="p-4">Number of Sides:</div>
        <div className="form-check">
          <input type="radio" name="sideRadios" id="sideRadD4" value="D4" checked={isChecked("D4")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="sideRadD4">
            D4
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="sideRadios" id="sideRadD6" value="D6" checked={isChecked("D6")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="sideRadD6">
            D6
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="sideRadios" id="sideRadD8" value="D8" checked={isChecked("D8")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="sideRadD8">
            D8
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="sideRadios" id="sideRadD10" value="D10" checked={isChecked("D10")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="sideRadD10">
            D10
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="sideRadios" id="sideRadD12" value="D12" checked={isChecked("D12")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="sideRadD12">
            D12
          </label>
        </div>
        <div className="form-check">
          <input type="radio" name="sideRadios" id="sideRadD20" value="D20" checked={isChecked("D20")} onChange={onSelect} />
          <label className="form-check-label" htmlFor="sideRadD20">
            D20
          </label>
        </div>
      </Col>
    </Row>
  );
};

export default BottomButtonGroup;
