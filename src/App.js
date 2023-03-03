import "./App.css";
import { Col, Row, Container } from "reactstrap";
import Header from "./components/Header.js";
import HistoryBox from "./components/History";
import ResultsBar from "./components/Results";

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="pt-5 ps-0 pe-0 pb-4 ps-md-5 justify-content-center">
          <HistoryBox />
          <Col className="order-first order-md-last">
            <ResultsBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
