import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const HistoryBox = () => {
  const { history } = useSelector((state) => state.dieSelection);

  return (
    <Col id="historyBox" xs="10" md="3" className="boxShadow blueBorder ms-md-5">
      <div style={{ display: "flex", justifyContent: "center", position: "relative" }} className="border-bottom">
        <h5 className="text-center p-3 ms-md-3 text-light">History</h5>
        <button style={{ position: "absolute" }} id="reset" className="btn shadow-none text-light">
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
      <ul type="unstyled" className="text-left text-light" id="historyList">
        {history.map((item) => (
          <li style={{ listStyleType: "none" }}>{item}</li>
        ))}
      </ul>
    </Col>
  );
};

export default HistoryBox;
