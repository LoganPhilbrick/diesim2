import "./App.css";
import { Col, Row, Container } from "reactstrap";
import Header from "./components/Header.js";
import HistoryBox from "./components/History";
import ResultsBar from "./components/Results";
import TopButtonGroup from "./components/TopButtonGroup";
import BottomButtonGroup from "./components/BottomButtonGroup";
import RollButton from "./components/RollButton";

function App() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row className="pt-5 ps-0 pe-0 pb-4 ps-md-5 justify-content-center order-md-first">
          <HistoryBox />
          <Col className="order-first order-md-last">
            <ResultsBar />
            <TopButtonGroup />
            <BottomButtonGroup />
            <RollButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
