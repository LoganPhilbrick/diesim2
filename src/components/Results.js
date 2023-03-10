import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

const ResultsBar = () => {
  const { rollResults } = useSelector((state) => state.dieSelection);

  return (
    <Row className="justify-content-center">
      <Col xs="6" md="10" className="text-center">
        <p id="result" className="boxShadow blueBorder p-4 text-light font-weight-bold">
          Total{rollResults ? `: ${rollResults}` : ""}
        </p>
      </Col>
    </Row>
  );
};

export default ResultsBar;
