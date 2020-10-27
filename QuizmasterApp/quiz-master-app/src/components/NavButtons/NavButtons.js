// React
import React, {useState} from "react";

// Component
import NavButton from "../NavButton/NavButton";
import CustomModal from "../CustomModal/CustomModal";
import { closeWebSocket }  from "../../websocket"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
// Css
import "./NavButtons.css";

function NavButtons(props) {
  const [modalShow, setModalShow] = useState(false);

  let buttonsHtml;
  let modalHtml;

  if (props.returnButton === true) {
    buttonsHtml = (
      <div>
        <div className="float-left align-bottom-left"
            onClick={() => closeWebSocket()}>
          <NavButton></NavButton>
        </div>
        <div
          id="NavButtons"
          className="float-right align-bottom-right"
          onClick={() => setModalShow(true)}
        >
          <NavButton></NavButton>
        </div>
      </div>
    );
  } else {
    buttonsHtml = (
      <div
        id="NavButtons"
        className="float-right align-bottom-right"
        onClick={() => setModalShow(true)}
      >
        <NavButton></NavButton>
      </div>
    );
  }

  if (props.callback !== undefined) {
    modalHtml = (
      <CustomModal
        title={props.title}
        path={props.path}
        show={modalShow}
        onHide={() => setModalShow(false)}
        callback={() => props.callback()}
      />
    );
  } else {
    modalHtml = (
      <CustomModal
        title={props.title}
        path={props.path}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    );
  }

  return (
    <div className="div-content">
      {modalHtml}
      {buttonsHtml}
    </div>
  );
}

export default NavButtons;
