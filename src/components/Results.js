import { Col, Row } from "reactstrap";

const ResultsBar = () => {
  return (
    <Row className="justify-content-center">
      <Col xs="6" md="10" className="text-center">
        <p id="result" className="boxShadow blueBorder p-4 text-light font-weight-bold">
          Results
        </p>
      </Col>
    </Row>
  );
};

export default ResultsBar;
