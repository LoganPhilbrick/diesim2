import { Col, Row, Button } from "reactstrap";

const RollButton = () => {
  return (
    <Row className="justify-content-center pb-4">
      <Col xs="6" className="text-center pt-5 pb-5">
        <Button id="clickToRoll" className="btn-lg greenBorder btn-success boxShadow">
          Roll!
        </Button>
      </Col>
    </Row>
  );
};

export default RollButton;
