import { Col } from "reactstrap";

const HistoryBox = () => {
  return (
    <Col id="historyBox" xs="10" md="3" className="boxShadow blueBorder ms-md-5">
      <h5 className="text-center p-3 ms-md-3 text-light border-bottom">History</h5>
      <ul type="unstyled" className="text-left text-light" id="historyList"></ul>
    </Col>
  );
};

export default HistoryBox;
